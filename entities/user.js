const uuid = require("uuid");

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = uuid.v4();
        this.books = [];
    }

    addBook(book) {
        this.books = [...this.books, book];
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

module.exports = User;
