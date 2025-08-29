const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Create an instance of Express
const app = express();

// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Define the port to run the server
const PORT = process.env.PORT || 3000;

// Define a simple route for the root URL
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});