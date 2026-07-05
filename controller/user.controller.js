import { getUserById } from "../services/user.service"


const getUser = (req, res) => {
    await getUserById(res.body.userId)
}