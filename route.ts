import { Router } from "express";
import * as orderController from "./controller/order.controller.js"
import * as productController from "./controller/product.controller.js"

const router = Router()

router.get("/order", orderController.getOrder)
router.get("/product", productController.getProduct)