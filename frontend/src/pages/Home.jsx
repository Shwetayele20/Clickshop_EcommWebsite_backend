// src/pages/Home.jsx
import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";
import banner5 from "../assets/images/banner5.png";
import banner6 from "../assets/images/banner6.png";
import banner7 from "../assets/images/banner7.png";

import mobilesImg from "../assets/images/mobiles.png";
import fashionImg from "../assets/images/fashion.png";
import electronicsImg from "../assets/images/electronics.png";
import homeImg from "../assets/images/home.png";
import tvImg from "../assets/images/tv.png";
import flightImg from "../assets/images/flight.png";
import beautyImg from "../assets/images/beauty.png";
import groceryImg from "../assets/images/grocery.png";

// Example categories for homepage
 const categories = [
  { label: "Mobiles & Tablets", image: mobilesImg },
  { label: "Fashion", image: fashionImg },
  { label: "Electronics", image: electronicsImg },
  { label: "Home & Furniture", image: homeImg },
  { label: "TVs & Appliances", image: tvImg },
  { label: "Flight Bookings", image: flightImg },
  { label: "Beauty, Food..", image: beautyImg },
  { label: "Grocery", image: groceryImg },
];


// Example banner images
const banners = [
  {
    id: 1,
    image: banner1,
    title: "Get set for your next adventure",
    discount: "Up to 20% Off",
  },
  {
    id: 2,
    image: banner2,
    title: "Exclusive Deals for You",
    discount: "Save up to 25%",
  },
  {
    id: 3,
    image: banner3,
    title: "Travel Smart, Travel Safe",
    discount: "Up to 30% Off",
  },
];


function Home() {

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: "8px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#ddd",
        }}
      />
    ),
  };

  return (
    <Box>
      {/* Categories */}
      <Typography variant="h5" mb={2}>Categories</Typography>
      <Grid container spacing={2}>
        {categories.map((cat, index) => (
          <Grid size = {{xs:4, sm:3, md:3}} key={index}>
            <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 1 }}>
              <CardMedia
                component="img"
                image={cat.image}
                alt={cat.label}
                sx={{ width: 60, height: 60, borderRadius: "50%" }}
              />
              <CardContent sx={{ p: 0, mt: 1 }}>
                <Typography variant="body2" align="center">{cat.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>


 {/* <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <Box
            key={banner.id}
            sx={{
              position: "relative",
              height: { xs: "250px", md: "400px" },
              background: `url(${banner.image}) center/cover no-repeat`,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: { xs: 2, md: 10 },
            }}
          >
            <Box sx={{ color: "white", maxWidth: "400px" }}>
              <Typography variant="h5" fontWeight="bold">
                {banner.title}
              </Typography>
              <Typography variant="h4" fontWeight="bold" my={1}>
                {banner.discount}
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ffcc00", color: "black" }}
              >
                Book Now
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box> */}


        {/* Image Slider  */}

     {/* <Box sx={{ maxWidth: "100%", overflow: "hidden", mx: "auto", mt: 3 }}>
  <Slider {...settings}>
    {sliderImages.map((img, index) => (
      <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={img}
          alt={`Slide ${index + 1}`}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
      </Box>
    ))}
  </Slider>
</Box> */}







    </Box>
  );
}

export default Home;
