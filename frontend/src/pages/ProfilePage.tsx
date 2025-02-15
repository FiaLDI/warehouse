import React from "react";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSelectors";
import { useLogoutUserMutation } from "../services/auth";
import { logout } from "../features/auth/authSlices";

export const ProfilePage = (): React.JSX.Element => {
    const userInfo = useSelector(selectUser);
    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useAppDispatch();
    const onLogout = async () => {
        try {
            await logoutUser({}).unwrap();
            dispatch(logout());
        } catch (err: any) {
            console.log(err);
        }
    };

    return (
        <>
            {userInfo ? (
                <div>
                    Hi, {userInfo.username}, your password{" "}
                    <button onClick={onLogout}>exit</button>
                </div>
            ) : (
                "NO"
            )}
        </>
    );
};
