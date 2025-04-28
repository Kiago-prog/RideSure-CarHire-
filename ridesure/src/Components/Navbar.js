import React from "react";


const Navbar =()=>{
    <nav className="navbar">
            <div className="navbar-logo">CarHire</div>
                <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Browse Cars</a></li>
                <li><a href="#">Bookings</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        <div className="navbar-auth">
            <button className="btn login">Login</button>
            <button className="btn signup">Sign Up</button>
        </div>
    </nav>
}

export default Navbar