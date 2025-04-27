// ridesure/src/components/CarList.js

import React from "react";

const cars = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2020, type: "Sedan" },
  { id: 2, brand: "Ford", model: "Ranger", year: 2022, type: "Truck" },
  { id: 3, brand: "Honda", model: "Civic", year: 2021, type: "Sedan" },
];

function CarList() {
  return (
    <div>
      <h2>Available Cars for Hire</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.brand} {car.model} ({car.year}) - {car.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
