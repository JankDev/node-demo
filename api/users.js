const express = require('express');
const User = require("../entities/user");
const router = express.Router();

let {users} = require('../util/data');

router.get("/", (req, res) => res.json(users));

router.delete("/:id", (req, res) => {

    let id = req.params.id;
    let deletedUser = users.find(user => user.id === id);

    if (deletedUser) {
        users = users.filter(user => user.id !== id);

        res.json(deletedUser);
    } else {
        res.status(404).json({message: `User with id ${id} not found`});
    }
});

router.post("/", (req, res) => {
    let jsonUser = req.body;
    users = [...users, new User(jsonUser.firstName, jsonUser.lastName)];
    res.json(users);
});

module.exports = router;
