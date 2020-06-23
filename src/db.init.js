"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv = require("dotenv");
const user_model_1 = require("./models/user_model");
dotenv.config();
// auto-call function to init database
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
exports.sequilize = new sequelize_1.Sequelize("sql12350301", "sql12350301", "pEaCakd7In", {
    host: "sql12.freemysqlhosting.net",
    port: 3306,
    dialect: "mysql",
    logging: console.log,
});
user_model_1.User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
}, { sequelize: exports.sequilize });
(function () {
    // auto call functions
    user_model_1.User.sync();
})();
