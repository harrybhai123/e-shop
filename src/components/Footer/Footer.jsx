import { Link } from "react-router-dom";
import "./Footer.scss"
import React, { useState } from 'react'
const Footer = () => {
  const [message, setMessage] = useState("")

  const handleClick = () => {
    if (document.getElementById("email").value === "") {
      setMessage("")
    } else {
      setMessage("Thank you for your mail")
      document.getElementById("email").value = ""
    }
  }


  return (
    <div className="footer">
      <div className="top">
        <div className="item footer1">
          <h1>Categories</h1>
          <span> <Link to="/products/1">Men</Link> </span>
          <span> <Link to="/products/2">Women</Link> </span>
          <span> <Link to="/products/3">Kid's</Link> </span>
          <span>Sun Glasses</span>
          <span>New Arrivels</span>
        </div>
        <div className="item footer2">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>E-Shop</span>
          <span>Store</span>
          <span>Marketplace</span>
          <span>Storefront</span>
        </div>
        <div className="item footer3">
          <h1>About</h1>
          <span className="footerPara">
            We're a passionate ecommerce team dedicated to providing high-quality products, competitive prices, and exceptional customer service. Our goal is to make your shopping experience seamless and enjoyable. Thank you for choosing us, and we can't wait to serve you!
          </span>
        </div>
        <div className="item footer4">
          <h1>Contact</h1>
          <span className="footerPara">
            We value our customers and have made it easy to contact us. Reach out through our contact form, email, or phone number. We promise to respond promptly. Thank you for choosing our ecommerce website!
          </span>
          <div className="text">
            <label htmlFor="email">Email: </label>
            <input type="text" placeholder="write your mail" id="email" />
            <button onClick={handleClick}>Submit</button>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <Link className="link logo" to="/">
            E - Shop
          </Link>
          <span className="copyright">
            Copyright &copy; 2023 E - Shop. All rights reserved.
          </span>
        </div>

        <div className="right">
          <img src="/Img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
};

export default Footer;
