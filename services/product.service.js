import { products } from "../data/db.js";

export const getProduct = async () => products;

export const getProductById = async (productId) =>
    products.find((product) => String(product.id) === String(productId));
