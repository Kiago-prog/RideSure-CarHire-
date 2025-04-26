import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    carId: "",
    date: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Booking submitted:", formData);
    alert(`Booking submitted for ${formData.name}!`);
    // Reset the form
    setFormData({
      name: "",
      carId: "",
      date: "",
    });
  }

  return (
    <div>
      <h2>Book a Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Car ID:
            <input
              type="number"
              name="carId"
              value={formData.carId}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Booking Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
