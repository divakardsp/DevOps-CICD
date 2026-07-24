import * as userService from "../services/user.service.js";

export const getUser = async (req, res) => {
    res.json(await userService.getUser());
};

export const getUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
};

export const createUser = async (req, res) => {
    const createdUser = await userService.createUser(req.body);

    res.status(201).json(createdUser);
};

export const updateUser = async (req, res) => {
    const updatedUser = await userService.updateUser(req.params.id, req.body);

    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
    const deletedUser = await userService.deleteUser(req.params.id);

    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(deletedUser);
};
