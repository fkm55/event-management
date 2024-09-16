import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
//import bodyParser from 'body-parser';
import eventsRoute from './routes/events.js';
import router from './routes/router.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
//import upload from './middleware/upload.js'; 
import multer from 'multer';
import { fileURLToPath } from 'url';
import Event from './models/Event.js';
//import { createEvent } from './controllers/eventController.js';


dotenv.config();

// Convert __dirname to work with ES modules
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { createEvent } = eventsRoute;

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

//app.post('/events', upload.single('event_image'), createEvent);

app.get('/eventss', async (req, res) => {
  const { searchEvents } = req.query;
  try {
    
    const events = await Event.find();
    res.json({events});
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.get('/users', async (req, res) => {
  const { searchUsers } = req.query;
  try {
    const filter = searchUsers
      ? { $or: [
          { 'first_name': { $regex: searchUsers, $options: 'i' } },
          { 'last_name': { $regex: searchUsers, $options: 'i' } },
          { 'phone_number': { $regex: searchUsers, $options: 'i' } },
          { 'email': { $regex: searchUsers, $options: 'i' } }
        ] }
      : {};
    const users = await users.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/users', async (req, res) => {

});
//app.post('/events', (req, res) => {
  // Logic to create event
//});



app.use('/', router);
app.use('/', authRoutes);
app.use('/events', eventsRoute);
app.use('/api', router);




// Connect to MongoDB
mongoose.connect('mongodb+srv://fkr21:12+21=64ene@cluster0.unov3.mongodb.net/?retryWrites=true')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
    

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

