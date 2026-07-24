import { orders } from "../data/db.js";

export const getOrder = async () => orders;

export const getOrderById = async (orderId) =>
    orders.find((order) => String(order.id) === String(orderId));

export const createOrder = async (orderData) => {
    const nextId =
        orders.length === 0
            ? 1
            : Math.max(...orders.map((order) => order.id)) + 1;

    const newOrder = {
        id: nextId,
        to: orderData.to,
        from: orderData.from,
        status: orderData.status,
        payment: orderData.payment,
    };

    orders.push(newOrder);

    return newOrder;
};

export const updateOrder = async (orderId, orderData) => {
    const order = orders.find((item) => String(item.id) === String(orderId));

    if (!order) {
        return null;
    }

    order.to = orderData.to ?? order.to;
    order.from = orderData.from ?? order.from;
    order.status = orderData.status ?? order.status;
    order.payment = orderData.payment ?? order.payment;

    return order;
};

export const deleteOrder = async (orderId) => {
    const index = orders.findIndex(
        (order) => String(order.id) === String(orderId),
    );

    if (index === -1) {
        return null;
    }

    const [deletedOrder] = orders.splice(index, 1);

    return deletedOrder;
};
