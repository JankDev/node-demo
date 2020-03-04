const http = require('http');
const User = require('./entities/user');

const users = [new User("Robert","Kraut"), new User("Reiner", "Braun") ];

const server = http.createServer((req, res) => {
    if(req.url==='/users') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;

        console.log(JSON.stringify(users))
        res.write(JSON.stringify(users));


        res.end()
    }
    else{
        res.end("<a href='/users'>Go to users</a>")
    }
});

const PORT = process.env.PORT || 4200;
server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
