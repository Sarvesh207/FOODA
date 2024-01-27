import React from "react";


const Carousal = ({ imageId }) => {
  return (
    <div className="w-40">
      <img
        className="w-full "
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
        alt="Img"
      />
    </div>
  );
};

export default Carousal;
