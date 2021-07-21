import Sequelize from "sequelize";
import db from "./../config/db.js";

const City = db.define(
  "city",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    city_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);

export default City;
