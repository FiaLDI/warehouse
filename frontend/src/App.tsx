import React, { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { useCheckAuthQuery } from "./services/auth";
import { loginSuccess } from "./features/auth/authSlices";
import { AppRouter } from "./routes/AppRouter";

export const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const data = useCheckAuthQuery({}).data;

    useEffect(() => {
        const checkAuth = async () => {
            try {
                if (data && data?.message === "OK") {
                    dispatch(loginSuccess(data?.user));
                }
            } catch (err) {
                console.log(err);
            }
        };
        checkAuth();
    }, [dispatch, data]);

    return (
        <>
            <AppRouter />
        </>
    );
};
