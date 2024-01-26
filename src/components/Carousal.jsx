import React from "react";


const Carousal = ({ imageId }) => {
  return (
    <div className="  w-60">
      <img
        className=" "
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
        alt="Img"
      />
    </div>
  );
};

export default Carousal;
