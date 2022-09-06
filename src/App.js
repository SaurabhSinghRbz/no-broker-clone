import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Rent from './Components/Rent_Page/rent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Rent/>
    </div>
  );
}

export default App;
