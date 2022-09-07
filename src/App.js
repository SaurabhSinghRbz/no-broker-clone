
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <div style={{ height: "500px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
