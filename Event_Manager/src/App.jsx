import React, { useState, useEffect } from 'react';
import EventList from './Components/EventList';
import EventForm from './Components/EventForm';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);

  // Fetch events
  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:3000/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Add event
  const addEvent = async (event) => {
    const maxId = events.length > 0 ? Math.max(...events.map((e) => e.id)) : 0;
    const stringId = String(maxId + 1);
    const newEvent = { ...event, id: stringId };

    try {
      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        await fetchEvents();
      } else {
        console.error('Failed to add event:', response.status);
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  // Delete event
  const deleteEvent = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchEvents();
      } else {
        console.error(`Failed to delete event with ID: ${id}`, response.status);
      }
    } catch (error) {
      console.error('Error during delete:', error);
    }
  };

  return (
    <div className="container">
      <EventForm onAdd={addEvent} />
      <EventList events={events} onDelete={deleteEvent} />
    </div>
  );
};

export default App;
