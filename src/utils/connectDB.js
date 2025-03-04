// connectDB.js
import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';
import { LRUCache } from 'lru-cache';

let pool = null;
const queryCache = new LRUCache({ max: 100, ttl: 1000 * 60 * 5 }); // Cache for 5 minutes

const MAX_RETRIES = 5;
const INITIAL_RETRY_DELAY = 1000; // 1 second

// Sequelize initialization
export const sequelize = new Sequelize({
  host: "193.203.184.167",
  dialect: "mysql",
  username: "u364027494_aimcabbo",
  password: "Password@181298",
  database: "u364027494_aimcabbo_admin",
  dialectModule: require("mysql2"),
  benchmark: true,
  logging: false,  // Turn off logging, set to true to see SQL queries
});

// Initialize MySQL connection pool
export const initializeDatabase = async () => {
  if (!pool) {
    pool = mysql.createPool({
      host: "193.203.184.167",
      user: "u364027494_aimcabbo",
      password: "Password@181298",
      database: "u364027494_aimcabbo_admin",
      waitForConnections: true,
      connectionLimit: 1000,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 10000,
    });
  }
  try {
    await sequelize.authenticate(); // Authenticate Sequelize connection
    console.log("Sequelize connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database using Sequelize:", error);
    throw error; // Re-throw the error if connection fails
  }
};

// Function to execute a MySQL query with retry mechanism
export const executeQuery = async (query, params = []) => {
  if (!pool) {
    await initializeDatabase();
  }

  const cacheKey = query + JSON.stringify(params);
  const cachedResult = queryCache.get(cacheKey);
  if (cachedResult) {
    return cachedResult;
  }

  let retries = 0;
  while (retries < MAX_RETRIES) {
    try {
      const [results] = await pool.execute(query, params);
      queryCache.set(cacheKey, results);
      return results;
    } catch (error) {
      if (error.message.includes("max_connections_per_hour") && retries < MAX_RETRIES - 1) {
        const delay = INITIAL_RETRY_DELAY * Math.pow(2, retries);
        console.log(`Retrying query after ${delay}ms. Attempt ${retries + 1} of ${MAX_RETRIES}`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        retries++;
      } else {
        console.error("Database query error:", error);
        throw error;
      }
    }
  }
};

// Get MySQL connection from the pool
export const getConnection = async () => {
  if (!pool) {
    await initializeDatabase();
  }
  return await pool.getConnection();
};

// Release a MySQL connection
export const releaseConnection = (connection) => {
  if (connection) {
    connection.release();
  }
};

// Export the Sequelize instance for use in models
export { sequelize };
