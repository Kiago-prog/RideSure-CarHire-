import React from "react";
import { Link } from 'react-router-dom';

const Navbar =()=>{
  return (
    <nav className="navbar">
      <div className="navbar-logo">CarHire</div>
         <ul className="navbar-links">
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/cars">Browse Cars</Link></li>
                <li><Link to= "/bookings">Booking a Car</Link></li>
                <li><Link to= "/contacts">Contact Us</Link></li>
            </ul>
        <div className="navbar-auth">
            <button className="btn login">Login</button>
            <button className="btn signup">Sign Up</button>
        </div>
    </nav>
  );
}

export default Navbar