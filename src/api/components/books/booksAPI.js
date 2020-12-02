const booksAPI = require("express").Router();
const booksController = require("./booksController");

booksAPI.post("/", booksController.createBook);
booksAPI.get("/:id", booksController.getBook);
booksAPI.post("/:id/review", booksController.createReview);
booksAPI.get("/random/six-books", booksController.getSixBooks);
booksAPI.get("/random/four-books", booksController.getFourBooks);
booksAPI.get("/random/one-book", booksController.getOneBook);
booksAPI.post("/search", booksController.searchBook);


module.exports = booksAPI;
