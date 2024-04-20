import { AiFillStar } from "react-icons/ai";
import { IMG_CDN_URL } from "../constant.js";

import React from "react";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  costForTwo,
  avgRating,
  sla,
}) => {
  return (
    <div className="w-[273px]  border mb-36  rounded-md my-10  bg-white group-hover:opacity-100 lg:h-64 hover:shadow-2xl hover:lg:h-64 transition duration-300 ease-in-out hover:scale-110 hover:border-gray-200">
      <div className="overflow-hidden w-[273px] h-[182px] object-cover rounded-lg ">
        <img className="w-full " src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="">
        <h2
          className=" text-[18px]  px-3 font-[700] text-gray-600  font-ProximaNova 
        "
        >
          {name.length > 20 ? `${name.substring(0, 20)}...` : name}
        </h2>

        <div className="flex items-center  px-3 justify-start gap-1 font-[700] text-gray-600 text-[16px] ">
          <div className="flex justify-center items-center w-fit gap-1">
            <div className=" bg-green-600 text-white w-fit rounded-full   p-[3px]">
              {" "}
              <AiFillStar className=" text-sm  " />
            </div>
            <span>{avgRating}</span>
          </div>

          <span>.{sla?.slaString}</span>
        </div>
        <p className="text-[16px] font-200 px-3 text-gray-600 w-fit overflow-hidden nowrap   ">
          {cuisines.join(", ").length > 30
            ? `${cuisines.join(", ").substring(0, 30)}...`
            : cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};
export default RestaurantCard;
