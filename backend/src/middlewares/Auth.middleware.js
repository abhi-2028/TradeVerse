const jwt = require("jsonwebtoken");
const UserModel = require("../model/UserModel");

module.exports = async function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Please login first" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
