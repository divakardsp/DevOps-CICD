
import * as productService from "../services/product.service.js";

export const getProduct = async (req, res) => {
    await productService.getProduct()
}

export const getProductById = async (req, res) => {
    await productService.getProductById()
}