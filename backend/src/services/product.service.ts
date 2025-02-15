import { pool } from "../config/db";
import dotenv from "dotenv";

dotenv.config();

export class ProductService {
    async allProduct(type: string) {
        const capitalizedType: string = type.charAt(0).toUpperCase() + type.slice(1);
        const product = await pool.query(`
            SELECT * FROM avaible_product ap
            JOIN product p ON p.id_product = ap.id_product
            JOIN typeproduct tp ON p.id_type_product = tp.id_type_product
            JOIN manufacturers mf ON mf.id_manufacturer = p.manufactorer
            WHERE tp.typeproduct_name = $1
        `, [capitalizedType])
        if (product.rows.length > 0) {
            return product.rows
        }
        return [];
    }
    async typeProduct() {
        const typeProduct = await pool.query('SELECT * FROM typeproduct');
        if (typeProduct.rows.length > 0) {
            return typeProduct.rows
        }
        return [];
    }
    async filterProduct(type: string) {
        const capitalizedType: string = type.charAt(0).toUpperCase() + type.slice(1);
        const filers = await pool.query(
            `
            SELECT ftp.id_type_product, ftp.id_filter, f.filter_name, f.filter_description
            FROM filterstypeproduct ftp
            JOIN filters f ON ftp.id_filter = f.id_filter
            JOIN typeproduct tp ON ftp.id_type_product = tp.id_type_product
            WHERE tp.typeproduct_name = $1;
            `, [capitalizedType]
        )          
        return filers.rows  
    }
}
