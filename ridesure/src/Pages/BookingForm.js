import React from "react";

const BookingForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Book Your Ride</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Pickup Location</label>
            <input 
              type="text" 
              placeholder="Enter pickup location"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">Drop-off Location</label>
            <input 
              type="text" 
              placeholder="Enter drop-off location"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block mb-2 font-semibold text-gray-700">Pickup Date</label>
              <input 
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="w-1/2">
              <label className="block mb-2 font-semibold text-gray-700">Return Date</label>
              <input 
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">Special Requests</label>
            <textarea 
              placeholder="Any special requests?"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-bold py-3 rounded-lg"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
