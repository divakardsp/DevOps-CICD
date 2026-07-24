import * as productService from "../services/product.service.js";

export const getProduct = async (req, res) => {
    res.json(await productService.getProduct());
};

export const getProductById = async (req, res) => {
    const product = await productService.getProductById(req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
};

export const createProduct = async (req, res) => {
    const createdProduct = await productService.createProduct(req.body);

    res.status(201).json(createdProduct);
};

export const updateProduct = async (req, res) => {
    const updatedProduct = await productService.updateProduct(
        req.params.id,
        req.body,
    );

    if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
    const deletedProduct = await productService.deleteProduct(req.params.id);

    if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(deletedProduct);
};
