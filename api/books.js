const express = require('express');
const Book = require('../entities/book');
const router = express.Router();

let {books} = require('../util/data');

router.get("/", (req, res) => res.json(books));

module.exports = router;
