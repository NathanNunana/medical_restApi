import * as express from "express";
import * as dotenv from "dotenv";
import * as logger from "morgan";
import bodyParser = require("body-parser");
import db = require("./db.init");
dotenv.config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
export const DB = db.sequilize;
const PORT: number | string = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});
