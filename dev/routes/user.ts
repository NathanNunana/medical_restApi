import express = require("express");

const router = express.Router();

router.post("/", (req, res, next) => {
  // create user account
});

router.get("/", (req, res, next) => {
  // login user
});

router.get("/history", (req, res, next) => {
  // get user history
});

router.post("/history", (req, res, next) => {
  // add a user history
});
export default router;
