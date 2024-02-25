/* eslint-disable react/prop-types */
import React, { useState } from "react";
import MenuCard from "./MenuCard";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantItemCategory = ({ itemCategory }) => {
    console.log(itemCategory);
    const [isVisible, setIsVisible] = useState(true);
    const toggleView = () => {
        setIsVisible(!isVisible);
    };

    const trimCategoryName = (str) => {
        if (!str) return;
        let endIdx = str.indexOf("(");

        if (endIdx !== -1) {
            const requiredStr = str.substring(0, endIdx).trim();
            return requiredStr;
        } else {
            return str;
        }
    };

    if(!itemCategory?.title) return

    return (
        <div className="">
            <div className="flex justify-between items-center mx-auto  max-w-[950px]    ">
                <div>
                    <h1 className="text-gray-600 text-lg font-bold  ">
                        {trimCategoryName(itemCategory?.title)}
                        <span>({itemCategory?.itemCards?.length})</span>
                    </h1>
                </div>
                <div className="ml-8">
                    {isVisible ? (
                        <SlArrowUp
                            onClick={toggleView}
                            className="cursor-pointer font-bold text-lg"
                        />
                    ) : (
                        <SlArrowDown
                            onClick={toggleView}
                            className="cursor-pointer font-bold text-lg"
                        />
                    )}
                    <hr />
                </div>
                
            </div>

            {isVisible && (
                <div className="overflow-hidden">
                    {itemCategory?.itemCards &&
                        itemCategory.itemCards.map((item) => {
                            return (
                                <MenuCard
                                    key={item?.card?.info?.id}
                                    item={item?.card?.info}
                                />
                            );
                        })}
                </div>
            )}
        </div>
    );
};

export default RestaurantItemCategory;
