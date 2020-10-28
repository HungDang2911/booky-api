const Author = require("./authorsDAL");

module.exports.createAuthor = async (authorObject) => {
  try {
    const author = new Author(authorObject);
    await author.save();
  } catch (err) {
    console.log(err);
  }
}