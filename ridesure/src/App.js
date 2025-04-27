// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import CarList from "./Components/CarList";
import CarDetail from "./Components/CarDetail";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Login Page Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Car List Route */}
          <Route path="/cars" element={<CarList />} />

          {/* Car Details Route */}
          <Route path="/cars/:id" element={<CarDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
