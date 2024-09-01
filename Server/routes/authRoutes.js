import express from "express";
import multer from "multer";
import path from "path";
import {
  login,
  signup,
  googleLogin,
  googleCallback,
  submitCarInfo,
  upload,
  uploadImage,
  saveContact,
  getCarDetail,
} from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/google-login", googleLogin);
router.get("/google/callback", googleCallback);

router.get("/services", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route" });
});

router.get("/post-ad", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route" });
});

router.post("/submit-car-info", submitCarInfo);
router.post("/upload-images", upload.single("image"), uploadImage);

router.post("/contact-info", saveContact);

//getCarInfo
router.get("/get-car/:id", getCarDetail);

export default router;
