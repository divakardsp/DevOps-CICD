import { orders } from "../data/db.js";

export const getOrder = async () => orders;

export const getOrderById = async (orderId) =>
    orders.find((order) => String(order.id) === String(orderId));
