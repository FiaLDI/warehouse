import React, { JSX, useState } from "react";
import { Stage1 } from "./MultiStepForm/Step1";
import { Stage2 } from "./MultiStepForm/Step2";
import { Stage3 } from "./MultiStepForm/Step3";
import { FormProvider, useForm } from "react-hook-form";
import { RegisterForm } from "../services/types";
import { ToastContainer, toast } from "react-toastify";
import { useRegisterUserMutation } from "../services/auth";
import { useNavigate } from "react-router-dom";

export const MultiRegisterFormCore: React.FC = (): JSX.Element => {
    const [stage, setStage] = useState(0);
    const navigate = useNavigate();

    const AuthDataForm = useForm<RegisterForm>();

    const { handleSubmit, reset } = AuthDataForm;

    const [registerUser] = useRegisterUserMutation();

    const onSubmit = async (dataa: RegisterForm) => {
        try {
            await registerUser(dataa).unwrap(); // Send data
            reset();
            navigate("/");
        } catch (err: any) {
            console.error("Registration failed:", err);
            toast(`Error: ${err.message || "Unknown error"}`);
        }
    };

    return (
        <>
            <FormProvider {...AuthDataForm}>
                <form
                    className="login-form register-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className="form-title center-text">Register</h2>
                    <div className={stage === 0 ? "" : "hide"}>
                        <Stage1 />
                    </div>
                    <div className={stage === 1 ? "" : "hide"}>
                        <Stage2 />
                    </div>
                    <div
                        className={stage === 2 ? "register-form--item" : "hide"}
                    >
                        <Stage3 />
                    </div>

                    <div className="button-change-stage">
                        <div className="prev-stage">
                            <button
                                className="button-stage"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setStage((prevstage) => (prevstage -= 1));
                                }}
                                disabled={stage === 0}
                            >
                                {"<"}
                            </button>
                        </div>
                        <div className="next-stage">
                            <button
                                className="button-stage"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setStage((prevstage) => (prevstage += 1));
                                }}
                                disabled={stage === 2}
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                    <div className="button-container">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setStage(index);
                                }}
                                className={
                                    stage == index ? "current-stage" : ""
                                }
                            ></button>
                        ))}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </FormProvider>
            <ToastContainer />
        </>
    );
};
