import { useEffect, useState } from "react";
import { CORSPROXY } from "./constants";

const useRestaurantMenu = (id) => {
    const [restaurantsInfo, setRestaurantsInfo] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    }, [id]);

    async function getRestaurantInfo() {
        try {
            const url =
                CORSPROXY +
                encodeURIComponent(
                    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}`
                );
            const data = await fetch(url);
            const json = await data.json();
            console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[1]?.card?.card?.itemCards );

            setRestaurantsInfo(
                json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[1]?.card?.card?.itemCards || []
            );
        } catch (error) {
            console.log(`Error while featching restaurant menu ${error}`);
        }
    }

    
};

export default useRestaurantMenu;
