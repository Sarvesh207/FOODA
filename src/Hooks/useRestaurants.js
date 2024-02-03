import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CORSPROXY } from "../utils/constants";
const useRestaurants = () => {
    const [restaurants, setRestarunts] = useState(null);
    const [banner, setBanner] = useState(null);

    const userLocation = useSelector((store) => store.location.userLocation);
    console.log(location);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        try {
            const { lat, lng } = userLocation;
            const url =
                CORSPROXY +
                encodeURIComponent(
                    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING`
                );
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(
                    `Failed to fetch data. Status: ${response.status}`
                );
            }
            const jsonData = await response.json();
            console.log(
                jsonData?.data?.cards[0]?.card?.card?.gridElements
                    ?.infoWithStyle?.info
            );
            const checkJsonData = async (jsonData) => {
                const restaurantsData = jsonData.data.cards.find(
                    (card) =>
                        card?.card?.card?.gridElements?.infoWithStyle
                            ?.restaurants !== undefined
                )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                const bannerData = jsonData?.data?.cards?.find(
                    (card) =>
                        card?.card?.card?.gridElements?.infoWithStyle?.info !==
                        undefined
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
