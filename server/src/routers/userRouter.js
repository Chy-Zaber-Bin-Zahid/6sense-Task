const express = require("express");
const { regUser, getData } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/register", regUser);
userRouter.get("/getData", getData);

module.exports = userRouter;
