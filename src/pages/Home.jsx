import { useEffect, useState } from "react";
import RestruantCard from "../components/RestaurantCard.jsx";
import Shimmer from "../components/Shimmer.jsx";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useOnline from "../utils/useOnline.js";
import Carousal from "../components/Carousal.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { bannerList } from "../constant.js";
import FilterNavbar from "../components/FilterNavbar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setRestarunts } from "../utils/filterSlice.js";
import useRestaurants from "../Hooks/useRestaurants.js";
import SideCard from "../components/Cart/SideCard.jsx"

const Home = () => {
    const [restaurant, banner] = useRestaurants();

    const dispatch = useDispatch();
    dispatch(setRestarunts(restaurant));
    const restrauntsList = useSelector((store) => store.filter.restraunts);

    const isOnline = useOnline();

    if (!isOnline) {
        return (
            <div className="flex justify-center items-center ">
                <h1>🔴 Offline please check your internet connection</h1>
            </div>
        );
    }

    if (!restaurant) return null;

    return restaurant.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            <FilterNavbar />
            <hr className="mx-40" />
            <SideCard/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3 justify-items-center  lg:px-20 md:px10  px-15 ">
                {restrauntsList &&
                    restrauntsList.map((restaurant) => {
                        return (
                            <Link
                                to={"/restaurant/" + restaurant.info.id}
                                key={restaurant.info.id}
                            >
                                <RestruantCard {...restaurant.info} />
                            </Link>
                        );
                    })}
            </div>
        </>
    );
};

export default Home;


