import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">CarHire</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vehicles">Browse Cars</Link></li>
        <li><Link to="/confirmation">Bookings</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-auth">
        <Link to="/login"><button className="btn login">Login</button></Link>
        <Link to="/signup"><button className="btn signup">Sign Up</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
