const authorsAPI = require("express").Router();
const authorsController = require("./authorsController");

authorsAPI.post("/", authorsController.createAuthor)

module.exports = authorsAPI;
