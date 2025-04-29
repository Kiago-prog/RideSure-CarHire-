import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import CarList from './Components/CarList';
import BookingConfirmation from './Components/BookingConfirmation';
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';

const App = () => {
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
    navigate('/vehicles');
  };

  const handleCarSelect = (car) => {
    setBookingDetails({ ...car, ...searchCriteria });
    navigate('/confirmation');
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen onSearch={handleSearch} />} />
        <Route path="/vehicles" element={<CarList onSelect={handleCarSelect} />} />
        <Route
          path="/confirmation"
          element={
            <BookingConfirmation
              bookingDetails={bookingDetails}
              onModify={() => console.log('Modify invoked')}
              onCancel={() => console.log('Cancel invoked')}
              onConfirm={() => console.log('Confirm invoked')}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
