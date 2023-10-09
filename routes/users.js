const { Router } = require("express");
const {
  getUserById,
  createAccount,
  signInAccount,
  deleteUserById,
} = require("../controllers/users.js");

const usersRouter = Router();

usersRouter.get("/:id", getUserById);

usersRouter.post("/", createAccount);

usersRouter.post("/signin", signInAccount);

usersRouter.delete("/:id", deleteUserById);

module.exports = usersRouter;
