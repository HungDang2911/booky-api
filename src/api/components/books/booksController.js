const booksService = require("./booksService");

module.exports.getBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await booksService.getBook(bookId);
    res.status(200).json(book);
  } catch (err) {
    res.status(404);
  }
}

module.exports.createBook = async (req, res) => {
  const book = req.body;
  try {
    await booksService.createBook(book);
    res.status(200);
  } catch (err) {
    res.status(500)
  }
}

module.exports.createReview = async (req, res) => {
  const bookId = req.params.id;
  const review = req.body;

  try {
    await booksService.createReview(bookId, review);
  } catch (err) {
    res.status(404);
  }
}