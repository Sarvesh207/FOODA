import { useEffect, useState } from "react";
import { CORSPROXY } from "./constants";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState();

    useEffect(() => {
        getRestaurantInfo();
    }, [id]);

    async function getRestaurantInfo() {
        try {
            const url =
                CORSPROXY +
                encodeURIComponent(
                    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
                );
            const data = await fetch(url);

            const json = await data.json();
           
         
            const restaurantInfo = json?.data.cards[2].card.card.info
            
            const menuList =
                json?.data?.cards[4]["groupedCard"]?.cardGroupMap?.REGULAR
                    ?.cards;
           
            const modifiedData = {
                restaurantDetails: restaurantInfo,
                menu: menuList,
            };
            console.log(modifiedData)

            
    
            

            setRestaurant(modifiedData);
        } catch (error) {
            console.log(`Error while getting restaurant menu`, error)
        }
    }

    return restaurant;
};

export default useRestaurant;
