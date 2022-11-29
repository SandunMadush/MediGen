import Endoscopy from "../models/endoscopy.model.js";

export const getEndoscopys = async (req, res) => {
    try {
        const endoscopy = await Endoscopy.findAll();
        res.json(endoscopy);
    } catch (error) {
        console.log(error);
    }
}

export const getEndoscopy = async (req, res) => {
    try {
        const endoscopy = await Endoscopy.findAll({ where: { bht_no: req.params.id } });
        res.json(endoscopy);
    } catch (error) {
        console.log(error);
    }
}

export const createEndoscopy = async (req, res) => {
    try {
        const endoscopy = await Endoscopy.create(req.body);
        res.json(endoscopy);
    } catch (error) {
        console.log(error);
    }
}

export const updateEndoscopy = async (req, res) => {
    try {
        const endoscopy = await Endoscopy.update(req.body, {
            where: {
                bht_no: req.params.id
            }
        });
        res.json(endoscopy);
    } catch (error) {
        console.log(error);
    }
}

export const deleteEndoscopy = async (req, res) => {
    try {
        const endoscopy = await Endoscopy.destroy({
            where: {
                bht_no: req.params.id
            }
        });
        res.json(endoscopy);
    } catch (error) {
        console.log(error);
    }
}