import * as orderService from "../services/order.service.js";

export const getOrder = async (req, res) => {
    res.json(await orderService.getOrder());
};

export const getOrderById = async (req, res) => {
    res.json(await orderService.getOrderById(req.params.id));
};
