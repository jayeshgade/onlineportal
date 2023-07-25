import React from 'react';
import './App.css';
import First from './components/First';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ServicesConnectionsection from './components/ServicesConnectionsection';
import Gallery from './components/Gallery';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import View360 from './components/View360';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<First />}></Route>
          <Route exact path="/home" element={<First />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/aboutus" element={<Aboutus />}></Route>
          <Route exact path="/contactus" element={<Contactus />}></Route>
          <Route exact path="/view360" element={<View360 />}></Route>
        </Routes>
        </Router>
        <Footer />
      </>
      );
}

      export default App;
