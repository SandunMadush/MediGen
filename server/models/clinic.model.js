import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Clinic = db.define(
  "clinic",
  {
    date: {
      type: DataTypes.DATE,
      
    },
    patient_name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    phone_no: {
        type: DataTypes.STRING,
      },
    clinic_no: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    visit_no: {
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

export default Clinic;
