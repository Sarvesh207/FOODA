import React, { useEffect, useState } from "react";
import { getLocation } from "../../utils/locationSlice";
import { useDispatch } from "react-redux";
import { RiFocus3Line } from "react-icons/ri";
import { CORSPROXY } from "../../utils/constants";

const Location = () => {
    const [query, setQuery] = useState("");
    const [locations, setLocations] = useState([]);
    const dispatch = useDispatch();

    const getLocationsSuggestions = async () => {
        const url = CORSPROXY+encodeURIComponent(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${query}&types=`)
        const res = await fetch(

            url
        );
        const data = await res.json();

        setLocations(data?.data);
    };
    useEffect(() => {
        let intervalId = setTimeout(() => {
            getLocationsSuggestions();
        }, 300);

        return () => {
            clearTimeout(intervalId);
        };
    }, [query]);

    const handleLocationChange = () => {};

    const fetchAddress = async (place_id) => {
        try {
            const url = CORSPROXY+encodeURIComponent( `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${place_id}`)
            const res = await fetch(
               url
            );
            if (!res.ok) {
                const error = res.status;
                throw new Error(error);
            } else {
                const { data } = await res.json();

                dispatch(
                    getLocation({
                        city: data[0]?.address_components[0]?.short_name,
                        lat: data[0]?.geometry?.location?.lat,
                        lng: data[0]?.geometry?.location?.lng,
                        address: data[0]?.formatted_address,
                    })
                );
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className=" border-2 rounded-sm px-4 py-2 ">
                <input
                    className="w-60 outline-none px-2"
                    type="text"
                    placeholder="Search for area, street name.."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="border-2  h-50 rounded-sm  px-4 py-2  mt-5">
                <button>
                    <div className="flex items-center gap-3">
                        {" "}
                        <span className="text-xl text-gray-400">
                            <RiFocus3Line />
                        </span>{" "}
                        <p className="hover:text-[#fc8019]">
                            Get Current Location
                        </p>
                    </div>
                    <p className="text-sm text-gray-500 text-left ml-8 font-thin ">
                        using GPS
                    </p>
                </button>
            </div>

            <div>
                <ul>
                    {locations &&
                        locations.map((location) => {
                            return (
                                <li
                                    className="mt-5 pb-4 cursor-pointer border-dotted border-b-2  flex hover:bg-slate-200 rounded-md px-3 py-2"
                                    key={location?.place_id}
                                    onClick={() =>
                                        fetchAddress(location?.place_id)
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5 mr-2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>

                                    <div>
                                        <h3 className="text-gray-700 text-sm">
                                            {
                                                location?.structured_formatting
                                                    ?.main_text
                                            }
                                        </h3>

                                        <p className="text-xs font-thin text-gray-500">
                                            {
                                                location?.structured_formatting
                                                    ?.secondary_text
                                            }
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default Location;
