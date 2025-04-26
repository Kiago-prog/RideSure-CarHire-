import React from "react";

<<<<<<< HEAD

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
=======
const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        RIDESURE
        <div className="text-white text-2xl font-bold">
          <a href="/">RideSure</a>
        </div>

        <div className="space-x-6">
          <a href="/" className="text-white hover:text-gray-300 transition">Home</a>
          <a href="/about" className="text-white hover:text-gray-300 transition">About</a>
        </div>

        <div className="space-x-4">
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> b781b2413143ec765d346f9c9347edc709f021d2
