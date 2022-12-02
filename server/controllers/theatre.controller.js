import Theatre from "../models/theatre.model.js";

export const getTheatres = async (req, res) => {
    try {
        const theatre = await Theatre.findAll();
        res.json(theatre);
    } catch (error) {
        console.log(error);
    }
}

export const getTheatre = async (req, res) => {
    try {
        const theatre = await Theatre.findAll({ where: { bht_no: req.params.id } });
        res.json(theatre);
    } catch (error) {
        console.log(error);
    }
}

export const createTheatre = async (req, res) => {
    try {
        const theatre = await Theatre.create(req.body);
        res.json(theatre);
        console.log(req.body)
    } catch (error) {
        console.log(error);
    }
}

export const updateTheatre = async (req, res) => {
    try {
        const theatre = await Theatre.update(req.body, {
            where: {
                bht_no: req.params.id
            }
        });
        res.json(theatre);
    } catch (error) {
        console.log(error);
    }
}

export const deleteTheatre = async (req, res) => {
    try {
        const theatre = await Theatre.destroy({
            where: {
                bht_no: req.params.id
            }
        });
        res.json(theatre);
    } catch (error) {
        console.log(error);
    }
}