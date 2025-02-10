import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUserMutation, useLogoutUserMutation } from "../services/auth";
import { schema } from "../utils/validation";
import { InputField } from "./FormField/InputField";
import { LoginForm } from "../services/types";
import { useAppDispatch } from "../app/hooks";
import { loginSuccess, logout } from "../features/auth/authSlices";
import { selectUser } from "../features/auth/authSelectors";
import { selectAuth } from "../features/auth/authSelectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AuthForm = () => {
    const methods = useForm<LoginForm>({
        resolver: zodResolver(schema),
    });
    const {
        handleSubmit,
        formState: { errors },
        reset,
    } = methods;

    const [loginUser] = useLoginUserMutation();
    const [logoutUser] = useLogoutUserMutation();
    const notify = () => toast("Fetching");
    const dispatch = useAppDispatch();
    const isAuth = useSelector(selectAuth) || false;
    const user = useSelector(selectUser)?.username || "Guest";
    const navigator = useNavigate();

    const onSubmit = async (data: LoginForm) => {
        try {
            notify();
            const response = await loginUser(data).unwrap();
            dispatch(loginSuccess(response?.user));

            reset();
            navigator("/");
        } catch (err: any) {
            if (err.data.message) {
                console.error("Registration failed:", err.data.message);
                toast(`Error: ${err.data.message}`);
            } else {
                console.error("Registration failed:", err);
                toast(`Error: ${err.error}`);
            }
        }
    };

    const onLogout = async () => {
        try {
            await logoutUser({}).unwrap();
            dispatch(logout());
        } catch (err: any) {
            console.log(err);
        }
    };

    return isAuth ? (
        <>
            <div className="">
                Hi, {user} <button onClick={() => onLogout()}>exit</button>
            </div>
        </>
    ) : (
        <>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="login-form ">
                    <h2 className="form-title center-text">Login</h2>
                    <InputField
                        name="email"
                        label=""
                        error={String(errors.email?.message)}
                        type="email"
                        placeholder="Enter email"
                    />
                    <InputField
                        name="password"
                        label=""
                        error={String(errors.password?.message)}
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">Login</button>
                </form>
                <ToastContainer />
            </FormProvider>
        </>
    );
};
