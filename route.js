import { Router } from "express";
import * as userController from "./controller/user.controller.js";
import * as orderController from "./controller/order.controller.js";
import * as productController from "./controller/product.controller.js";

const router = Router();

router.get("/get-user", userController.getUser);
router.get("/get-user/:id", userController.getUserById);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

router.get("/get-order", orderController.getOrder);
router.get("/get-order/:id", orderController.getOrderById);
router.post("/orders", orderController.createOrder);
router.put("/orders/:id", orderController.updateOrder);
router.patch("/orders/:id", orderController.updateOrder);
router.delete("/orders/:id", orderController.deleteOrder);

router.get("/get-product", productController.getProduct);
router.get("/get-product/:id", productController.getProductById);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.patch("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

export default router;
