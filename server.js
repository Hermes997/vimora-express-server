const express = require('express');
const connectDB = require('./src/config/db');
const corsMiddleware = require('./src/middleware/cors');
const rbcScheduleRoutes = require('./src/routes/rbc-schedules');

connectDB();

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use('/api', rbcScheduleRoutes);

// run server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
