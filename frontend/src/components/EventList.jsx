import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/eventss')
        setEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <form className="flex justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search by name or description"
          className="border border-gray-300 rounded-md py-2 px-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name="category"
          className="border border-gray-300 rounded-md py-2 px-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="music">Music</option>
          <option value="conference">Conference</option>
          <option value="workshop">Workshop</option>
          <option value="seminar">Seminar</option>
          {/* Add more options as needed */}
        </select>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        { console.log(events) }
        {events ? (
          events.map((event) => (
            <div key={event._id} className="bg-white shadow-lg rounded-lg">
              <img src={event.event_image} alt="Event" className="w-full h-32 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{event.description}</p>
                <p className="text-gray-600">Date: {new Date(event.date).toLocaleDateString()} {event.time}</p>
                <p className="text-gray-600">Location: {event.location}</p>
                <p className="text-gray-600">
                  {event.space_available === 0 ? (
                    <span className="text-red-500">Sold Out</span>
                  ) : event.space_available < 10 ? (
                    <span className="text-yellow-500">Hurry, only {event.space_available} spaces left!</span>
                  ) : null}
                </p>
                <a href="#" onClick={showSignInPrompt} className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-blue-600 transition duration-300">Register</a>
              </div>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

function showSignInPrompt() {
  const userConfirmed = window.confirm("Please sign in or create an account first.\nClick OK to Sign In, Cancel to Create an Account.");
  if (userConfirmed) {
    window.location.href = 'login.php';
  } else {
    window.location.href = 'signup.php';
  }
}

export default EventList;
