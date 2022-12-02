import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Theatre = db.define(
  "theatre",
  {
    date: {
      type: DataTypes.DATE,
      primaryKey: true,
    },
    ward_no: {
      type: DataTypes.STRING,
    },
    patient_name: {
      type: DataTypes.STRING,
    },
    bht_no: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.STRING,
    },
    surgery: {
      type: DataTypes.STRING,
    },
    con_surgeon: {
      type: DataTypes.STRING,
    },
    con_anesthetic: {
      type: DataTypes.STRING,
    },
    theatre_no: {
      type: DataTypes.STRING,
    },
    is_pcr: {
      type: DataTypes.BOOLEAN,
    },
    is_rat: {
      type: DataTypes.BOOLEAN,
    },
    is_fasting: {
      type: DataTypes.BOOLEAN,
    },
    is_echo: {
      type: DataTypes.BOOLEAN,
    },
    is_ecg: {
      type: DataTypes.BOOLEAN,
    },
    is_ct: {
      type: DataTypes.BOOLEAN,
    },
    clinic_number: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Theatre;
