// src/Components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#007bff",
      padding: "10px 30px",
      color: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
    }}>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        RideSure 🚗
      </div>
      
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/cars" style={navLinkStyle}>Cars</Link>
        <Link to="/login" style={navLinkStyle}>Login</Link>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.1rem",
  fontWeight: "500",
  transition: "color 0.3s",
};

export default Navbar;
