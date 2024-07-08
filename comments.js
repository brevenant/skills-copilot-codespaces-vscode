// Create web server
// Create a web server that listens for requests on port 3000, and responds with the comments from the comments.json file. The comments should be returned as a JSON array.

// The comments.json file contains an array of objects, each with a name and comment property. You should respond with the comments array as a JSON object.

// You can use the fs module to read the comments.json file:

// const fs = require('fs');
// const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
// The comments.json file is:

// [
//   {
//     "name": "Alice",
//     "comment": "I love your website!"
//   },
//   {
//     "name": "Bob",
//     "comment": "Great site!"
//   }
// ]
// Start the server with node comments.js, and visit http://localhost:3000 to see the comments.

const http = require('http');
const fs = require('fs');

const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
});

server