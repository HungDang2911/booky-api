const Book = require("./booksDAL");

const bookCategories = ['Self help', 'Health', 'Biography', 'Cookbooks', 'Romantic'];

module.exports.getBook = async (bookId) => {
  try {
    const book = await Book.findById(bookId).populate('author').exec();
    return book;
  } catch (err) {
    console.log(err);
  }
}

module.exports.createBook = async (bookObj) => {
  try {
    const book = new Book(bookObj);
    book.save();
  } catch (err) {
    console.log(err);
  }
}

module.exports.createReview = async(bookId, review) => {
  try {
    const approvedStatus = false;
    const createdAt = Date.now();

    await Book.updateOne({_id: bookId}, { $push: { reviews: {...review, approvedStatus, createdAt} } });
  } catch (err) {
    console.log(err);
  }
}