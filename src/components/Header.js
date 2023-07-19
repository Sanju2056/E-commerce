import React, { useReducer, useState } from 'react'
import user from '../components/images/user.jpg'
import jordan from '../components/images/jordan.jpg'
import nike from '../components/images/nike.png'
import { IoIosArrowDown, IoLogoSnapchat, IoIosArrowRoundForward, IoLogoSkype, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter, IoLogoWhatsapp, IoIosCall, IoMdSearch, IoIosUnlock, IoIosStarOutline, IoIosMenu, IoLogoTwitch } from "react-icons/io";
import './components.css'
import Widget from './Global/Widget';
import open from './images/open.png';
function Header() {
    const [toggleForm, setToggleForm] = useState(false)
    return (
        <div className="main-page">
            <div className="main-header">
                <div className="title">
                    Welcome to Open Shop
                </div>
                <div className="logos">
                    <IoLogoTwitch className="logos-logo" />
                    <IoLogoTwitter className="logos-logo" />
                    <IoLogoWhatsapp className="logos-logo" />
                    <IoLogoYoutube className="logos-logo" />
                    <IoLogoFacebook className="logos-logo" />
                    <IoLogoSkype className="logos-logo" />
                    {/* <IoLogoSnapchat className="logos-logo" /> */}
                </div>
            </div>
            <div className="main-container">
                <div className="main-container-top-header">
                    <div className="main-container-top-header-title">
                        <img src={open} style={{height:60,width:180,marginLeft:20,paddingBottom:10}}/>
                    </div>
                    <div className="main-container-top-header-title-options">
                        <button className="button-options">Home</button>
                        <button className="button-options">Blog</button>
                        <button className="button-options">Contact Us</button>
                        <button className="button-options">Shop</button>
                        <button className="button-options">Upgrade to Pro</button>
                    </div>
                    <div className="main-container-top-header-title-second">
                        <div className="cellphone">
                            <IoIosCall />
                        </div>
                        <div className="cellphone-info">
                            <div>Call To +1800090098</div>
                            <div>Email : Info@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="main-container-bottom-header">
                    <div className="main-container-bottom-header-catogeries">
                        <div className="Category" onClick={() => {setToggleForm(int => !int) }} >
                            <IoIosMenu className="font" />
                            <p className="titles">Category</p>
                            <IoIosArrowDown className="font1" />
                        </div>
                        <div className="Option" style={{ display: !toggleForm ? 'none' : "block" }}>
                            <button className="Option1">Accessories</button>
                            <button className="Option1">Clothing</button>
                            <button className="Option1">Decor</button>
                            <button className="Option1">Fashion</button>
                            <button className="Option1">Hoodies</button>
                            <button className="Option1">Music</button>
                            <button className="Option1">Most Popular</button>
                        </div>
                        <div className="main-slider">
                            <div className="main-slider-1">
                                <b className="main-slider-1-heading">About Us</b><br />
                                <img src={user} className="slider-image" />
                                <p>Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                <p>Know more</p>
                            </div>
                        </div>
                        <Widget />
                    </div>
                    <div className="main-container-bottom-header-search">
                        <input type="text" placeholder="Search.............." name="search" className="search" /><div className="search-icon"><IoMdSearch /></div>
                    </div>
                    <div className="main-container-bottom-header-whistlist">
                        <button className="whistlist-icons"><IoIosUnlock /></button>
                        <button className="whistlist-icons"><IoIosStarOutline /></button>
                        <button className="whistlist-button"><IoIosStarOutline /> | Help</button>
                    </div>
                </div>
            </div>
            <div className="main-body">
                <div className="main-slider1">
                    <div className="main-slider-2">
                        {/* <b className="main-slider-1-heading">About Us</b><br />
                        <img src={user} className="slider-image" />
                        <p>Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        <p>Know more</p> */}
                    </div>
                </div>
                <div className="main-product">
                    <div className="main-product-container">
                        <img src={jordan} className="main-product-image" />
                        <div className="main-product-floater">
                            <p><img src={nike} className="main-product-floater-image" /> </p>
                            <p className="main-product-floater-text1" >International Footware</p>
                            <div className="main-product-floater-text2">Explore <IoIosArrowRoundForward className="main-product-floater-text2-icon" /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
