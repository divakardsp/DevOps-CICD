import * as productService from "../services/product.service.js";

export const getProduct = async (req, res) => {
    res.json(await productService.getProduct());
};

export const getProductById = async (req, res) => {
    res.json(await productService.getProductById(req.params.id));
};
