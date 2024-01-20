import { useEffect, useState } from "react";
const useRestaurants = () => {
    const [restaurants, setRestarunts] = useState(null);
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to fetch data. Status: ${response.status}`
                );
            }
            const jsonData = await response.json();
            console.log(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
            const checkJsonData = async (jsonData) => {
                const restaurantsData = jsonData.data.cards.find(
                    (card) =>
                        card?.card?.card?.gridElements?.infoWithStyle
                            ?.restaurants !== undefined
                )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

             

                const bannerData = jsonData?.data?.cards?.find(
                    (card) =>
                        card?.card?.card?.gridElements?.infoWithStyle?.info !== undefined
                )?.card?.card?.gridElements?.infoWithStyle?.info;

                return [restaurantsData, bannerData];
            };

            const [ResData, BannerData] = await checkJsonData(jsonData);

            setRestarunts(ResData);
            setBanner(BannerData);
        } catch (error) {
            console.error(error.message);
        }
    }

    return [restaurants, banner];
};

export default useRestaurants;
