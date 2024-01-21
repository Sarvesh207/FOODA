import React from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "../src/pages/Cart.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Search from "./pages/Search.jsx";
import Error from "./pages/Error.jsx";

const App = () => {
  const userLocation = useSelector((store) => store.location.userLocation)
  return (
    <Router>
     
       {userLocation && <Header/>}
        <Routes>
        {userLocation ? <>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/help" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Error />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
            
          </> : <Route path="/" element={<LandingPage />} />
        }
        </Routes>
        <Footer/>
        
      
    </Router>
  );
};

export default App;
