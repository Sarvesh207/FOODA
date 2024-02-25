import React from "react";
import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";

const RestaurantMenuList = ({ menu }) => {
  console.log(menu)
  return (
    <div>
      {menu.map((item, index) => (
        <div key={index}>
          {!item?.card?.card?.itemcard && <RestaurantItemCategory itemCategory={item?.card?.card} />}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuList;
