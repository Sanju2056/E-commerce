import React from "react";
import './Hero.css';
import user from '../images/user.png'

function Hero() {
    return (
        <div className="main-slider-1">
            <b className="main-slider-1-heading">About Us</b><br />
            <img src={user} className="slider-image" />
            <p>Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <p>Know more</p>
        </div>

    )
}

export default Hero

