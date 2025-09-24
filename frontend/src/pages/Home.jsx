// src/pages/Home.jsx
import React from "react";
import { Box,Container } from "@mui/material";
import Categories from "../components/Categories";
import ImageSlider from "../components/ImageSlider";
import Contact from "../components/Contact";
import ExploreSection from "../components/ExploreSection";
import BrandSection from "../components/BrandSection";
import '../App.css';

function Home() {
  return (
  <>
  <Box sx={{ 
    width: "100%", 
    minHeight: "100vh", 
    overflow:'hidden',
    background:'#f2f1f1ff',
    px: { xs: 1, sm: 2, md:3 },
    // border:'1px solid green',
    }} >
    <Container maxWidth="lg"  disableGutters sx={{ width: "100vw" }} >
      <Categories />
      <ImageSlider /> 
      <BrandSection />
      <ExploreSection />
    
    </Container>
  </Box>
  
    <Contact />
  </>
  );
}
export default Home;
