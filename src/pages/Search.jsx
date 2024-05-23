import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import MyCarousel from "../components/Search/MyCarousel";
import { Link, Outlet, useParams } from "react-router-dom";
import Suggestions from "../components/Search/Suggestions";
import { CORSPROXY } from "../utils/constants";
import { useSelector } from "react-redux";
import DishCard from "../components/DishCard";
import Container from "../components/container/Container";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestionList, setSuggetionList] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const { lat, lng } = useSelector((store) => store.location.userLocation);
  console.log(fetchedData);

  const getSuggestions = async () => {
    const url = `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${lng}&str=${query}&trackingId=undefined`;

    const data = await fetch(url);
    const json = await data.json();

    setSuggetionList(json?.data?.suggestions);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      getSuggestions();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const getQueryData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${queryString}&trackingId=null&submitAction=SUGGESTION`
    );
    const data = await response.json();
    console.log(data);
  };

  const handleSuggestionClick = async (suggestionText) => {
    setQuery(suggestionText); // Update the query state to reflect the clicked suggestion
    const url = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${suggestionText}&trackingId=null&submitAction=SUGGESTION`;
    const response = await fetch(url);
    const data = await response.json();
    setFetchedData(data.data.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);

    console.log(data.data.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
    // Handle the data as needed
  };

  return (
    <div className="">
      <MyCarousel />

      <div className="flex justify-start flex-col mb-40 bg-white h-full">
        <form
          action=""
          className="border sticky sm:mx-10 md:mx-40 lg:mx-50 xl:mx-60 border-gray-400 rounded-lg px-4 flex justify-between "
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" w-96  px-4 pl-6 py-2 border-transparent text-bold outline-none"
            placeholder="Search for restaurants and food"
          />

          <button className="px-2 py-2">
            <span>
              <BiSearch />
            </span>
          </button>
        </form>

        <div className="">
          {suggestionList &&
            suggestionList.map((suggestion) => (
              <div
                key={suggestion?.text}
                onClick={() => handleSuggestionClick(suggestion?.text)}
              >
                <Suggestions suggestion={suggestion} />
              </div>
            ))}
        </div>

        <Container>
          <DishCard />
        </Container>
      </div>
    </div>
  );
};

export default Search;
