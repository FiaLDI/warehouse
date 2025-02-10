import React from "react";
import { useFormContext } from "react-hook-form";

export const TextAreaField = ({
    name,
    label,
    error,
}: {
    name: string;
    label: string;
    error: string | null;
}) => {
    const { register } = useFormContext();
    return (
        <div>
            <textarea
                className="textarea--core"
                placeholder={label}
                {...register(name)}
            ></textarea>
            {error !== "undefined" && (
                <span style={{ color: "red" }}>{error}</span>
            )}
        </div>
    );
};
