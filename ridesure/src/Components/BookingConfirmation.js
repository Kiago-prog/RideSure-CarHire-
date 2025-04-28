import React from 'react';

const BookingConfirmation = ({ bookingDetails, onModify, onCancel, onConfirm }) => {
  if (!bookingDetails) {
    return <div>No booking details available.</div>;
  }

  const handleModify = () => {
    alert("Modify booking clicked");
    if(onModify) onModify();
  };

  const handleCancel = () => {
    alert("Cancel booking clicked");
    if(onCancel) onCancel();
  };

  const handleConfirm = () => {
    alert("Confirm & Pay clicked");
    if(onConfirm) onConfirm();
  };

  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmation</h2>
      <div className="booking-summary">
        <p><strong>Car:</strong> {bookingDetails.name}</p>
        <p><strong>Price per day:</strong> ${bookingDetails.pricePerDay}</p>
        <p><strong>Pickup:</strong> {bookingDetails.pickup}</p>
        <p><strong>Drop-off:</strong> {bookingDetails.dropoff}</p>
        <p><strong>Date:</strong> {bookingDetails.date}</p>
        <p><strong>Time:</strong> {bookingDetails.time}</p>
      </div>
      <div className="booking-actions">
        <button className="btn modify" onClick={handleModify}>Modify Booking</button>
        <button className="btn cancel" onClick={handleCancel}>Cancel Booking</button>
        <button className="btn confirm" onClick={handleConfirm}>Confirm & Pay</button>
      </div>
    </div>
  );
};

export default BookingConfirmation;