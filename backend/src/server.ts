import express from "express";
import router from "./routes/auth.routes";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import process from "process";
import routerProduct from "./routes/product.routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:3000", // Укажите здесь адрес вашего фронтенда
        credentials: true,
    }),
);
// Отдача статических файлов
app.use('/api/files', express.static('src/assets'));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);
app.use(routerProduct);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
