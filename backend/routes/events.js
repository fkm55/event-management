import express from 'express';
import multer from 'multer';
import path from 'path';
import { createEvent, updateEvent, deleteEvent, getEvents } from '../controllers/eventController.js';

// Create a new router instance
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Configure multer for file uploads
/*const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });
*/
// Define route handlers

router.post('/upload', upload.single('event_image'), createEvent);
router.put('/:id', upload.single('event_image'), updateEvent);
router.delete('/:id', deleteEvent);
router.get('/', getEvents);

// Export the router
export default router;
