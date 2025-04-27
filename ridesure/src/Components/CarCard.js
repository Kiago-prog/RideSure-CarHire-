import React from "react";

function CarCard({ car }) {
  if (!car) return null; // 🔥 extra protection

  return (
    <div className="car-card">
      <img 
        src={car.image || "https://via.placeholder.com/400x200?text=No+Image"} 
        alt={`${car.brand} ${car.model}`} 
        className="car-image" 
      />
      <h3>{car.brand} {car.model}</h3>
      <p>{car.year} • {car.type}</p>
    </div>
  );
}

export default CarCard;
