/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import Services from "./pages/Services";
import AdPostCard from "./components/post-ad/PostAd";
import axios from "./services/api";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ExploreCars from "./components/exploreCars/exploreCars";
import CarDetails from "./components/exploreCars/CarDetails";

function App() {
  const [isTokenValid, setIsTokenValid] = useState(true);

  useEffect(() => {
    const token = Cookies.get("authToken");
    const expiryDateStr = Cookies.get("authTokenExpiry");

    if (token && expiryDateStr) {
      const expiryDate = new Date(expiryDateStr);
      const now = new Date();

      if (expiryDate > now) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setIsTokenValid(true);
      } else {
        Cookies.remove("authToken");
        Cookies.remove("authTokenExpiry");
        axios.defaults.headers.common["Authorization"] = null;
        setIsTokenValid(false);
      }
    } else {
      axios.defaults.headers.common["Authorization"] = null;
      setIsTokenValid(false);
    }
  }, []);

  return (
    <Router>
      <Navbar isTokenValid={isTokenValid} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/post-ad" element={<AdPostCard />} />
        <Route path="/explore-cars" element={<ExploreCars />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
