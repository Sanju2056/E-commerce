import React from "react";
import "./Item.css";
import { GiCommercialAirplane } from "react-icons/gi";
import { BiAnchor } from "react-icons/bi";
import { GiCutDiamond } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";

export const Feature = () => {
  return (
    <div className="container">
      <div className="shipping">
        <div className="ftr-icon">
          <GiCommercialAirplane />
        </div>

        <div className="ftr-content">
          <h3>Free Shipping</h3>
          <p>On all order over</p>
        </div>

        <div className="ftr-icon">
          <BiAnchor />
        </div>

        <div className="ftr-content">
          <h3>Join Risk Free</h3>
          <p>30 days refund</p>
        </div>

        <div className="ftr-icon">
          <GiCutDiamond />
        </div>

        <div className="ftr-content">
          <h3>Support 24/7</h3>
          <p>Online 24 hours</p>
        </div>

        <div className="ftr-icon">
          <FaShieldAlt />
        </div>

        <div className="ftr-content">
          <h3>100% Safe</h3>
          <p>Secure shopping</p>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default Feature;
