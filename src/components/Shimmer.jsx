import React from "react";
import { TailSpin } from "react-loader-spinner";

const Shimmer = () => {
    const loadingSentences = [
        "Hunting down tasty treasures just around you...",
        "Looking for great food near you...",
        "Searching for tasty eats nearby...",
        "Exploring delicious options around you...",
        "Hunting for fantastic local flavors...",
        "Scouting out great food in your vicinity...",
        "On the lookout for mouthwatering meals close by...",
        "Seeking out scrumptious dishes near you...",
        "In the mood for amazing eats around the corner...",
        "Finding delectable cuisine in your neighborhood...",
        "Craving something delicious just a stone's throw away...",
        "Discovering tasty treats near your location...",
    ];
    function getRandomSentence() {
        const randomIndex = Math.floor(Math.random() * loadingSentences.length);
        return loadingSentences[randomIndex];
    }

    
    const randomSentence = getRandomSentence();

    return (
        <>
            <div className="h-[400px] w-[100vw] flex flex-col items-center justify-center bg-[#282C3F]">
                <TailSpin
                    visible={true}
                    height="200"
                    width="100"
                    color="#ffff"
                    ariaLabel="tail-spin-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />

                <div>
                    <h1 className="text-gray-300 font-palanquin text-3xl">
                       {randomSentence}
                    </h1>
                </div>
            </div>
            <div className="restraunt-list grid lg:grid-cols-3 md:grid-col-2 first:">
                {Array(15)
                    .fill("")
                    .map((e, index) => (
                        <div
                            className="mx-auto bg-white rounded shadow-lg w-96 rounded-2xl  w-[300px]  p-5 m-10"
                            key={index}
                        >
                            <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"></div>
                            <div className="p-3 h-">
                                <div className="grid grid-cols-3 gap-4 mt-2">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-4 col-span-2 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-200 rounded  animate-pulse"></div>
                                    <div className="..."></div>
                                    <div className="col-span-2 ..."></div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Shimmer;
