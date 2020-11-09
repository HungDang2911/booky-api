const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imgLink: {
    type: String,
    required: true
  },
  author: {
    type: ObjectId,
    required: true,
    ref: 'Author'
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  categories: [String],
  rating: {
    type: Number,
    default: 0
  },
  reviews: [{
    rating: {
      type: Number,
      required: true
    }, 
    review: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    approvedStatus: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
});

module.exports = mongoose.model("Book", bookSchema);
