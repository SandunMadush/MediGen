import Users from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'username', 'password']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}