
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

function App() {
  // const { loginReq } = useSelector((state) => state)
  return (
    <Box>
      <Navbar />
      <Homepage />
      <Footer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Box>
  );
}

export default App;
