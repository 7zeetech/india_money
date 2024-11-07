import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Seperate/Navbar';
import Home from './Seperate/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Seperate/Services';
import Goldbuyer from './Seperate/Goldbuyer';
import Footer from './Seperate/Footer';
import Creditcard from './Seperate/Creditcard';
import Financial from './Seperate/Financial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Services />} />
          <Route path="/goldbuyer" element={<Goldbuyer />} />
          <Route path="/creditcard" element={<Creditcard />} />
          <Route path="/financial" element={<Financial />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
