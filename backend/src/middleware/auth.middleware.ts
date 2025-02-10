import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const Auth = new AuthService();

export const checkCookies = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const accessToken = req.cookies;
    // Проверяем наличие accessToken и refreshToken в cookies
    if (!accessToken.accessToken || !accessToken.refreshToken) {
        return res
            .status(401)
            .json({ message: "Unauthorized: Cookies missing" });
    }

    next();
};

export const checkEmailPassword = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    next();
};

export const emailCheckController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Not email" });
    }

    const result = await Auth.checkEmail(email as string);

    if (result) {
        return res.status(400).json({ message: "email is locked" });
    }

    next();
};
