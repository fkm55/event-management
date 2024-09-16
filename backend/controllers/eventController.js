import Event from '../models/Event.js'; // Adjust the import path based on your file structure

// Create a new event
export const createEvent = async (req, res) => {
  const { title, description, date, time, location, capacity, space_available, category, entrance_fee } = req.body;
  const event_image = req.file ?.path;

  try {
    const newEvent = new Event({
      title,
      description,
      date,
      time,
      location,
      capacity,
      space_available,
      event_image,
      category,
      entrance_fee,
    });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully.' });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Error creating event.' });
  }
};

// Update an existing event
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, time, location, capacity, space_available, category, entrance_fee } = req.body;
  const event_image = req.file ?.path;

  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: 'Event not found.' });

    event.title = title || event.title;
    event.description = description || event.description;
    event.date = date || event.date;
    event.time = time || event.time;
    event.location = location || event.location;
    event.capacity = capacity || event.capacity;
    event.space_available = space_available || event.space_available;
    event.event_image = event_image || event.event_image;
    event.category = category || event.category;
    event.entrance_fee = entrance_fee || event.entrance_fee;

    await event.save();
    res.status(200).json({ message: 'Event updated successfully.' });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Error updating event.' });
  }
};

// Delete an event
export const deleteEvent = async (req, res) => {
 // const { id } = req.params;

  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: 'Event not found.' });

    await event.deleteOne();
    res.status(200).json({ message: 'Event deleted successfully.' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Error deleting event.' });
  }
};

// Get all events
export const getEvents = async (req, res) => {
  const search = req.query.search || '';
  const query = {
    $or: [
      { title: new RegExp(search, 'i') },
      { date: new RegExp(search, 'i') },
      { location: new RegExp(search, 'i') },
    ],
  };

  try {
    const events = await Event.find(query);
    res.status(200).json(events);
  } catch (error) {
    console.error('Error retrieving events:', error);
    res.status(500).json({ message: 'Error retrieving events.' });
  }
};
