import React from 'react'
import Widgetimage01 from '../images/widget1.jpg';
import Widgetimage02 from '../images/widget2.jpg';
import Widgetimage03 from '../images/widget3.jpg';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Widget = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <IoIosArrowBack />,
        nextArrow: <IoIosArrowForward />
    };

    return (
        <div className="container-widget">
            <div className="widget-head">
                <h3>Latest News</h3>
            </div>
            <div className="btn-widget">
            </div>

            <div className="widget-cart">
                <div className="slider-item">
                    <Slider {...settings}>


                        <figure>
                            <img className="category-widget" src={Widgetimage01} />
                            <h3 className="widget-text">Grab 15% discount in this weekend
                            </h3>
                            <p className="widget-text1">September 30, 2021</p>
                        </figure>
                        <figure>
                            <img className="category-widget" src={Widgetimage02} />
                            <h3 className="widget-text">Have a sweetest day.
                            </h3>
                            <p className="widget-text1">September 30, 2021</p>
                        </figure>
                        <figure>
                            <img className="category-widget" src={Widgetimage03} />
                            <h3 className="widget-text">A day in Open Shop
                            </h3>
                            <p className="widget-text1">October-12, 2021</p>
                        </figure>

                    </Slider>
                </div>
            </div>
        </div>

    )
}

export default Widget
