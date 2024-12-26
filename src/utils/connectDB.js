import {Sequelize} from "sequelize";
import mysql from "mysql2"

const sequelize = new Sequelize("cab_booking_website","root","password",{
    dialect:"mysql",
    host:"localhost",
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