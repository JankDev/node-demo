const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.end("<a href='/users'>Users</a><br><a href='/books'>Books</a>"));
app.use("/users", require("./users"));
app.use("/books", require("./books"));

app.listen(4200);
