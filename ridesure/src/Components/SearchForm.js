import React, { useState } from 'react';

const SearchForm = () => {
    const [formData, setFormData] = useState({
      pickupLocation: '',
      dropoffLocation: '',
      pickupDate: '',
      dropoffDate: '',
    });
  
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Searching cars with:', formData);
      // You can later pass this data to filter available cars
    };
  
    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <h2>Search for a Car</h2>
        <div className="form-group">
          <label>Pick-up Location</label>
          <input 
            type="text" 
            name="pickupLocation" 
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Drop-off Location</label>
          <input 
            type="text" 
            name="dropoffLocation" 
            value={formData.dropoffLocation}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Pick-up Date</label>
          <input 
            type="date" 
            name="pickupDate" 
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Drop-off Date</label>
          <input 
            type="date" 
            name="dropoffDate" 
            value={formData.dropoffDate}
            onChange={handleChange}
            required
          />
        </div>
  
        <button type="submit">Search Cars</button>
      </form>
    );
  };
  
  export default SearchForm;