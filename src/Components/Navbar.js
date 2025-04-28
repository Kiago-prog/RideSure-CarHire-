import React from "react";
import { Link } from 'react-router-dom';

const Navbar =()=>{
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-800">RideSure CarHire</div>
         <ul className="flex space-x-6 text-blue-900 font-semibold">
                <li><Link to= "/" className="hover:text-blue-600">Home</Link></li>
                <li><Link to= "/bookCar" className="hover:text-blue-600">Book a Car</Link></li>
                <li><Link to= "/vehicles" className="hover:text-blue-600">Browse Cars</Link></li>
                <li><Link to= "/contacts" className="hover:text-blue-600">Contact Us</Link></li>
            </ul>
        <div className="space-x-4">
          <Link to= "/LogIn">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
         </Link>
         <Link to= "/SignUp">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign Up</button>
         </Link>
        </div>
    </nav>
  );
}

export default Navbar