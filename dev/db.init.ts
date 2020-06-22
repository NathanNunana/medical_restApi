import { Sequelize, DataTypes } from "sequelize";
import dotenv = require("dotenv");
import { User } from "./models/user_model";
dotenv.config();
// auto-call function to init database
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
export const sequilize = new Sequelize(
  DB_NAME || "medical",
  DB_USER || "root",
  DB_PASSWORD || "",
  {
    dialect: "mysql",
    logging: console.debug,
  }
);

(function () {
  // auto call functions

  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    { sequelize: sequilize }
  );
})();
