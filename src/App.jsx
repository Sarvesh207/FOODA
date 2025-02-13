import React from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Cart,
  LandingPage,
  Search,
  Home,
  Error,
  Login,
  SignUp,
  Contact,
} from "./pages/index.js";
import Help from "./pages/Help.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import RestaurantMenu from "./components/Home/RestaurantMenu/RestaurantMenu.jsx";
import "./CSS/index.css";
import SideCard from "./components/Cart/SideCard.jsx";
import UnderCondtruction from "./components/UnderCondtruction.jsx";
import Shimmer from "./components/Shimmer.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const userLocation = useSelector((store) => store.location.userLocation);
  return (
    <Router>
      {userLocation && <Header />}
      <SideCard />
      <Routes>
        {userLocation ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu />} />
            <Route path="/search" element={<Search />} />
            <Route path="/help" element={<Help />} />
            <Route path="/offer" element={<UnderCondtruction />} />
            <Route path="/contact" element={<UnderCondtruction />} />
            <Route path="/signin" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </>
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Footer />
    </Router>
  );
};

export default App;
