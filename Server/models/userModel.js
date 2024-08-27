import db from "../config/db.js";

class User {
  static findByEmail(email, callback) {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }

  static create(
    { email, password, confirmPassword, username, phoneNO, location },
    callback
  ) {
    const sql =
      "INSERT INTO users (email, password, confirmPassword, username, phoneNO, location) VALUES (?, ?, ?,?, ?, ?)";
    db.query(
      sql,
      [email, password, confirmPassword, username, phoneNO, location],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  }

  static findById(id, callback) {
    const sql = "SELECT * FROM users WHERE id = ?";
    db.query(sql, [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  }
}

const Car = {
  create: (carData, callback) => {
    const { city, carInfo, registeredIn, color, mileage, price, description } =
      carData;
    const query =
      "INSERT INTO car_info (city, carInfo, registeredIn, color, mileage, price, description) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [city, carInfo, registeredIn, color, mileage, price, description],
      (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
        }
        callback(err, result);
      }
    );
  },
};

export { User, Car };
