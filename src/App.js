import React from 'react';
import './App.css';
import ToPayment from './Components/Card_Detail_Page/payment';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Payment from './Components/Payment_Detail/payment';
import Rent from './Components/Rent_Page/rent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Rent/> */}
      {/* <Payment/> */}
      <ToPayment/>
    </div>
  );
}

export default App;
