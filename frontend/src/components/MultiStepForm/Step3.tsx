import React, { JSX } from "react";
import { TextAreaField } from "../FormField/TextAreaField";
import { useForm } from "react-hook-form";
import { RegisterForm } from "../../services/types";

export const Stage3: React.FC = (): JSX.Element => {
    const AuthDataForm = useForm<RegisterForm>();
    const {
        formState: { errors },
    } = AuthDataForm;

    return (
        <>
            <TextAreaField
                name={"aboutUser"}
                label={"About me"}
                error={String(errors.aboutUser?.message)}
            />
        </>
    );
};
