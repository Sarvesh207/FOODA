import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const useRestaurants = () => {
  const [restaurants, setRestarunts] = useState(null);
  const [banner, setBanner] = useState(null);

  const userLocation = useSelector((store) => store.location.userLocation);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {

    if(!userLocation) return 
    try {
      const { lat, lng } = userLocation;
      const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      const jsonData = await response.json();

      const checkJsonData = (jsonData) => {
        const restaurantsData = jsonData.data.cards.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants !==
            undefined
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const bannerData = jsonData?.data?.cards?.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.info !== undefined
        )?.card?.card?.gridElements?.infoWithStyle?.info;

        return [restaurantsData, bannerData];
      };

      const [ResData, BannerData] =  checkJsonData(jsonData);
      console.log(ResData, BannerData)

      setRestarunts(ResData);
      setBanner(BannerData);
    } catch (error) {
      console.error(error.message);
    }
  }

  return [restaurants, banner];
};

export default useRestaurants;
