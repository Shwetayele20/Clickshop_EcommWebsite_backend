import React from "react";
import { Box, Grid, Stack } from "@mui/material";

import shop1 from "../assets/images/shop1.png"; // large left
import shop2 from "../assets/images/shop2.png"; // top right
import shop3 from "../assets/images/shop3.png"; // middle right
import shop4 from "../assets/images/shop4.png"; // bottom right

// Reusable image wrapper
const ImageCard = ({ src, alt, height }) => (
  <Box
    sx={{
      borderRadius: "0.5rem",
      overflow: "hidden",
      height: height || "100%",
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  </Box>
);

export default function ExploreSection() {
  return (
    <Box sx={{ flexGrow: 1, mb: "1rem",maxHeight:'27.5rem' }}>
      <Grid container spacing={2}>
        {/* Left big image */}
        <Grid size={{xs:12, md:5}} >
          <ImageCard src={shop1} alt="Shop 1" height="67%" />
        </Grid>

        {/* Middle stacked images */}
        <Grid size={{xs:12, md:4}}>
          <Stack spacing={2}>
            <ImageCard src={shop2} alt="Shop 2" height="80%" />
            <ImageCard src={shop3} alt="Shop 3" height="80%" />
          </Stack>
        </Grid>

        {/* Right image */}
        <Grid size={{xs:12, md:3}}>
          <ImageCard src={shop4} alt="Shop 4" height="67%" />
        </Grid>
      </Grid>
    </Box>
  );
}
