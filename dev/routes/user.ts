import express = require("express");
import { User } from "../models/user_model";
import { Op } from "sequelize";
import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", (req, res, next) => {
  // create user account
  User.validateRaw(req.body)
    .then(async (e) => {
      try {
        let { email, password, phone, firstName, lastName } = req.body;
        let verify = await User.count({
          where: {
            [Op.or]: {
              email: req.body.email,
              phone: req.body.phone,
            },
          },
        });
        if (verify > 0) {
          return res
            .status(406)
            .json({ error: "email or phone number already exists" });
        }

        let newPassword = bcrypt.hash(password, 8);
        const user = await User.create({ ...req.body, password: newPassword });
        const token = await jwt.sign(
          {
            email: user.email,
            id: user.id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "30d",
          }
        );
        return res.json({ ...user.toJSON(), token });
      } catch (e) {
        return res.status(504).json({ error: "Unable to create account" });
      }
    })
    .catch((err) => {
      return res.status(406).json({ error: "Validation error" });
    });
});

router.post("/login", (req, res, next) => {
  // login user
});

router.get("/history", (req, res, next) => {
  // get user history
});

router.post("/history", (req, res, next) => {
  // add a user history
});
export default router;
