import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Endoscopy = db.define(
  "endoscopy",
  {
    date: {
      type: DataTypes.DATE,
      primaryKey: true,
    },
    bht_no: {
      type: DataTypes.STRING,
    },
    patient_name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    endo_procedure: {
      type: DataTypes.STRING,
    },
    phone_no: {
      type: DataTypes.STRING,
    },

    consultant: {
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

export default Endoscopy;
