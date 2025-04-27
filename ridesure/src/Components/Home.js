import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CarCard from './CarCard';

function Home () {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/car');
  };

  const handleViewDetails = (carId) => {
    navigate(`/car/${carId}`);
  };

    // Fetch cars data when the component mounts
    useEffect(() => {
      const fetchCars = async () => {
        try {
          const response = await fetch('http://localhost:3000/cars'); // Update this with your actual endpoint
          const data = await response.json();
          setCars(data); 
        } catch (error) {
          console.error('Error fetching cars:', error);
        }
      };
  
      fetchCars();
    }, []); 

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Available Cars</h2>
      <button onClick={handleClick}>View Available Cars</button>
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
