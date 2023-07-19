import cardCartImage01 from "./card-cart-image01.png";
import "./card-cart.css";
import { FaHeart } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Cardcart = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

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
                    <div className="card-cart-wrap">
                      <div className="card-cart">
                        <div className="card-cart__head">
                          <figure className="card-cart__figure">
                            <img src={featuredItem.name} alt="Pant" />
                          </figure>
                          <a href="#" className="btn btn-fill">
                            Quick View
                          </a>
                        </div>

                        <div className="card-cart__body">
                          <a href="#" className="item-link">
                            Cras neque est, ultricies ac ligula
                          </a>
                          <span className="price">$18.00</span>
                        </div>

                        <div className="card-cart__foot">
                          <a href="#" className="btn btn-transparent">
                            Add to cart
                          </a>
                          <div className="card-cart__foot-bottom">
                            <a href="#" className="wishlist">
                              <FaHeart />
                              <span>Wishlist</span>
                            </a>
                            <a href="#" className="compare">
                              <BsArrowLeftRight />
                              <span>Compare</span>
                            </a>
                          </div>
                        </div>
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

export default Cardcart;
