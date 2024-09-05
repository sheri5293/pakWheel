import db from "../config/db.js";

const Comment = {
  getCommentsByCarId: (carId, callback) => {
    const query =
      "SELECT * FROM comments WHERE car_id = ? ORDER BY created_at DESC";
    db.query(query, [carId], callback);
  },

  addComment: (commentData, callback) => {
    const query =
      "INSERT INTO comments (text, isUser, car_id) VALUES (?, ?, ?)";
    db.query(
      query,
      [commentData.text, commentData.isUser, commentData.carId],
      callback
    );
  },
};

export default Comment;
