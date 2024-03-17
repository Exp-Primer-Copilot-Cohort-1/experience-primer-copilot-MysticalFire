// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for PUT /comments
// 5. Create a route for DELETE /comments
// 6. Start the server
// 7. Test the API with Postman

const express = require('express');
const app = express();
app.use(express.json());

let comments = [
    { id: 1, author: "John", body: "I love this product." },
    { id: 2, author: "Peter", body: "I love this product." },
    { id: 3, author: "Mary", body: "I love this product." }
];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    let comment = {
        id: comments.length + 1,    };
});
