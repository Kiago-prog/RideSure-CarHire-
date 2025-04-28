import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Welcome to RideSure Car Hire 
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        Find the perfect car for your next adventure or business trip.
        Browse, book, and drive — fast and easy!
      </p>
      
      <div className="flex gap-4">
        <Link 
          to="/vehicles" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Browse Cars
        </Link>

        <Link 
          to="/bookCar" 
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
        >
          Book Now
        </Link>
      </div>

      <div className="mt-12 text-sm text-gray-500">
        Need help? <Link to="/contacts" className="underline">Contact Us</Link>
      </div>
    </div>
  );
}

export default Home;
