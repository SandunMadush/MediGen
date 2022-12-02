import Clinic from "../models/clinic.model.js";

export const getClinics = async (req, res) => {
  try {
    const clinics = await Clinic.findAll();
    res.json(clinics);
  } catch (error) {
    console.log(error);
  }
};

export const getClinic = async (req, res) => {
  try {
    const clinics = await Clinic.findAll({ where: { clinic_no: req.params.id } });
    res.json(clinics);
  } catch (error) {
    console.log(error);
  }
};

export const createClinic = async (req, res) => {
  try {
    const clinics = await Clinic.create(req.body);
    res.json(clinics);
  } catch (error) {
    console.log(error);
  }
};

export const updateClinic = async (req, res) => {
  try {
    const clinics = await Clinic.update(req.body, {
      where: {
        clinic_no: req.params.id,
      },
    });
    res.json(clinics);
  } catch (error) {
    console.log(error);
  }
};

export const deleteClinic = async (req, res) => {
  try {
    const clinics = await Clinic.destroy({
      where: {
        clinic_no: req.params.id,
      },
    });
    res.json(clinics);
  } catch (error) {
    console.log(error);
  }
};
