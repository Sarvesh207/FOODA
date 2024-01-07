import React from "react";

import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header.jsx";

import { Outlet } from "react-router-dom";
import store from "./utils/Store.js";
import { Provider } from "react-redux";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home/Home.jsx";
import RestaurantMenu from "./components/Home/RestaurantMenu/RestaurantMenu.jsx";
import Cart from "../src/components/Cart/Cart.jsx";
import Search from "../src/components/Search/Search.jsx";
import SearchedItem from "./components/Search/SearchedItem.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Provider store={store}>
      <Header/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          {/* <Route path="/restaurants/:resId" element={<Home/>}/> */}
          <Route path="/search" element={<Search />} />
          <Route path="/help" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </Provider>
    </Router>
  );
};

export default App;
