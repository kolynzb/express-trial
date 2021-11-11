const express = require("express");
const Router = express.Router();
const Users = require("../Models/user");
Router.get("/", (req, res) => {
  res.status(200).json(Users);
});
Router.get("/:id", (req, res) => {
  const user = Users.filter((user) => user.id == req.params.id);
  res.status(200).json(user);
});

module.exports = Router;
