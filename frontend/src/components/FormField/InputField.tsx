import React from "react";
import { useFormContext } from "react-hook-form";

export const InputField = ({
    name,
    label,
    error,
    type,
    placeholder,
}: {
    name: string;
    label: string;
    error: string | null;
    type: string;
    placeholder?: string;
}) => {
    const { register } = useFormContext();

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                className="input-form--core"
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />
            {error !== "undefined" && (
                <span style={{ color: "red" }}>{error}</span>
            )}
        </div>
    );
};
