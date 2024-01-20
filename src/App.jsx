import React from "react";

import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header.jsx";

import { Outlet } from "react-router-dom";

import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Error from "./components/Error.jsx";
import Home from "./pages/Home.jsx";
import RestaurantMenu from "./components/Home/RestaurantMenu/RestaurantMenu.jsx";
import Cart from "../src/components/Cart/Cart.jsx";
import Search from "../src/components/Search/Search.jsx";
import SearchedItem from "./components/Search/SearchedItem.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const userLocation = useSelector((store) => store.location.userLocation)
  return (
    <Router>
     
       {userLocation && <Header/>}
        <Routes>
        {userLocation ? <>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<LandingPage/>}/>
            <Route path="/search" element={<Search />} />
            <Route path="/help" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </> : <Route path="/" element={<LandingPage />} />
        }
        </Routes>
        <Footer/>
      
    </Router>
  );
};

export default App;
