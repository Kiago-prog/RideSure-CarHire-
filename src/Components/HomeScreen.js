import React, { useState } from 'react';
import './HomeScreen.css';

const HomeScreen = ({ onSearch }) => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSearch = () => {
    onSearch({ pickup, dropoff, date, time });
  };

  return (
    <div className="home-screen">
      <h2>Find Your Ride</h2>
      <div className="form-group">
        <label>Pickup Location:</label>
        <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Drop-off Location:</label>
        <input type="text" value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <button className="btn" onClick={handleSearch}>Search Cars</button>
    </div>
  );
};

export default HomeScreen;