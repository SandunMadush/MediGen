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

export const getUser = async (req, res) => {
    try {
        const users = await Users.findAll({ where: { id: req.params.id } });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (req, res) => {
    try {
        const users = await Users.create(req.body);
        res.json(users);
        console.log(req.body)
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req, res) => {
    try {
        const users = await Users.update(req.body, {
            where: {
                bht_no: req.params.id
            }
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const users = await Users.destroy({
            where: {
                bht_no: req.params.id
            }
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}