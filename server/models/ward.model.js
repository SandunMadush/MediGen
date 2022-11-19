import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Ward = db.define(
    "ward",
    {
        date: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        patient_name: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.TEXT,
        },
        bht_no: {
            type: DataTypes.DATE,
        },
        con_surgeon: {
            type: DataTypes.DATE,
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
