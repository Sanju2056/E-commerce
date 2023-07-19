import React from "react";
import Bannerwhite01 from "../images/bannerwhite01.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner-cont">
        <div className="cont-wrap">
          <h2>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
          <button className="action-btn"> CALL TO ACTION</button>
        </div>
      </div>
        <div className="banner-white">
        <a href="#"> <img  src={Bannerwhite01} /></a>
        </div>
    </div>
  );
};

export default Banner;
