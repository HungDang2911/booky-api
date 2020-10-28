const authorsService = require("./authorsService");

module.exports.createAuthor = async (req, res) => {
  const author = req.body;

  try {
    await authorsService.createAuthor(author);
    res.status(200);
  } catch (err) {
    res.status(500);
  }
}