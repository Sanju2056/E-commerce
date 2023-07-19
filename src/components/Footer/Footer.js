import "./footer.css";
import payment from "./payment.png";
import belt from "./belt.png";
import watch from "./watch.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top__inner">
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Downloads</a>
                </li>
                <li>
                  <a href="#">Addresses</a>
                </li>
                <li>
                  <a href="#">Account details</a>
                </li>
                <li>
                  <a href="#">Lost password</a>
                </li>
              </ul>
            </div>
            <div className="footer-logos">
              <figure className="figure">
                <a href="#"><img src={payment} alt="Payment" /></a>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-main__row">
            <div className="footer-main__col">
              <div className="desc">
                <h2>Open Shop</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="footer-main__col">
              <div className="tag-clouds">
                <h4>Tag Clouds</h4>
                <ul>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Audio</a>
                  </li>
                  <li>
                    <a href="#">Clothing</a>
                  </li>
                  <li>
                    <a href="#">Decor</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Hoodies</a>
                  </li>
                  <li>
                    <a href="#">Most Popular</a>
                  </li>
                  <li>
                    <a href="#">Music</a>
                  </li>
                  <li>
                    <a href="#">New Arrivals</a>
                  </li>
                  <li>
                    <a href="#">Sale Products</a>
                  </li>
                  <li>
                    <a href="#">Tshirts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-main__col">
              <div className="sale-products">
                <h4>Sale Products</h4>
                <div className="card-product">
                  <figure className="card-product__figure">
                    <img src={belt} alt="Belt" />
                  </figure>
                  <div className="card-product__content">
                    <a href="#" className="item-link">
                      Etiam ut metus ut leo...
                    </a>
                    <span className="price">$18.00</span>
                  </div>
                </div>
                <div className="card-product">
                  <figure className="card-product__figure">
                    <img src={watch} alt="Watch" />
                  </figure>
                  <div className="card-product__content">
                    <a href="#" className="item-link">
                      Nullam faucibus turpis...
                    </a>
                    <span className="price">$18.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-main__col">
              <div className="contact-details">
                <h4>Contact Details</h4>
                <ul>
                  <li>Address: 3548 Columbia Mine Road,</li>
                  <li>Wheeling, West Virginia,</li>
                  <li>26003</li>
                  <li>Contact : 304-559-3023</li>
                  <li>304-650-2694</li>
                  <li>E-mail : shopnow@open2.com</li>
                  <li>contact@open.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
          <div className="container">
              <div className="copyright">
                  <p>&copy; 2021 Powered by Medicos</p>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer;
