import React from "react";

const BookingForm = () => {
  return (
    <div className="booking-form-page">
      <h2>Car Booking Form</h2>
      <form className="book-car-form">
        <div className="form-group">
          <label>Pickup Location</label>
          <input type="text" placeholder="Enter pickup location" />
        </div>

        <div className="form-group">
          <label>Drop-off Location</label>
          <input type="text" placeholder="Enter drop-off location" />
        </div>

        <div className="form-group">
          <label>Pickup Date</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Return Date</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Car Type</label>
          <select>
            <option value="">Select car type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <div className="form-group">
          <label>Special Requests</label>
          <textarea placeholder="Any special requests?"></textarea>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
