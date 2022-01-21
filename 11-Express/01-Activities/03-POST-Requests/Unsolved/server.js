const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  console.log(`${req.method} Request for reviews received`)
  res.send(`<h1>${req.method} Request for reviews received</h1>`)
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  res.json(`${req.method} Received to add a review`)
})

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  console.log(`${req.method} Request for upvotes  received`)
  res.send(`<h1>${req.method} Request for upvotes again received</h1>`)
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  res.json(`${req.method} Received to add upvotes to the server`)
})

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
