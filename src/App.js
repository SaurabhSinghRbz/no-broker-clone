
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';




import { Box } from "@chakra-ui/react"
import Login from './Pages/LoginSignup/Login';
import Signup from './Pages/LoginSignup/Signup';
// import { useSelector } from 'react-redux';
import Rent from './Components/Rent_Page/rent';
import { Yourinput } from './Components/Rent_Page/components/Input';
import Payment from './Components/Payment_Detail/payment';
import ToPayment from './Components/Card_Detail_Page/payment';
function App() {
  // const { loginReq } = useSelector((state) => state)
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Homepage />} />
        {/* <Route path="/payrent/*" element={<Rent />} /> */}
        <Route path="/payrent/houserent" element={<Rent />} />
        <Route path='/payrent/paymentdetail' element={<Payment />}></Route>
        <Route path="/payrent/payment" element={<ToPayment />}></Route>
      </Routes>

      <Footer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Box>
  );
}

export default App;
