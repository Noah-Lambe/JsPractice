import React from 'react';

const EventDetails = ({ event }) => {
  if (!event) return <p>Select an event to view details.</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.date} - {event.time}</p>
      <p>{event.description}</p>
      <p>Organizer: {event.organizer}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default EventDetails;
