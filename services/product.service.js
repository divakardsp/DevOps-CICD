import { products } from "../data/db.js";

export const getProduct = async () => products;

export const getProductById = async (productId) =>
    products.find((product) => String(product.id) === String(productId));

export const createProduct = async (productData) => {
    const nextId =
        products.length === 0
            ? 1
            : Math.max(...products.map((product) => product.id)) + 1;

    const newProduct = {
        id: nextId,
        name: productData.name,
        price: productData.price,
    };

    products.push(newProduct);

    return newProduct;
};

export const updateProduct = async (productId, productData) => {
    const product = products.find(
        (item) => String(item.id) === String(productId),
    );

    if (!product) {
        return null;
    }

    product.name = productData.name ?? product.name;
    product.price = productData.price ?? product.price;

    return product;
};

export const deleteProduct = async (productId) => {
    const index = products.findIndex(
        (product) => String(product.id) === String(productId),
    );

    if (index === -1) {
        return null;
    }

    const [deletedProduct] = products.splice(index, 1);

    return deletedProduct;
};
