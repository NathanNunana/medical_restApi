import { Sequelize, DataTypes } from "sequelize";
import dotenv = require("dotenv");
import { User } from "./models/user_model";
dotenv.config();
// auto-call function to init database
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
export const sequilize = new Sequelize(
  "sql12350301",
  "sql12350301",
  "pEaCakd7In",
  {
    host: "sql12.freemysqlhosting.net",
    port: 3306,
    dialect: "mysql",
    logging: console.log,
  },
);

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
  { sequelize: sequilize },
);
(function () {
  // auto call functions
  User.sync();
})();
