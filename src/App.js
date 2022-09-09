
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import { Box } from "@chakra-ui/react"

function App() {
  return (
    <Box>
      <Navbar />
      <Homepage />
      <Footer />
      <Routes>
        <Route path="/login-signup" element={<LoginSignup />} />
      </Routes>
    </Box>
  );
}

export default App;
