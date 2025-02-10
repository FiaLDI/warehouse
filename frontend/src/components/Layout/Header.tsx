import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "../../features/auth/authSelectors";
import { ShowPath } from "../ShowPath/ShowPath";

export const Header = () => {
    const navigator = useNavigate();
    const isAuth = useSelector(selectAuth) || false;

    return (
        <>
            <header>
                <div className="title-page" onClick={() => navigator(`/`)}>
                    Главная
                </div>
                <div className="" onClick={() => navigator(`/catalog`)}>
                    Каталог
                </div>
                <div className="" onClick={() => navigator(`/help/shops`)}>
                    Магазины
                </div>
                <div className="" onClick={() => navigator(`/help/delivery`)}>
                    Доставка
                </div>
                <div className="" onClick={() => navigator(`/help`)}>
                    Помощь
                </div>
                <div className="" onClick={() => navigator(`/help/vacancy`)}>
                    Вакансии
                </div>
                {!isAuth ? null : (
                    <>
                        <div className="" onClick={() => navigator(`/profile`)}>
                            Профиль
                        </div>
                    </>
                )}

                {isAuth ? null : (
                    <>
                        <div className="" onClick={() => navigator(`/login`)}>
                            Вход
                        </div>
                        <div
                            className=""
                            onClick={() => navigator(`/register`)}
                        >
                            Регистрация
                        </div>
                    </>
                )}
            </header>
            <ShowPath />
        </>
    );
};
