import { getUserById } from "../services/user.service"


export const getUser = (req, res) => {
    await getUserById(res.body.userId)
}