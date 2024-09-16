import mongoose from 'mongoose';  // Import mongoose at the top

const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String,
    time: String,
    location: String,
    capacity: Number,
    space_available: Number,
    event_image: String,
    category: String,
    entrance_fee: Number,
  });
  
  const Event = mongoose.model('Event', eventSchema);
  export default Event; 