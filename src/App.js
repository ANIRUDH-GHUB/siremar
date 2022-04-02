/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
  import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Adminpage from './pages/Adminpage';
import Navbar2 from './components/Navbar2';
import Barchart from './components/Barchart';
import Inspectorpage from './pages/Inspectorpage';
import Residentpage from './pages/Residentpage';
import Login from './pages/Login';
import Register from './pages/Register';




function App() {
  return (
    <Router basename="/wdm">
      <Routes>

        <Route exact path="/" element={<Homepage />} />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminpage" element={<Adminpage />} />
        <Route path="/navbar2" element={<Navbar2 />} />
        <Route path="/barchart" element={<Barchart />} />
        <Route path="/inspectorpage" element={<Inspectorpage />} />
        <Route path="/residentpage" element={<Residentpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />




      </Routes>
    </Router>


  );
}

export default App;
