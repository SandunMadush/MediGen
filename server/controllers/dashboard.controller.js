import { Sequelize } from "sequelize";
import db from "../config/db.js";


export const getDashboardData = async (req, res) => {
    try {
     const [result,metadata] = await db.query(
        'SELECT endoscopy.date as date, endoscopy.bht_no as bht_no, endoscopy.patient_name as patient_name, endoscopy.age as age, ward.date as ward_date, ward.patient_name as ward_patient_name, ward.age as ward_age, ward.bht_no as ward_bht_no, theatre.date as theatre_date, theatre.patient_name as , theatre.bht_no, theatre.age from ward, theatre, endoscopy');
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}