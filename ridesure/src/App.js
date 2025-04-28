import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import CarList from './Components/CarList';
import BookingConfirmation from './Components/BookingConfirmation';

const App = () => {
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
    navigate('/vehicles');
  };

  const handleCarSelect = (car) => {
    // Combine car details with search criteria for booking summary
    setBookingDetails({ ...car, ...searchCriteria });
    navigate('/confirmation');
  };

  return (
    <Routes>
      <Route path="/" element={<HomeScreen onSearch={handleSearch} />} />
      <Route path="/vehicles" element={<CarList onSelect={handleCarSelect} />} />
      <Route 
        path="/confirmation" 
        element={<BookingConfirmation bookingDetails={bookingDetails} 
                                         onModify={() => console.log("Modify invoked")}
                                         onCancel={() => console.log("Cancel invoked")}
                                         onConfirm={() => console.log("Confirm invoked")} />} 
      />
    </Routes>
  );
};

export default App;
