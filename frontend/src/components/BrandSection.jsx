import React from "react";
import { Grid, Paper, Avatar, Typography, Box } from "@mui/material";


// Example logos (replace with your own imports)
import adidas from "../assets/brands/adidas.png";
import nestle from "../assets/brands/nestle.png";
import pdrpepper from "../assets/brands/pdrepper.png";
import lg from "../assets/brands/lg.png";
import dell from "../assets/brands/dell.png";
import apple from "../assets/brands/apple.png";
import chanel from "../assets/brands/chanel.png";
import zara from "../assets/brands/zara.png";

const brands = [
  { id: 1, name: "Adidas", logo: adidas },
  { id: 2, name: "Nestle", logo: nestle },
  { id: 3, name: "Pdrepper", logo: pdrpepper },
  { id: 4, name: "LG Electronics", logo: lg },
  { id: 5, name: "Dell", logo: dell },
  { id: 6, name: "Apple", logo: apple },
  { id: 7, name: "Chanel", logo: chanel },
  { id: 8, name: "Zara Fashion", logo: zara },
];

export default function  BrandSection() {
  return (
 <Box sx={{ mt: 4 , mb:4 }}>
    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
        Explore Official Brand Stores
    </Typography>
 
    <Grid container spacing={2} >
        {brands.map((brand) => (
          <Grid size = {{ xs:12, sm:6, md:3}} key={brand.id}>
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: "0.75rem",
                height: "100%",
              }}
            >
              <Avatar
                src={brand.logo}
                alt={brand.name}
                sx={{
                  width: 56,
                  height: 56,
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #eee",
                }}
              />
              <Box>
                <Typography fontWeight={600}>{brand.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Delivery within 24 hours
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  
  );
}








