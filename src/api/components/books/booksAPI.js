const booksAPI = require("express").Router();
const booksController = require("./booksController");

booksAPI.post("/", booksController.createBook);
booksAPI.get("/:id", booksController.getBook);
booksAPI.post("/:id/review", booksController.createReview);


module.exports = booksAPI;
