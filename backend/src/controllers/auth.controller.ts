import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const Auth = new AuthService();

export const registerController = async (req: Request, res: Response) => {
    const registerData = req.body;

    const result = await Auth.register(registerData);

    return res.status(201).json({ message: result });
};

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await Auth.login(email, password);

    if (result.token && result.user) {
        res.cookie("accessToken", result.token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
        });
        res.cookie("refreshToken", result.token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
        });

        return res.status(200).json({
            message: "User logged in successfully",
            user: result.user,
        });
    }

    return res.status(400).json({ message: "Uncorrect login or password" });
};

export const logoutController = async (req: Request, res: Response) => {
    await Auth.logout(req.cookies.accessToken);
    await Auth.logout(req.cookies.refreshToken);

    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });

    return res.status(200).json({ message: "Logout successful" });
};

export const checkController = async (req: Request, res: Response) => {
    const accessToken = req.cookies;

    return res.status(201).json({
        message: "OK",
        user: await Auth.personal(accessToken.accessToken),
    });
};
