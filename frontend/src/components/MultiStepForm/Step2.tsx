import React, { JSX } from "react";
import { RegisterForm } from "../../services/types";
import { useForm } from "react-hook-form";
import { InputField } from "../FormField/InputField";

export const Stage2: React.FC = (): JSX.Element => {
    const AuthDataForm = useForm<RegisterForm>();
    const {
        formState: { errors },
    } = AuthDataForm;

    return (
        <>
            <InputField
                name={"name"}
                label={""}
                error={String(errors.name?.message)}
                type={"text"}
                placeholder="Enter name"
            />
            <InputField
                name={"secondName"}
                label={""}
                error={String(errors.secondName?.message)}
                type={"text"}
                placeholder="Enter second name"
            />
            <InputField
                name={"age"}
                label={""}
                error={String(errors.age?.message)}
                type={"number"}
                placeholder="Enter age"
            />
            <InputField
                name={"gender"}
                label={""}
                error={String(errors.gender?.message)}
                type={"text"}
                placeholder="Enter gender"
            />
        </>
    );
};
