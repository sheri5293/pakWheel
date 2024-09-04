import db from "../config/db.js";

const Comment = {
  getAllComments: (callback) => {
    const query = "SELECT * FROM comments ORDER BY created_at DESC";
    db.query(query, callback);
  },

  addComment: (commentData, callback) => {
    const query = "INSERT INTO comments (text, isUser) VALUES (?, ?)";
    db.query(query, [commentData.text, commentData.isUser], callback);
  },
};

export default Comment;
