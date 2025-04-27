import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import CarList from './Components/CarList';
import { Routes, Route } from 'react-router-dom';
import LogIn from './Pages/LoginPage';
import SignUp from './Pages/SignupPage';
import Contacts from './Pages/ContactUs';


function App() {
return(
  <div className="App">
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/search" element={<SearchForm />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Contacts" element={<Contacts />} />
        
      </Routes>
  </div>
);
}


export default App;
