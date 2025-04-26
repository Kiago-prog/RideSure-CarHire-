import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarCard from './CarCard';

const Home = ({ cars }) => {
  const navigate = useNavigate();

  const handleViewDetails = (carId) => {
    navigate(`/car/${carId}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Available Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
