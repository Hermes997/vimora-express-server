// Import CORS middleware
const cors = require('cors');

const corsOptions = {
  origin: '*', // Allow requests from React frontend
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions); // Export CORS configuration
