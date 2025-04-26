const express = require("express");
const app = express();
const PORT = 4000;

const cars =  [
    {id: 1, brand: "Toyota", model: "Corolla", year: 2020, type:"Sedan"},
    {id: 2, brand: "Ford", model: "Ranger", year: 2022, type:"Truck"},
]

let bookings = [];

app.use(express.json());

//Get all Cars
app.get("/cars", (req, res) => {
    res.json(cars);
  });

//Get all Bookings
app.get("/bookings", (req, res) => {
    res.json(bookings);
  });

//Post a NEW booking
app.post("/bookings", (req, res) => {
  const newBooking = {
    id: bookings.length + 1,
    carId: req.body.carId,
    user: req.body.user,
    date: req.body.date,
  };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
