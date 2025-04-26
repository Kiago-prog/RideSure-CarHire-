import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../Pages/BookingForm';

const CarDetail = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) return <p className="p-4">Car not found.</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
        <p className="text-gray-700">Model: {car.model}</p>
        <p className="text-gray-700">Year: {car.year}</p>
        <p className="text-blue-600 font-bold mt-2">${car.price} / day</p>
        <p className="text-gray-600 mt-4">{car.description}</p>
      </div>

      <BookingForm
        car={car}
        onSubmit={(data) => {
          console.log('Booking submitted:', data);
          alert('Booking confirmed!');
        }}
      />
    </div>
  );
};

export default CarDetail;
