const uuid = require("uuid");

class Book{
    constructor(title, description, user) {
        this.id = uuid.v4();
        this.title = title;
        this.description = description;
        this.user = user;

    }
}

module.exports = Book;
