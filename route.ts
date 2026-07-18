import { Router } from "express"
import * as userController from "./controller/user.controller.js"
import * as orderController from "./controller/order.controller.js"
import * as productController from "./controller/product.controller.js"

const router = Router()

router.get("/get-user", userController.getUser)
router.get("/get-order", orderController.getOrder)
router.get("/get-product", productController.getProduct)
router.get("/get-order/:id", orderController.getOrderById)
router.get("/get-product/:id", productController.getProductById)