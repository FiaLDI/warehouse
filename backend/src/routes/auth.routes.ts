import express from "express";
import {
    registerController,
    loginController,
    logoutController,
    checkController,
} from "../controllers/auth.controller";
import {
    checkCookies,
    checkEmailPassword,
    emailCheckController,
} from "../middleware/auth.middleware";

const router = express.Router();

router.post("/api/register", emailCheckController, registerController);
router.post("/api/login", checkEmailPassword, loginController);
router.post("/api/logout", logoutController);

router.get("/api/protected/check", checkCookies, checkController);

export default router;
