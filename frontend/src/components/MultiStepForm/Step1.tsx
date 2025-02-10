import React, { JSX } from "react";
import { RegisterForm } from "../../services/types";
import { useForm } from "react-hook-form";
import { InputField } from "../FormField/InputField";

export const Stage1: React.FC = (): JSX.Element => {
    const AuthDataForm = useForm<RegisterForm>();
    const {
        formState: { errors },
    } = AuthDataForm;

    return (
        <>
            <InputField
                name={"username"}
                label={""}
                error={String(errors.username?.message)}
                type={"text"}
                placeholder="Enter username"
            />
            <InputField
                name={"email"}
                label={""}
                error={String(errors.email?.message)}
                type={"email"}
                placeholder="Enter email"
            />
            <InputField
                name={"password"}
                label={""}
                error={String(errors.password?.message)}
                type={"password"}
                placeholder="Enter password"
            />
            <InputField
                name={"phoneNumber"}
                label={""}
                error={String(errors.phoneNumber?.message)}
                type={"text"}
                placeholder="Enter phone number"
            />
        </>
    );
};
