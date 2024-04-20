import React from "react";
import { useParams } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../../../utils/cartSlice.js";
import useRestaurant from "../../../utils/useRestaurant.js";

import RestauranrInfo from "./RestauranrInfo.jsx";
import RestaurantMenuList from "./RestaurantMenuList.jsx";

const RestaurantMenu = () => {
  const params = useParams();
  const id = params.id;

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <div className=" h-[100vh] flex items-center justify-center text-blue-950">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#123456"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  ) : (
    <div className="menu flex justify-center items-center  flex-col bg-white py-10">
      <p className="text-gray-600 cursor-pointer my-10  ml-5">
        <Link className="cursor-pointer" to="/">
          Home
        </Link>
        / {restaurant.name}
      </p>

      <RestauranrInfo {...restaurant?.restaurantDetails} />
      <RestaurantMenuList menu={restaurant?.menu} />
    </div>
  );
};

export default RestaurantMenu;
