import React from "react";
import { Link } from "react-router-dom";

const IsEmpty = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-4">
      <img
        className=""
        src="./emptyCart.png"
        alt="emptycard_image"
      />
      <h1 className="text-black font-semibold">Your cart is empty</h1>
      <p className="text-gray-400 mb-3">
        You can go to home page to view more restaurants
      </p>
      <Link
        to="/"
        className="font-medium rounded-lg text-lg px-4 text-white bg-[#fc8019]  mx-3 border  py-2 shadow-md hover:bg-[#fdaa65]"
      >
        SEE RESTAURANTS NEAR YOU
      </Link>
    </div>
  );
};

export default IsEmpty;
