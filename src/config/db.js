// Import Mongoose for MongoDB connection
const mongoose = require('mongoose');

const connectDB = async () => {
  // Connect to MongoDB with error handling
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process on connection failure
  }
};

module.exports = connectDB; // Export the connection function
