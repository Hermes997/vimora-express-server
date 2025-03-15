const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Schedule Schema
const scheduleSchema = new mongoose.Schema({
  date: Date,
  title: String,
  location: String,
  mood: Number,
  userId: String,
});

const rbcScheduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
const RbcSchedule = mongoose.model('RbcSchedule', rbcScheduleSchema);

// API 엔드포인트
app.get('/api/schedules', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/rbc-schedules', async (req, res) => {
  try {
    const rbcSchedule = await RbcSchedule.find();
    res.json(rbcSchedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/schedules', async (req, res) => {
  try {
    const newSchedule = new Schedule(req.body);
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/rbc-schedules', async (req, res) => {
  try {
    const newRbcSchedule = new RbcSchedule(req.body);
    await newRbcSchedule.save();
    res.status(201).json(newRbcSchedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// permit access
app.use(cors({
  origin: 'http://localhost:3000',
}));

// 서버 실행
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
