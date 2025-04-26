import React from 'react';

const CarCard = ({ car, onViewDetails }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{car.name}</h3>
        <p className="text-gray-600 text-sm mb-1">
          {car.model} • {car.year}
        </p>
        <p className="text-blue-600 font-bold mb-4">
          ${car.price}/day
        </p>
        {onViewDetails && (
          <button
            onClick={() => onViewDetails(car.id)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-sm"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default CarCard;
