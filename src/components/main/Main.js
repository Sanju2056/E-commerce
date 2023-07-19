import React, { useReducer, useState } from 'react'
import Feature from "../Global/Feature";
import Cardcart from "../card-cart/Cardcart";
import Cardproduct from "../card-product/Cardproduct";
import Index from "../Global/Index";
import Widget from "../Global/Widget";
import Banner from "../Global/Banner";
import ProductLarge from "../product-large/ProductLarge";
import "./main.css";
import Hero from "../Hero/Hero"
import { IoIosArrowDown, IoLogoSnapchat, IoIosArrowRoundForward, IoLogoSkype, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter, IoLogoWhatsapp, IoIosCall, IoMdSearch, IoIosUnlock, IoIosStarOutline, IoIosMenu, IoLogoTwitch } from "react-icons/io";



const Main = () => {
  const [toggleForm, setToggleForm] = useState(false)
  return (
    <div className="main">
      <div className="main-row">
        <div className="main-col main-col-left">
          {/* <Widget /> */}
        </div>
        <div className="main-col main-col-right">
          <Feature />
          <Cardcart />
          <Index />
          <ProductLarge />
          <Banner />
          <Cardproduct />
        </div>
      </div>
    </div>
  );
};

export default Main;
