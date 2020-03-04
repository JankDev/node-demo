const User = require('../entities/user');
const Book = require('../entities/book');

let users = [new User("Robert", "Kraut"), new User("Reiner", "Braun")];
let books = [new Book("Harry Potter", "A story about a young wizard", users[0])];

exports.users = users;
exports.books = books;
