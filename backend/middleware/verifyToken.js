import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });
    }

    // ✅ attach user info to request
    req.userId = decoded.userId;

    // ✅ move to next middleware / controller
    next();
  } catch (error) {
    console.log("Error in verifyToken", error);
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - token expired or invalid" });
  }
};
