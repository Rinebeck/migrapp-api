import Sequelize from 'sequelize';
import dotenv from "dotenv";

// Load env vars
dotenv.config();
// Init MySQL connection
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

export default db;
