import ImageCard from "./ImageCard";
import React, { useEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner'

const MyCarousel = () => {
    const [imageList, setImageList] = useState(null);

    const getImageList = async () => {
        try {
            const res = await fetch(
                "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.9715987&lng=77.5945627"
            );

            const data = await res.json();
            const list = data?.data?.cards[1]?.card?.card?.imageGridCards?.info;
            setImageList(list);
            console.log(data?.data?.cards[1]?.card?.card?.imageGridCards?.info);
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
