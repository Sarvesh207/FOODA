import React from "react";
import { TailSpin } from "react-loader-spinner";

const Shimmer = () => {
    return (
        <>
            <div
                className="h-[400px] w-[100vw] flex flex-col items-center justify-center bg-[#282C3F]"
            >
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
                     <h1 className="text-gray-300 font-palanquin text-3xl">Hunting down tasty treasures just around you...</h1>
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
