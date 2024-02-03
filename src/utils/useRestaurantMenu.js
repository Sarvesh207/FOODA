import { useEffect, useState } from "react";
import { CORSPROXY } from "./constants";

const useRestaurantMenu = (id) => {
    const [restaurantsMenu, setRestaurantsMenu] = useState([]);
    useEffect(() => {
        getRestaurantInfo();
    }, [id]);

    async function getRestaurantInfo() {
        const url =
            CORSPROXY +
            encodeURIComponent(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}`
            );
        const data = await fetch(url);
        const json = await data.json();

        setRestaurantsMenu(
            json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards
        );
    }

    return restaurantsMenu;
};

export default useRestaurantMenu;
