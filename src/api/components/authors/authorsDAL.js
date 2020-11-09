const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const authorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imgLink: {
    type: String,
    required: true
  },
  description: String,
  facebookLink: String,
  twitterLink: String,
  instagramLink: String,
  latestBook: [{
    type: ObjectId,
    ref: 'Book'
  }]
});

module.exports = mongoose.model("Author", authorSchema);
