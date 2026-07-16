import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback_secret");

      // Get user from token and attach to request
      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) {
        return res.status(401).json({ error: "User not found with this token" });
      }

      return next();
    } catch (error) {
      console.error("Auth Middleware Error:", error);
      return res.status(401).json({ error: "Not authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ error: "Not authorized, no token provided" });
  }
};

export const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ error: "Not authorized as an admin" });
  }
};
