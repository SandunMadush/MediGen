import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "login",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
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

export default Users;
