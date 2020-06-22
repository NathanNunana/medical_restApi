"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_model_1 = require("../models/user_model");
const sequelize_1 = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/", (req, res, next) => {
    // create user account
    user_model_1.User.validateRaw(req.body)
        .then((e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { email, password, phone, firstName, lastName } = req.body;
            let verify = yield user_model_1.User.count({
                where: {
                    [sequelize_1.Op.or]: {
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
            const user = yield user_model_1.User.create(Object.assign(Object.assign({}, req.body), { password: newPassword }));
            const token = yield jwt.sign({
                email: user.email,
                id: user.id,
            }, process.env.JWT_SECRET, {
                expiresIn: "30d",
            });
            return res.json(Object.assign(Object.assign({}, user.toJSON()), { token }));
        }
        catch (e) {
            return res.status(504).json({ error: "Unable to create account" });
        }
    }))
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
exports.default = router;
