import React from "react";
import cardCartImage01 from "../card-cart/card-cart-image01.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "./card-product.css";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <IoIosArrowForward />,
  prevArrow: <IoIosArrowBack />,
};

const Cardproduct = () => {

  const featuredItems = [
    {
      name: cardCartImage01,
    },
    {
      name: cardCartImage01,
    },
    {
      name: cardCartImage01,
    },
    {
      name: cardCartImage01,
    },
  ];

  const cardGroups = [1, 2];
  const cardGroupsWrap = [1, 2];
  
  return (
    <div className="card-slider">
      <Slider {...settings}>
        {cardGroupsWrap.map(() => (
          <div className="card-group-wrap">
            {cardGroups.map((cardGroup) => (
              <div className="card-group">
                {featuredItems.map((featuredItem) => (
                  <div className="card-slider__item">
                    <div className="card-product">
                      <figure className="card-product__figure">
                        <img src={cardCartImage01} alt="Pant" />
                      </figure>
                      <div className="card-product__content">
                        <a href="#" className="item-link">
                          Cras neque est, ultricies ac ligula
                        </a>
                        <span className="price">$18.00</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cardproduct;
