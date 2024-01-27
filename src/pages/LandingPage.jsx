import React from 'react'
import { useEffect, useRef, useState } from "react"
import useSearchLocation from "../Hooks/useSearchLocation";
import { ADDRESS_API} from "../utils/constants";
import { useDispatch } from "react-redux";
import { getLocation } from "../utils/locationSlice";
import { CiLocationOn } from "react-icons/ci";
import { COMPANY_LOGO } from '../constant';
import { LANDING_PAGE_IMAGE } from '../constant';

const LandingPage = () => {
    const SearchText = useRef(null);
    const [searchData, setSearchData] = useState([]);
    const [ChangingText, setChangingText] = useState("Unexpected guests?")
    const dispatch = useDispatch();

    const handleSearch = (searchQuery) => {
        console.log(searchQuery)
        useSearchLocation(searchQuery, setSearchData);
    }

    const fetchAddress = async (place_id) => {
        try {
            const res = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${place_id}`);
            if (!res.ok) {
                const error = res.status;
                throw new Error(error);
            }
            else {
                const { data } = await res.json();
                dispatch(
                    getLocation({
                        city : data[0]?.address_components[0]?.short_name,
                        lat: data[0]?.geometry?.location?.lat,
                        lng: data[0]?.geometry?.location?.lng,
                        address: data[0]?.formatted_address
                    })
                )
                window.location.reload();
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

       const timer =  setInterval(() => {
            const texts = [
                "Cooking gone wrong?",
                "Game night?",
                "Hungry?",
                "Movie marathon?",
                "Late night at office?",
                "Unexpected guests?",
              ];

              const randomIndex = Math.floor(Math.random() * texts.length);
              setChangingText(texts[randomIndex]);
        }, 2000)

        return () => {
            clearInterval(timer);
        }

    }, [])

    return (
            <div className="flex sm:flex-col md:flex-row lg:flex-row lg:items-center flex-col h-screen bg-[#ffff]">
                <div className=" md:max-w-[600px]  lg:px-5 lg:w-[600px] 2xl:px-10 py-32 relative">
                    
                    <div className="2xl:w-4/5 ">
                        <div className="flex items-center gap-3 text-white lg:text-black text-shadow">
                            <img src={COMPANY_LOGO} alt="img" className="h-[60px] rounded-full border border-black" />
                           
                        </div>
                        <div className="mt-10 mb-4 text-shadow">
                            <h2 className="font-ProximaNovaSemiBold text-3xl text-white lg:text-[#282c3f]">{ChangingText}</h2>
                            <p className="font-ProximaNovaThin text-2xl text-white lg:text-[#686b78] mt-1">Order food from favourite restaurants near you.</p>
                        </div>
                        <div className="mt-7 relative">
                            <input type="text" placeholder='Enter your delivery location' ref={SearchText} onChange={() => handleSearch(SearchText.current?.value)} className="h-[58px] border border-gray-400 w-full px-5 font-ProximaNovaMed text-lg outline-none rounded-lg text-[#282c3f]" />
                            <ul className='absolute top-[58px] left-0 right-0 border border-t-0 border-[#d4d5d9] shadow-lg w-full bg-white text-[#535665] z-10'>
                                {
                                    searchData && searchData?.map((location) => (
                                        <li
                                        className="mt-5 pb-4 border-dotted border-b-2  flex hover:bg-slate-200 rounded-md px-3 py-2 cursor-pointer"
                                        key={location?.place_id}  onClick={() => fetchAddress(location?.place_id)}
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
                                          <h3 className="text-black text-sm">
                                            {location?.structured_formatting?.main_text}
                                          </h3>
                      
                                          <p className="text-xs font-thin text-gray-500">
                                            {location?.structured_formatting?.secondary_text}
                                          </p>
                                        </div>
                                      </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="text-shadow">
                            <p className="font-ProximaNovaThin text-[15px] text-white lg:text-gray-600 font-bold mt-7 mb-2">Find your location to sign up for daily menus, rewards, and mobile ordering.</p>
                            <div className="lg:text-[#686b78] text-white text-base font-ProximaNovaSemiBold flex flex-wrap">
                                <span className="mr-2">Ahmedabad</span>
                                <span className="mr-2 lg:text-[#93959f]">Bangalore</span>
                                <span className="mr-2">Chennai</span>
                                <span className="mr-2 lg:text-[#93959f]">Delhi</span>
                                <span className="mr-2">Gurgaon</span>
                                <span className="mr-2 lg:text-[#93959f]">Hyderabad</span>
                                <span className="mr-2">Kolkata</span>
                                <span className="mr-2 lg:text-[#93959f]">Mumbai</span>
                                <span className="mr-2">Pune</span>
                                <span className="mr-2 lg:text-[#93959f]">& more.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:max-w-[900px] md:max-w-[600px]'> 
                    <img src={LANDING_PAGE_IMAGE} className='w-full' alt="" />
                </div>
            </div>
    )
}

export default LandingPage