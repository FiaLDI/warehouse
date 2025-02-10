import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { selectAuth } from "../features/auth/authSelectors";
import { Dashboard } from "../components/DashBoard";
import { ProfilePage } from "../components/pages/ProfilePage";
import { RegisterPage } from "../components/pages/RegisterPage";
import { AuthForm } from "../components/AuthForm";
import Layout from "../components/Layout/Layout";
import { HomePage } from "../components/pages/HomePage";
import { ProductPage } from "../components/pages/ProductPage";
import { HelpPage } from "../components/pages/HelpPage";

const ProtectedRoute: React.FC<{
    isAuth: boolean;
    children: React.ReactNode;
}> = ({ isAuth, children }) => {
    console.log(isAuth);
    return isAuth ? <>{children}</> : <Navigate to="/" />;
};

export const AppRouter: React.FC = () => {
    const isAuth = useSelector(selectAuth) || false;
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <HomePage />
                        </Layout>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <>
                            <Layout>
                                <AuthForm />
                            </Layout>
                        </>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <ProtectedRoute isAuth={!isAuth}>
                            <Layout>
                                <RegisterPage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/help"
                    element={
                        <Layout>
                            <HelpPage />
                        </Layout>
                    }
                />

                <Route
                    path="/help/shops"
                    element={
                        <Layout>
                            <HelpPage type="shops" />
                        </Layout>
                    }
                />

                <Route
                    path="/help/delivery"
                    element={
                        <Layout>
                            <HelpPage type="delivery" />
                        </Layout>
                    }
                />

                <Route
                    path="/help/vacancy"
                    element={
                        <Layout>
                            <HelpPage type="vacancy" />
                        </Layout>
                    }
                />

                <Route
                    path="/catalog"
                    element={
                        <Layout>
                            <ProductPage />
                        </Layout>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute isAuth={isAuth}>
                            <Layout>
                                <ProfilePage />
                            </Layout>
                        </ProtectedRoute>
                    }
                ></Route>
                <Route
                    path="/dashboard"
                    element={
                        <Layout>
                            <Dashboard />
                        </Layout>
                    }
                />
                <Route path="*" Component={() => "404 - NOT FOUND"} />
            </Routes>
        </BrowserRouter>
    );
};
