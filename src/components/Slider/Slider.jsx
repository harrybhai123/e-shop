import "./Slider.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import React from 'react'

const Slider = () => {
  const [currentIMG, setCurrentIMG] = useState(0);

  const prevButton = () => {
    setCurrentIMG(currentIMG === 0 ? 1 : (prev) => prev - 1);
  };
  const nextButton = () => {
    setCurrentIMG(currentIMG === 1 ? 0 : (prev) => prev + 1);
  };

  const data = [
    "/Img/slider12.jpg",
    "/Img/sale.jpg",
  ];
  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentIMG * 100}vw)`}}>
        <img src={data[0]} alt="slider img1" />
        <img src={data[1]} alt="slider img2" />
      </div>

      <div className="icons">
        <div className="icon left" onClick={prevButton}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </div>

        <div className="icon right" onClick={nextButton}>
          <KeyboardArrowRightIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
