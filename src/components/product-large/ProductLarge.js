import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import cardCartImage01 from "../card-cart/card-cart-image01.png";
import { FaHeart } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <IoIosArrowForward />,
  prevArrow: <IoIosArrowBack />,
};

const ProductLarge = () => {
  const productsLarge = [
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
    {
      name: cardCartImage01,
    },
  ];
  
  return (
    <div className="card-slider">
      <Slider {...settings}>
        {productsLarge.map((productLarge) => (
          <div className="card-slider__item">
            <div className="card-cart-wrap">
              <div className="card-cart">
                <div className="card-cart__head">
                  <figure className="card-cart__figure">
                    <img src={productLarge.name} alt="Pant" />
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
      </Slider>
    </div>
  );
};

export default ProductLarge;
