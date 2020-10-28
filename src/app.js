const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require ('cors');

const booksAPI = require("./api/components/books/booksAPI");
const authorsAPI = require("./api/components/authors/authorsAPI");

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/books", booksAPI);
app.use("/authors", authorsAPI);

module.exports = app;
