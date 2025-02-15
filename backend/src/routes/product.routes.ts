import express from "express";
import { 
    productFilterController, 
    productSendController, 
    productTypeSendController 
} 
from "../controllers/product.controller";


const routerProduct = express.Router();

routerProduct.get("/api/product", productSendController);
routerProduct.get("/api/product/type", productTypeSendController);
routerProduct.get("/api/product/filters", productFilterController)
// router.post("/api/login", loginController);
// router.post("/api/logout", logoutController);

// router.get("/api/protected/check", checkController);

export default routerProduct;
