import React from "react";

const ImageCard = ({ imgId }) => {
    return (
        <div className="w-32">
            <img
                className="w-full"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${imgId}`}
                alt=""
            />
        </div>
    );
};

export default ImageCard;
