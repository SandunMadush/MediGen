import { Sequelize } from "sequelize";
 
const db = new Sequelize('medigen', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;