import React, { useState } from 'react';
import axios from 'axios';

function EventForm() {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
    space_available: '',
    category: '',
    entrance_fee: '',
    event_image: null,
  });

  const [eventId, setEventId] = useState('');
  const [eventToUpdate, setEventToUpdate] = useState(null);

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleFileChange = (e) => {
    setEventData({ ...eventData, event_image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(eventData).forEach((key) => {
      if (eventData[key] !== null) {
        formData.append(key, eventData[key]);
      }
    });

    try {
      const response = await axios.post('http://localhost:4000/events', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        alert('Event created successfully.');
        setEventData({
          title: '',
          description: '',
          date: '',
          time: '',
          location: '',
          capacity: '',
          space_available: '',
          category: '',
          entrance_fee: '',
          event_image: null,
        });
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event.');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(eventData).forEach((key) => {
      if (eventData[key] !== null) {
        formData.append(key, eventData[key]);
      }
    });

    try {
      const response = await axios.put(`http://localhost:4000/events/${eventId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        alert('Event updated successfully.');
        setEventData({
          title: '',
          description: '',
          date: '',
          time: '',
          location: '',
          capacity: '',
          space_available: '',
          category: '',
          entrance_fee: '',
          event_image: null,
        });
        setEventId('');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      alert('Error updating event.');
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:4000/events/${eventId}`);

      if (response.status === 200) {
        alert('Event deleted successfully.');
        setEventId('');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Error deleting event.');
    }
  };

  const handleGetEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/events/${eventId}`);
      if (response.status === 200) {
        setEventToUpdate(response.data);
        setEventData(response.data);
      }
    } catch (error) {
      console.error('Error retrieving event:', error);
      alert('Error retrieving event.');
    }
  };

  return (
    <div>
      {/* Create Event Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-4">
        <input type="text" name="title" placeholder="Title" value={eventData.title} onChange={handleChange} className="border p-2 w-full" required />
        <textarea name="description" placeholder="Description" value={eventData.description} onChange={handleChange} className="border p-2 w-full" />
        <input type="date" name="date" value={eventData.date} onChange={handleChange} className="border p-2 w-full" />
        <input type="time" name="time" value={eventData.time} onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="location" placeholder="Location" value={eventData.location} onChange={handleChange} className="border p-2 w-full" />
        <input type="number" name="capacity" placeholder="Capacity" value={eventData.capacity} onChange={handleChange} className="border p-2 w-full" required />
        <input type="number" name="space_available" placeholder="Space Available" value={eventData.space_available} onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="category" placeholder="Category" value={eventData.category} onChange={handleChange} className="border p-2 w-full" />
        <input type="number" name="entrance_fee" placeholder="Entrance Fee" value={eventData.entrance_fee} onChange={handleChange} className="border p-2 w-full" />
        <input type="file" name="event_image" onChange={handleFileChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Event</button>
      </form>

      {/* Update Event Form */}
      <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-4 p-4">
        <input type="text" name="eventId" placeholder="Event ID" value={eventId} onChange={(e) => setEventId(e.target.value)} className="border p-2 w-full" />
        <button type="button" onClick={handleGetEvent} className="bg-green-500 text-white px-4 py-2 rounded">Get Event</button>
        <input type="text" name="title" placeholder="Title" value={eventData.title} onChange={handleChange} className="border p-2 w-full" />
        <textarea name="description" placeholder="Description" value={eventData.description} onChange={handleChange} className="border p-2 w-full" />
        <input type="date" name="date" value={eventData.date} onChange={handleChange} className="border p-2 w-full" />
        <input type="time" name="time" value={eventData.time} onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="location" placeholder="Location" value={eventData.location} onChange={handleChange} className="border p-2 w-full" />
        <input type="number" name="capacity" placeholder="Capacity" value={eventData.capacity} onChange={handleChange} className="border p-2 w-full" />
        <input type="number" name="space_available" placeholder="Space Available" value={eventData.space_available} onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="category" placeholder="Category" value={eventData.category} onChange={handleChange} className="border p-2 w-full" />
        <input type="number" name="entrance_fee" placeholder="Entrance Fee" value={eventData.entrance_fee} onChange={handleChange} className="border p-2 w-full" />
        <input type="file" name="event_image" onChange={handleFileChange} className="border p-2 w-full" />
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">Update Event</button>
      </form>

      {/* Delete Event */}
      <div className="p-4">
        <input type="text" name="eventId" placeholder="Event ID" value={eventId} onChange={(e) => setEventId(e.target.value)} className="border p-2 w-full" />
        <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete Event</button>
      </div>
    </div>
  );
}

export default EventForm;
