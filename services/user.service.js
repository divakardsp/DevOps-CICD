import { users } from "../data/db.js";

export const getUser = async () => users;

export const getUserById = async (userId) =>
    users.find((user) => String(user.id) === String(userId));

export const createUser = async (userData) => {
    const nextId =
        users.length === 0 ? 1 : Math.max(...users.map((user) => user.id)) + 1;

    const newUser = {
        id: nextId,
        name: userData.name,
        email: userData.email,
    };

    users.push(newUser);

    return newUser;
};

export const updateUser = async (userId, userData) => {
    const user = users.find((item) => String(item.id) === String(userId));

    if (!user) {
        return null;
    }

    user.name = userData.name ?? user.name;
    user.email = userData.email ?? user.email;

    return user;
};

export const deleteUser = async (userId) => {
    const index = users.findIndex((user) => String(user.id) === String(userId));

    if (index === -1) {
        return null;
    }

    const [deletedUser] = users.splice(index, 1);

    return deletedUser;
};
