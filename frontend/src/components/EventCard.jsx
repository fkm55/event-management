// src/components/EventCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  const { title, description, date, time, location, spaceAvailable, event_image } = event;

  let capacityMessage = '';
  if (spaceAvailable === 0) {
    capacityMessage = <span className="text-red-500">Sold Out</span>;
  } else if (spaceAvailable < 10) {
    capacityMessage = <span className="text-yellow-500">Hurry, only {spaceAvailable} spaces left!</span>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={event_image} alt="Event" className="w-full h-64 object-cover object-center" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <p className="text-gray-600">Date: {date} {time}</p>
        <p className="text-gray-600">Location: {location}</p>
        <p className="text-gray-600">{capacityMessage}</p>
        <Link to="/login" className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-blue-600 transition duration-300">
          Register
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
