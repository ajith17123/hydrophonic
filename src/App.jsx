import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Product from './components/Product';

function App () {

  useEffect(() => {
    AOS.init ({
      duration: 1000,
      once: false,
    });
  }, [] );
  return (

  <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </HashRouter>

  )
}

export default App;