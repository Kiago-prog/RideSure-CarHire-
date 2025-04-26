import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import CarList from './components/CarList';


function App() {
return(
  <div className="App">
    <Navbar/>
    <h1>RideSure Car Hire</h1>
    <SearchForm />
    <CarList />
    <Home/>
  </div>
);
}

export default App;
