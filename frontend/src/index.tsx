import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "../public/styles.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

// Найдите корневой элемент
const rootElement: HTMLElement | null = document.getElementById("root");

// Создайте корень и отрендерьте приложение
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <Provider store={store}>
                <main className="main-page">
                    <App />
                </main>
            </Provider>
        </StrictMode>,
    );
}
