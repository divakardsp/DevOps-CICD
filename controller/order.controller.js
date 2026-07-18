import * as orderService from "../services/order.service.js";

export const getOrder = async (req, res) => {
    await orderService.getOrder();
}
export const getOrderById = async (req, res) => {
    await orderService.getOrderById();
}