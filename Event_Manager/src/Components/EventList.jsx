import React from 'react';

const EventList = ({ events, onDelete }) => {
  return (
    <div className="event-list">
      <h2>Event List</h2>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p>
                <strong>Date:</strong> {event.date} - <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Description:</strong> {event.description}
              </p>
              <p>
                <strong>Organizer:</strong> {event.organizer}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <button
                className="delete-button"
                onClick={() => onDelete(event.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events to display.</p>
      )}
    </div>
  );
};

export default EventList;
