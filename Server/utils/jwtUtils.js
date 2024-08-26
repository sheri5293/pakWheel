import jwt from "jsonwebtoken";
const { sign } = jwt;

const generateToken = (user) => {
  return sign({ id: user }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export { generateToken };
