import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import MyCarousel from '../components/Search/MyCarousel'
import { Link, Outlet } from "react-router-dom";
import Suggestions from "../components/Search/Suggestions";
import { CORSPROXY } from "../utils/constants";

const Search = () => {
    const [query, setQuery] = useState("");
    const [suggestionList, setSuggetionList] = useState([]);

    const getSuggestions = async () => {
        const url = CORSPROXY+encodeURIComponent(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9715987&lng=77.5945627&str=${query}&trackingId=undefined`)
        const data = await fetch(
            url
        );
        const json = await data.json();
        console.log(json?.data?.suggestions);
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

    return (
        <div className="">
            <MyCarousel/>
            
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

                <Link to="/search-item">
                    <div className="">
                        {suggestionList &&
                            suggestionList.map((suggestion) => (
                                <Suggestions suggestion={suggestion} />
                            ))}
                    </div>
                </Link>
                <Outlet />
            </div>
        </div>
    );
};

export default Search;
