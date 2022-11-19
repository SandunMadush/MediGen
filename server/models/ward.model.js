import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Ward = db.define(
    "ward",
    {
        date: {
            type: DataTypes.DATE,
            primaryKey: true
        },
        patient_name: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        gender: {
            type: DataTypes.STRING,
        },
        bht_no: {
            type: DataTypes.STRING,
        },
        con_surgeon: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
})();

export default Ward;
