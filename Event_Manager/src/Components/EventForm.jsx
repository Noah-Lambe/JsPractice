import React, { useState } from 'react';

const EventForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    organizer: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      title: '',
      date: '',
      time: '',
      description: '',
      organizer: '',
      location: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Event</h2>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <input name="date" value={formData.date} onChange={handleChange} type="date" required />
      <input name="time" value={formData.time} onChange={handleChange} type="time" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="organizer" value={formData.organizer} onChange={handleChange} placeholder="Organizer" required />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
