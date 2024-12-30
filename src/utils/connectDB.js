import { Sequelize } from "sequelize";
import mysql from "mysql2"

const sequelize = new Sequelize("u364027494_aimcabbo_admin", "u364027494_aimcabbo", "Password@181298", {
  dialect: "mysql",
  host: "193.203.184.167",
  dialectModule: mysql,
  pool:{
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port: 3306
})


let initialized = false;

export const initializeDatabase = async () => {
  try {

    if (!initialized) {
      await sequelize.authenticate();  // Ensure the database connection is successful
      console.log('Database connection established successfully');
      initialized = true;
    }

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};



export default sequelize;