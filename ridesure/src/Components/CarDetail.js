import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CarDetail = () => {
  const { id } = useParams(); // Get the car ID from the URL
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching car data based on ID
    const fetchCarDetails = () => {
      const carDetails = {
        1: {
          name: "Toyota Corolla",
          price: "£50/day",
          description: "A reliable, fuel-efficient sedan perfect for city driving.",
          features: ["Automatic transmission", "Bluetooth connectivity", "Air conditioning"],
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhzozQvOyl8AvMa1a-1rbuQQuBktf7I4YJQ&s",
          gallery: [
            "https://source.unsplash.com/featured/?toyota,interior",
            "https://source.unsplash.com/featured/?toyota,exterior",
            "https://source.unsplash.com/featured/?toyota,engine",
          ],
        },
        2: {
          name: "Honda Civic",
          price: "£55/day",
          description: "Sporty compact car with a comfortable interior.",
          features: ["Leather seats", "Heated seats", "Rear-view camera"],
          image: "https://source.unsplash.com/featured/?honda,civic",
          gallery: [
            "https://source.unsplash.com/featured/?honda,interior",
            "https://source.unsplash.com/featured/?honda,exterior",
            "https://source.unsplash.com/featured/?honda,engine",
          ],
        },
        3: {
          name: "BMW X5",
          price: "£120/day",
          description: "Luxury SUV with premium features and excellent performance.",
          features: ["All-wheel drive", "Sunroof", "Leather upholstery"],
          image: "https://source.unsplash.com/featured/?bmw,x5",
          gallery: [
            "https://source.unsplash.com/featured/?bmw,interior",
            "https://source.unsplash.com/featured/?bmw,exterior",
            "https://source.unsplash.com/featured/?bmw,engine",
          ],
        },
      };

      setCar(carDetails[id]);
      setLoading(false);
    };

    fetchCarDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl text-gray-600">Loading car details...</div>;
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700">{car.name}</h1>

        {/* Main Car Image */}
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-80 object-cover rounded-lg mt-6"
        />

        <p className="mt-4 text-xl text-gray-700">{car.description}</p>
        <p className="text-lg font-semibold text-blue-600 mt-2">{car.price}</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-900">Car Features</h2>
          <ul className="list-disc pl-5 mt-2">
            {car.features.map((feature, index) => (
              <li key={index} className="text-lg text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-900">Gallery</h2>
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {car.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Car image ${index + 1}`}
                className="w-64 h-48 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
