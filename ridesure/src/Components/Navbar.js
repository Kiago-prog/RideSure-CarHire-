import React from "react";
import { Link } from 'react-router-dom';

const Navbar =()=>{
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">RideSure CarHire</div>
         <ul className="flex space-x-6">
                <li><Link to= "/" className="text-white hover:text-gray-300">Home</Link></li>
                <li><Link to= "/cars" className="text-white hover:text-gray-300">Browse Cars</Link></li>
                <li><Link to= "/bookings" className="text-white hover:text-gray-300">Book a Car</Link></li>
                <li><Link to= "/contacts" className="text-white hover:text-gray-300">Contact Us</Link></li>
            </ul>
        <div className="space-x-4">
          <Link to= "/LogIn">
            <button className="bg-white text-blue-600 font-semibold py-1 px-4 rounded hover:bg-gray-200">Login</button>
         </Link>
         <Link to= "/SignUp">
            <button className="bg-white text-blue-600 font-semibold py-1 px-4 rounded hover:bg-gray-200">Sign Up</button>
         </Link>
        </div>
    </nav>
  );
}

export default Navbar