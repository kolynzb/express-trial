const express = require("express");
const Router = express.Router();
const Products = require("../Models/product");
Router.get("/", (req, res) => {
  res.status(200).json(Products);
});
Router.get("/:id", (req, res) => {
  const product = Products.filter((product) => product.id == req.params.id);
  res.status(200).json(product);
});

module.exports = Router;
