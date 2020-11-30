const Book = require("./booksDAL");

module.exports.getBook = async (bookId) => {
  try {
    const book = await Book.findById(bookId).populate("author").exec();
    return book;
  } catch (err) {
    console.log(err);
  }
};

module.exports.getBooksByCategory = async (category) => {
  try {
    const books = await Book.find();
    // return books;
    console.log(books);
  } catch (err) {
    console.log(err);
  }
};

module.exports.createBook = async (bookObj) => {
  try {
    const book = new Book(bookObj);
    book.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports.createReview = async (bookId, review) => {
  try {
    const approvedStatus = false;
    const createdAt = Date.now();

    await Book.updateOne(
      { _id: bookId },
      { $push: { reviews: { ...review, approvedStatus, createdAt } } }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports.getRandomBooks = async (number) => {
  try {
    const records = await Book.aggregate([
      { $sample: { size: number } },
      {
        $lookup: {
          from: "authors",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
      },
      { $unwind: "$author" },
    ]);
    return records;
  } catch (err) {
    console.log(err);
  }
};

module.exports.getBookByName = async (bookName) => {
  try {
    const records = await Book.find({ name: new RegExp(bookName, "i") });
    return records;
  } catch (err) {
    console.log(err);
  }
};
