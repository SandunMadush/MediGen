import Ward from "../models/ward.model.js";

export const getWards = async (req, res) => {
    try {
        const wards = await Ward.findAll();
        res.json(wards);
    } catch (error) {
        console.log(error);
    }
}

export const getWard = async (req, res) => {
    try {
        const wards = await Ward.findAll({ where: { bht_no: req.params.id } });
        res.json(wards);
    } catch (error) {
        console.log(error);
    }
}

export const createWard = async (req, res) => {
    try {
        const wards = await Ward.create(req.body);
        res.json(wards);
    } catch (error) {
        console.log(error);
    }
}

export const updateWard = async (req, res) => {
    try {
        const wards = await Ward.update(req.body, {
            where: {
                bht_no: req.params.id
            }
        });
        res.json(wards);
    } catch (error) {
        console.log(error);
    }
}

export const deleteWard = async (req, res) => {
    try {
        const wards = await Ward.destroy({
            where: {
                bht_no: req.params.id
            }
        });
        res.json(wards);
    } catch (error) {
        console.log(error);
    }
}