import express from "express"
import { signup, login, logout,verifyEmail,forgotpassword,resetpassword,checkAuth} from "../controllers/auth.controller.js";
import { verify } from "crypto";
import { verifyToken } from "../middleware/verifyToken.js";


const router = express.Router();

router.get("/check-auth", verifyToken,checkAuth)


router.post("/signup", signup);
router.post("/login",login);
router.post("/logout",logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotpassword);

router.post("/reset-password:token", resetpassword);


export default router;