import * as userService from "../services/user.service.js";

export const getUser = async (req, res) => {
    res.json(await userService.getUser());
};

export const getUserById = async (req, res) => {
    res.json(await userService.getUserById(req.params.id));
};
