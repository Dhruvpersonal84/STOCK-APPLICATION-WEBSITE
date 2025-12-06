import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './Landingpage/Home/Home';
import Signup from './Landingpage/Signup/Signup';
import About from './Landingpage/About/About';
import Pricingpage from './Landingpage/Pricing/Pricing_page';
import Supportpage from './Landingpage/Support/Support_page';
import Productpage from './Landingpage/Products/Products_page';
import Navbar from './Landingpage/Navbar';
import Footer from './Landingpage/Footer';
import NotFound from './Landingpage/NotFound';
import Login from './Landingpage/Login/Login';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Product" element={<Productpage />}></Route>
        <Route path="/Price" element={<Pricingpage />}></Route>
        <Route path="/Support" element={<Supportpage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    <Footer />
    
     <ToastContainer
        position="top-right"
        autoClose={3000} // auto close after 3 seconds
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  </BrowserRouter>
);

