import React from "react";
import CategoryImage01 from "../images/Catimg01.jpg";
import CategoryImage02 from "../images/Catimg02.jpg";
import CategoryImage03 from "../images/Catimg03.jpg";
import CategoryImage04 from "../images/Catimg04.jpg";
import CategoryImage05 from "../images/Catimg05.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./Item.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export const Index = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />
  };
  return (
    <>
    
      <div className="container">
        <div className="container-cart">
          <div className="header-cart">
            <h4>Category Slider</h4>
          </div>
        </div>
        <Slider {...settings}>
          <div className="slider-item">
            <div className="image-cart">
              <figure>
               <a href="">
                <img className="category-cart" src={CategoryImage01} />
               </a>
              </figure>
              <p className="image-text">Accessories
              <p>(5)</p></p>
            </div>
          </div>
          <div className="slider-item">
            <div className="image-cart">
              <figure>
              <a href="">
                <img className="category-cart" src={CategoryImage02} />
              </a>
              </figure>
              <p className="image-text">Clothing
              <p>(5)</p></p>
            </div>
          </div>
          <div className="slider-item">
            <div className="image-cart">
              <figure>
                <img className="category-cart" src={CategoryImage03} />
              </figure>
              <p className="image-text">Decor
              <p>(5)</p></p>
            </div>
          </div>
          <div className="slider-item">
            <div className="image-cart">
              <figure>
              <a href="">

                <img className="category-cart" src={CategoryImage04} />
              </a>
              </figure>
              <p className="image-text">Fashion
              <p>(5)</p></p>
            </div>
          </div>

          <div className="slider-item">
            <div className="image-cart">
              <figure>
              <a href="">
                <img className="category-cart" src={CategoryImage05} />
              </a>
              </figure>
              <p className="image-text">
              Hoodies   <p>(5)</p> 
            
              </p>
              
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Index;
