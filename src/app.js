const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const scheduleRoutes = require('./routes/schedules');
//const suggestionRoutes = require('./routes/suggestions');
const rbcScheduleRoutes = require('./routes/rbc-schedules');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/schedules', scheduleRoutes);
//app.use('/api/suggestions', suggestionRoutes);
app.use('/api/rbc-schedules', rbcScheduleRoutes);

// Server on
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
