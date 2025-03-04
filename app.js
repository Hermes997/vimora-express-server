// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a GET route for the root path ('/')
app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello! The Express server is running.');
});

// Start the server on port 3000
app.listen(3000, () => {
  // Log a message to the console when the server starts
  console.log('Server is running on port 3000');
});
