import React from "react";


const Carousal = ({ imageId }) => {
  return (
    <div className="w-40">
      <img
        className="w-full "
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`}
        alt="Img"
      />
    </div>
  );
};

export default Carousal;
