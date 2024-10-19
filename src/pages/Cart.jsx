import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "../components/Cart/FoodItem.jsx";
import IsEmpty from "../components/Cart/IsEmpty.jsx";
import Location from "../components/Cart/Location.jsx";
import { clearCart } from "../utils/cartSlice.js";
import SideCard from "../components/Cart/SideCard.jsx";
import { toggleLocation } from "../utils/toggleLocationSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleClick = () => {
    dispatch(toggleLocation());
  };
  return (
    <div className="bg-slate-200 mt-16 mx-auto flex justify-center   p-6">
      {/* Left Section (Delivery Address and Payment) */}
      <div className="flex-1 bg-white p-10 shadow-lg rounded-lg">
        {/* Delivery Address Section */}
        <div className="mb-10">
          <h1 className="text-sky-950 font-bold text-xl mb-2">
            Add a Delivery Address
          </h1>
          <h2 className="text-gray-500 font-semibold text-sm">
            You seem to be in a new location
          </h2>
        </div>

        {/* Address Box */}
        <div className="border-dotted border-2 hover:shadow-xl border-slate-300 p-6 hover:scale-105 transition-all duration-200 rounded-lg flex flex-col items-center">
          <h1 className="text-sky-950 font-semibold text-sm mb-2">
            Add New Address
          </h1>
          <p className="text-slate-500 text-xs text-center mb-4">
            15/11, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka
            560001, India
          </p>
          <button
            className="text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
            onClick={handleClick}
          >
            Add New
          </button>
        </div>

        {/* Payment Section */}
        <div className="mt-10">
          <h1 className="text-slate-500 font-bold text-lg">Payment</h1>
          <div className="bg-gray-100 p-4 mt-4 rounded-lg">
            <p className="text-gray-500">
              Please select your preferred payment method.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section (Cart Items) */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-8 ml-8">
        {cartItems.length !== 0 ? (
          <div>
            <h1 className="text-sky-950 font-bold text-xl text-center mb-6">
              Your Items
            </h1>
            <FoodItem />
          </div>
        ) : (
          <IsEmpty />
        )}
      </div>
    </div>
  );
};

export default Cart;
