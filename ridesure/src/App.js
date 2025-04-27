import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import CarList from './Components/CarList';
import { Routes, Route } from 'react-router-dom';


function App() {
return(
  <div className="App">
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/search" element={<SearchForm />} />
      </Routes>
  </div>
);
}

export default App;
