export const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Cara", email: "cara@example.com" },
];

export const products = [
    { id: 1, name: "Keyboard", price: 49.99 },
    { id: 2, name: "Mouse", price: 19.99 },
    { id: 3, name: "Monitor", price: 199.99 },
];

export const orders = [
    {
        id: 1,
        to: "Alice",
        from: "Store A",
        status: "delivered",
        payment: "paid",
    },
    {
        id: 2,
        to: "Bob",
        from: "Store B",
        status: "not delivered",
        payment: "unpaid",
    },
    {
        id: 3,
        to: "Cara",
        from: "Store C",
        status: "delivered",
        payment: "paid",
    },
];
