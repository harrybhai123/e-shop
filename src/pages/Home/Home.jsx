// import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HeroSection from "../../components/HeroSection/HeroSection";
import Slider from "../../components/Slider/Slider";
import SlidingText from "../../components/SlidingText/SlidingText";
import "./Home.scss" 
import React from 'react'
const Home = () => {
  return <div className="home">
    <HeroSection />
    <SlidingText text={`Welcome to our ecommerce website, where shopping is made easy and enjoyable. We take pride in offering a wide range of high-quality products that are sure to exceed your expectations. Whether you're searching for the latest fashion trends, the newest tech gadgets, or simply everyday essentials, we've got you covered. Our user-friendly platform ensures a seamless shopping experience from start to finish, with easy navigation, secure checkout, and speedy delivery. Our commitment to customer satisfaction means that we prioritize your needs and strive to provide the best possible service. Thank you for choosing our ecommerce website, and we look forward to exceeding your shopping expectations.`} duration={10} />
    <Slider />
    <FeaturedProducts type="trending" />

    <SlidingText text={`Welcome to our ecommerce website, where shopping is made easy and enjoyable. We take pride in offering a wide range of high-quality products that are sure to exceed your expectations. Whether you're searching for the latest fashion trends, the newest tech gadgets, or simply everyday essentials, we've got you covered. Our user-friendly platform ensures a seamless shopping experience from start to finish, with easy navigation, secure checkout, and speedy delivery. Our commitment to customer satisfaction means that we prioritize your needs and strive to provide the best possible service. Thank you for choosing our ecommerce website, and we look forward to exceeding your shopping expectations.`} duration={10} />
  </div>;
};

export default Home;
