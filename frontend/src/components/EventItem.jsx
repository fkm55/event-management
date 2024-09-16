import React from 'react';

const EventItem = ({ event }) => {
    return (
        <div className="event-item">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
        </div>
    );
};

export default EventItem;
