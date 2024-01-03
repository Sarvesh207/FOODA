import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState();
  

  

  useEffect(() => {
    getRestaurantInfo();
  }, [id]);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );

      const json = await data.json();

      const menuList =
        json?.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards;
      const itemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
      

      const menu = menuList.map((item) => {
        if (
          item.card.card["@type"] === itemCategory ||
          item.card.card["@type"] === NestedItemCategory
        ) {
          return item.card.card;
        }
      });

      const modifiedData = {
        info: json?.data?.cards[0]?.card?.card?.info,
        menu: menu.filter((value) => value !== undefined),
      };

      
      
      setRestaurant(modifiedData);

    } catch (error) {
      
    }
  }

  return restaurant;
};

export default useRestaurant;
