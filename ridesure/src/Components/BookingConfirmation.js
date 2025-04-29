import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

const BookingConfirmation = ({ bookingDetails, onModify, onCancel, onConfirm }) => {
  const navigate = useNavigate();

  // Handle the Modify button (back to vehicle selection page)
  const handleModify = () => {
    navigate("/vehicles");  // Redirect to the car selection page
  };

  // Handle the Cancel button (clear booking and go back to Home)
  const handleCancel = () => {
    // Optionally reset bookingDetails here
    navigate("/");  // Redirect to Home screen
  };

  // Handle the Confirm button (simulated confirmation action)
  const handleConfirm = () => {
    alert("Booking confirmed!");  // You can replace this with actual logic, e.g., API call
    navigate("/");  // Redirect to Home after confirmation
  };

  if (!bookingDetails) {
    return <p>No booking details available!</p>;
  }

  return (
    <div className="booking-container">
      <h2>Booking Confirmation</h2>
      <div className="booking-details">
        <div className="vehicle-info">
          <img src={bookingDetails.image} alt={bookingDetails.model} className="vehicle-image" />
          <h3>{bookingDetails.model}</h3>
          <p><strong>Make:</strong> {bookingDetails.make}</p>
          <p><strong>Year:</strong> {bookingDetails.year}</p>
          {/* Display more details as needed */}
        </div>
        <div className="booking-summary">
          <h4>Your Booking Details</h4>
          <p><strong>Pickup:</strong> {bookingDetails.pickupLocation}</p>
          <p><strong>Drop-off:</strong> {bookingDetails.dropoffLocation}</p>
          <p><strong>Date:</strong> {bookingDetails.date}</p>
          {/* Display other booking information */}
        </div>
      </div>
      <div className="booking-actions">
        <button onClick={handleModify}>Modify</button>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
