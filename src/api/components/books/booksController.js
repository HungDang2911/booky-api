const booksService = require("./booksService");

module.exports.getBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await booksService.getBook(bookId);
    res.status(401).json(book);
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