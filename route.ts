import { Router } from "express";
import * as orderController from "./controller/order.controller.js"

const router = Router()

router.get("/order", orderController.getOrder)