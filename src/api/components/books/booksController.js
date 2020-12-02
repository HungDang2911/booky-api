const booksService = require("./booksService");

module.exports.getBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await booksService.getBook(bookId);
    res.status(200).json(book);
  } catch (err) {
    res.status(404).send();
  }
}

module.exports.createBook = async (req, res) => {
  const book = req.body;
  try {
    await booksService.createBook(book);
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
}

module.exports.createReview = async (req, res) => {
  const bookId = req.params.id;
  const review = req.body;

  try {
    await booksService.createReview(bookId, review);
    res.status(200).send();
  } catch (err) {
    res.status(404);
  }
}

module.exports.searchBook = async (req, res) => {
  console.log(123)
  res.send();
}

module.exports.getOneBook = async (req, res) => {
  try {
    const books = await booksService.getRandomBooks(1);
    res.status(200).send(books[0]);
  } catch (err) {
    console.log(err)
    res.status(500).send();
  }
}

module.exports.getFourBooks = async (req, res) => {
  try {
    const books = await booksService.getRandomBooks(4);
    res.status(200).send(books);
  } catch (err) {
    res.status(500).send();
  }
}

module.exports.getSixBooks = async (req, res) => {
  try {
    const books = await booksService.getRandomBooks(6);
    res.status(200).send(books);
  } catch (err) {
    res.status(500).send();
  }
}