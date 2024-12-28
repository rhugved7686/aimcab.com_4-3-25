import {Sequelize} from "sequelize";
import mysql from "mysql2"

const sequelize = new Sequelize("u364027494_aimcabbo_admin","u364027494_aimcabbo","Password@181298",{
    dialect:"mysql",
    host:"193.203.184.167",
    dialectModule:mysql,
    port:3306
})


export const initializeDatabase = async () => {
    try {
      await sequelize.authenticate();  // Ensure the database connection is successful
      console.log('Database connection established successfully');
      
      console.log('Database synced successfully');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
};
  


export default sequelize;