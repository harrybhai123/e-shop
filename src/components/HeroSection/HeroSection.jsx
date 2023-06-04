import React from 'react';
import './HeroSection.scss';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/Img/sale.mp4" autoPlay loop muted />
      <h1>WELCOME TO E - Shop</h1>
      <p>Shop with us for the best deals on your favorite products</p>
      <div className="hero-btns">
              <Link className='link' to="/products/1">
              <button className="btn btn--primary btn--large">SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
