import React from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "../src/pages/Cart.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import RestaurantMenu from "./components/Home/RestaurantMenu/RestaurantMenu.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Search from "./pages/Search.jsx";
import "./CSS/index.css";
import SideCard from "./components/Cart/SideCard.jsx";
import UnderCondtruction from "./components/UnderCondtruction.jsx";
import Shimmer from "./components/Shimmer.jsx";

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
                        <Route
                            path="/restaurant/:id"
                            element={<RestaurantMenu />}
                        />
                        <Route path="/search" element={<Search />} />
                        <Route path="/help" element={<UnderCondtruction />} />
                        <Route path="/offer" element={<UnderCondtruction />} />
                        <Route path="/contact" element={<UnderCondtruction />} />
                        <Route path="/signin" element={<UnderCondtruction />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<Error />} />
                    </>
                ) : (
                    <Route path="/" element={<LandingPage />} />
                )}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
