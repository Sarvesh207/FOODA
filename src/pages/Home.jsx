import React from "react";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useRestaurants from "../Hooks/useRestaurants.js";
import SideCard from "../components/Cart/SideCard.jsx";
import FilterNavbar from "../components/FilterNavbar.jsx";
import RestruantCard from "../components/RestaurantCard.jsx";
import Shimmer from "../components/Shimmer.jsx";
import { setRestarunts } from "../utils/filterSlice.js";
import useOnline from "../utils/useOnline.js";
import Carousal from "../components/Carousal.jsx";
import { useRef } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import "../CSS/index.css";

const Home = () => {
    const [restaurant, banner] = useRestaurants();
    console.log(banner);

    const sliderRef = useRef();
    const scrollHandler = (scrollOffset) => {
        const newScrollLeft = sliderRef.current.scrollLeft + scrollOffset;
        sliderRef.current.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
        });
    };
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
            {" "}
            <div className="mt-[100px]">
                <div
                    className="mx-auto lg:px-14 lg:my-10 md:px-16 my-3 md:my-5 w-full pt-3"
                    ref={sliderRef}
                >
                    <div className="conatainer w-full lg:pb-2 md:pb-2 pb-2 pt-2">
                        {banner && (
                            <span
                                className="w-full text-left lg:pb-6 font-bold  md:pb-6  mt-4 text-gray-600 g:text-2xl md:text-2xl text-xl tracking-tight"
                                style={{ wordSpacing: 3 }}
                            >
                                What's on your mind?
                            </span>
                        )}
                    </div>
                    <div className="conatainer cursor-pointer">
                        <div className="sliderWrapper flex items-center  ">
                           

                            <div className="imageList flex gap-10 md:pt-3 pt-2">
                                {banner.map((image) => (
                                    <Carousal
                                        imageId={image?.imageId}
                                        key={image.imageId}
                                    />
                                ))}
                            </div>
                            
                        </div>
                    </div>

                    <hr className="max-w-[1200px] mx-auto text-gray-300"/>
                </div>

                <FilterNavbar />
            </div>
            <hr className="mx-40" />
            <SideCard />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3 justify-items-center  lg:px-20 md:px10  px-15 ">
                {restrauntsList &&
                    restrauntsList.map((restaurant) => {
                        return (
                            <Link
                                to={`/restaurant/${restaurant.info.id}`}
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
