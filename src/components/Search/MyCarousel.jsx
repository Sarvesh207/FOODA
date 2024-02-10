import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { CORSPROXY } from "../../utils/constants";
import ImageCard from "./ImageCard";

const MyCarousel = () => {
    const [imageList, setImageList] = useState(null);

    

    const getImageList = async () => {
        try {
            const url =
                CORSPROXY +
                encodeURIComponent(
                    `https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.9715987&lng=77.5945627`
                );
            const res = await fetch(url);

            const data = await res.json();

            const list = data?.data?.cards[1]?.card?.card?.imageGridCards?.info;
            setImageList(list);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getImageList();
    }, []);

    return !imageList ? (
        <div className=" h-[100vh] flex items-center justify-center text-blue-950">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#123456"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    ) : (
        <div className=" sm:w-[500px] md:w-[800px] lg:w-[1200px] mt-32 sm:px-5 lg:mx-auto ">
            <h1 className="text-gray-800 font-bold sm:text-sm lg:text-2xl text-center">
                Pupular Cousins
            </h1>
            <div className="flex gap-5 justify-between overflow-hidden gap-3  ">
                {imageList &&
                    imageList.map((img) => (
                        <ImageCard key={img?.id} imgId={img?.imageId} />
                    ))}
            </div>
        </div>
    );
};

export default MyCarousel;
