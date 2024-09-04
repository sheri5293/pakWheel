import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User, Car } from "../models/userModel.js";
import passport from "passport";
import { generateToken } from "../utils/jwtUtils.js";
import fs from "fs";
import path from "path";
import Busboy from "busboy";
import multer from "multer";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import db from "../config/db.js";
import Comment from "../models/Comment.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const signup = async (req, res) => {
  const { email, password, confirmPassword, username, phoneNO, location } =
    req.body;

  if (
    !email ||
    !password ||
    !confirmPassword ||
    !username ||
    !phoneNO ||
    !location
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    User.findByEmail(email, async (err, results) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (results.length > 0)
        return res.status(400).json({ message: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);
      User.create(
        {
          email,
          password: hashedPassword,
          confirmPassword: hashedPassword,
          username,
          phoneNO,
          location,
        },
        (err, result) => {
          if (err) return res.status(500).json({ message: "Database error" });
          res.status(201).json({ message: "User created successfully" });
        }
      );
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  User.findByEmail(email, async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0)
      return res.status(404).json({ message: "User not found" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user.id);
    res.status(200).json({ token });
  });
};

const googleLogin = () => {
  passport.authenticate("google", {
    scope: ["profile", "email"],
  });
};

const googleCallback = (req, res) => {
  passport.authenticate("google", {
    successRedirect: "/login/success",
    failureRedirect: "/login/failed",
  });
};

const submitCarInfo = async (req, res) => {
  const { city, carInfo, registeredIn, color, mileage, price, description } =
    req.body;

  if (
    !city ||
    !carInfo ||
    !registeredIn ||
    !color ||
    !mileage ||
    !price ||
    !description
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newCar = {
      city,
      carInfo,
      registeredIn,
      color,
      mileage,
      price,
      description,
    };

    Car.create(newCar, (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      res
        .status(201)
        .json({ message: "Car information submitted successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${uuidv4()}`;
    const fileExtension = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${fileExtension}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Invalid file type. Only JPEG, PNG, and GIF files are allowed."
        )
      );
    }
  },
});

const uploadImage = (req, res) => {
  console.log("Request body:", req.body);

  const carId = parseInt(req.body.car_id, 10);
  console.log("Parsed carId:", carId);

  if (isNaN(carId) || carId <= 0) {
    return res.status(400).send("Invalid Car ID");
  }

  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  const { filename, path: filePath } = req.file;
  const uploadedAt = new Date();

  db.query(
    "SELECT car_id FROM car_info WHERE car_id = ?",
    [carId],
    (err, carResults) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send("Error fetching car information");
      }

      console.log("Car query results:", carResults);

      if (carResults.length === 0) {
        return res.status(404).send("Car ID does not exist");
      }

      db.query(
        "INSERT INTO images (filename, filepath, uploaded_at, car_id) VALUES (?, ?, ?, ?)",
        [filename, filePath, uploadedAt, carId],
        (err, result) => {
          if (err) {
            console.error("Error saving image information:", err);
            return res
              .status(500)
              .send("Error saving image information to the database");
          }

          res.send("Image uploaded and saved successfully");
        }
      );
    }
  );
};

const saveContact = async (req, res) => {
  const { car_id, mobile, secondaryMobile } = req.body;

  if (
    !car_id ||
    !mobile ||
    !/^[0-9]{11}$/.test(mobile) ||
    (secondaryMobile && !/^[0-9]{11}$/.test(secondaryMobile))
  ) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  const sql =
    "INSERT INTO contacts (car_id, mobile, secondary_mobile) VALUES (?, ?, ?)";

  try {
    await db.query(sql, [car_id, mobile, secondaryMobile]);
    res.status(200).json({ message: "Contact number saved successfully" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Database error" });
  }
};

const getCarDetails = async (req, res) => {
  const carId = req.params.id;

  const carQuery = "SELECT * FROM car_info WHERE id = ?";
  const imagesQuery = "SELECT * FROM images WHERE car_id = ?";
  const contactQuery = "SELECT * FROM contacts WHERE car_id = ?";

  try {
    const [carResults] = await db.query(carQuery, [carId]);
    if (carResults.length === 0) {
      return res.status(404).json({ message: "Car not found" });
    }

    const [imagesResults] = await db.query(imagesQuery, [carId]);
    const [contactResults] = await db.query(contactQuery, [carId]);

    res.status(200).json({
      carInfo: carResults[0],
      images: imagesResults,
      contactInfo: contactResults[0],
    });
  } catch (err) {
    console.error("Error fetching car details:", err);
    res.status(500).json({ message: "Database error" });
  }
};

const getCarDetail = async (req, res) => {
  const carId = req.params.id;

  const carQuery = "SELECT * FROM car_info WHERE id = ?";

  try {
    const [carResults] = await db.query(carQuery, [carId]);
    if (carResults.length === 0) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json({
      carInfo: carResults[0],
    });
  } catch (err) {
    console.error("Error fetching car details:", err);
    res.status(500).json({ message: "Database error" });
  }
};
const getComments = (req, res) => {
  Comment.getAllComments((err, results) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
    } else {
      res.json(results);
    }
  });
};

const addComment = (req, res) => {
  const newComment = {
    text: req.body.text,
    isUser: req.body.isUser,
  };

  Comment.addComment(newComment, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
    } else {
      res.status(201).json({ id: result.insertId, ...newComment });
    }
  });
};
export {
  login,
  signup,
  googleLogin,
  googleCallback,
  submitCarInfo,
  uploadImage,
  upload,
  saveContact,
  getCarDetail,
  getComments,
  addComment,
};
