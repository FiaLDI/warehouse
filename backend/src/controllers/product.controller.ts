import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

const Product = new ProductService();

export const productSendController = async (req: Request, res: Response) => {
    const type: string = req.query.type as string;

    const result = await Product.allProduct(type)
    return res.status(201).json({ message: result });
};

export const productFilterController = async (req: Request, res: Response) => {
    const type: string = req.query.type as string;

    const result = await Product.filterProduct(type)
    return res.status(201).json({ message: result });
};


export const productTypeSendController = async (req: Request, res: Response) => {
    const result = await Product.typeProduct()

    return res.status(201).json({ message: result });
};