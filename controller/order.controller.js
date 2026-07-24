import * as orderService from "../services/order.service.js";

export const getOrder = async (req, res) => {
    res.json(await orderService.getOrder());
};

export const getOrderById = async (req, res) => {
    const order = await orderService.getOrderById(req.params.id);

    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
};

export const createOrder = async (req, res) => {
    const createdOrder = await orderService.createOrder(req.body);

    res.status(201).json(createdOrder);
};

export const updateOrder = async (req, res) => {
    const updatedOrder = await orderService.updateOrder(
        req.params.id,
        req.body,
    );

    if (!updatedOrder) {
        return res.status(404).json({ message: "Order not found" });
    }

    res.json(updatedOrder);
};

export const deleteOrder = async (req, res) => {
    const deletedOrder = await orderService.deleteOrder(req.params.id);

    if (!deletedOrder) {
        return res.status(404).json({ message: "Order not found" });
    }

    res.json(deletedOrder);
};
