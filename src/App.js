
import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import LoginSignup from './Pages/LoginSignup/LoginSignup';

function App() {
  const id = useParams()
  console.log(id)
  return (
    <div className="App">
      {/* <Link to="/login"><Button>Click ME</Button></Link> */}
      <Navbar />
      <Homepage />
      <Footer />
      <Routes>
        <Route path="/login-signup" element={<LoginSignup />} />
      </Routes>
      {/* <LoginSignup /> */}
    </div>
  );
}

export default App;
