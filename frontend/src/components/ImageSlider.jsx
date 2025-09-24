// src/components/ImageSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Box, } from "@mui/material";

import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";
import banner5 from "../assets/images/banner5.png";
import banner6 from "../assets/images/banner6.png";
import banner7 from "../assets/images/banner7.png";

const images = [ banner4, banner2, banner1,  banner3,  banner5, banner6, banner7];

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows : false,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 600, // mobile
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  return (
    <>
    <Box sx={{
       width: "100%", mb: "2rem",  maxWidth: "100vw",  }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                display: "block",
                width: "100%",
                maxWidth: "100%", 
                height: "300px",        // scales properly
                // keep mobile small
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
    </>
  );
}
