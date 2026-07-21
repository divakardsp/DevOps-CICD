import { users } from "../data/db.js";

export const getUser = async () => users;

export const getUserById = async (userId) =>
    users.find((user) => String(user.id) === String(userId));
