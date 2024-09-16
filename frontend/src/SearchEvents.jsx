// src/components/SearchEvents.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchEvents = () => {
  const [search, setSearch] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/events', {
          params: { searchEvents: search }
        });
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.searchEvents.value);
  };

  const handleReset = () => {
    setSearch('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Events</h2>
      <form onSubmit={handleSearch} className="flex mb-4">
        <input
          type="text"
          name="searchEvents"
          placeholder="Search by title, time, or location"
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
        {search && (
          <button type="button" onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Reset Search</button>
        )}
      </form>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Event ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Capacity</th>
            <th className="py-2 px-4 border-b">Space Available</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Entrance Fee</th>
            <th className="py-2 px-4 border-b">Event Image</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td className="py-2 px-4 border-b">{event._id}</td>
              <td className="py-2 px-4 border-b">{event.title}</td>
              <td className="py-2 px-4 border-b">{event.description}</td>
              <td className="py-2 px-4 border-b">{event.date}</td>
              <td className="py-2 px-4 border-b">{event.time}</td>
              <td className="py-2 px-4 border-b">{event.location}</td>
              <td className="py-2 px-4 border-b">{event.capacity}</td>
              <td className="py-2 px-4 border-b">{event.space_available}</td>
              <td className="py-2 px-4 border-b">{event.category}</td>
              <td className="py-2 px-4 border-b">{event.entrance_fee}</td>
              <td className="py-2 px-4 border-b">
                {event.event_image ? (
                  <img src={event.event_image} alt="Event" className="w-16 h-16 object-cover" />
                ) : (
                  'No image'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchEvents;
