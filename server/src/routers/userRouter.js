const express = require("express");
const {
  regUser,
  getData,
  deleteData,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/register", regUser);
userRouter.get("/getData", getData);
userRouter.delete("/:id", deleteData);

module.exports = userRouter;
