import Ward from "../models/ward.model.js";

export const getWards = async (req, res) => {
    try {
        const users = await Ward.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}