"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const bodyParser = require("body-parser");
const user_1 = require("./routes/user");
const db = require("./db.init");
dotenv.config();
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use("/user", user_1.default);
exports.DB = db.sequilize;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server started on PORT: ${PORT}`);
});
