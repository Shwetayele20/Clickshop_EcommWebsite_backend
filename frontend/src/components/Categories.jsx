import React from "react";
import { Typography, Box, Link, Avatar, Paper } from "@mui/material";

import mobilesImg from "../assets/images/mobiles.png";
import fashionImg from "../assets/images/fashion.png";
import electronicsImg from "../assets/images/electronics.png";
import homeImg from "../assets/images/home.png";
import tvImg from "../assets/images/tv.png";
import flightImg from "../assets/images/flight.png";
import beautyImg from "../assets/images/beauty.png";
import groceryImg from "../assets/images/grocery.png";

function Categories() {
  const categories = [
    { id: 1, label: "Mobiles & Tablets", image: mobilesImg },
    { id: 2, label: "Fashion", image: fashionImg },
    { id: 3, label: "Electronics", image: electronicsImg },
    { id: 4, label: "Home & Furniture", image: homeImg },
    { id: 5, label: "TVs & Appliances", image: tvImg },
    { id: 6, label: "Flight Bookings", image: flightImg },
    { id: 7, label: "Beauty, Food..", image: beautyImg },
    { id: 8, label: "Grocery", image: groceryImg },
  ];

  return (
    <Paper elevation={3}>
      <Box
        sx={{
          mt: '1.5rem',
          mb: '1.5rem',
          backgroundColor: "#fff",
          p: 2,
          borderRadius: "0.5rem",
          maxWidth: "100%",
          overflow: "hidden",  

        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight={600} >
            Explore Popular Categories
          </Typography>
          <Link href="#" underline="hover" sx={{ fontSize: "0.9rem" }} display={{xs:'block', md:'block', lg:'none'}}>
            View All →
          </Link>
        </Box>

        {/* Horizontal scroll container */}
        <Box
          sx={{
            display: "flex",
         
            justifyContent: 'flex-start',
            overflowX: "auto",
            gap: 2,
            py: 1,
            width: "100%",
            boxSizing: "border-box",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { height: 6 },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: 3,
              backgroundColor: "#c1c1c1",
            },
          }}
        >
          {categories.map((cat) => (
            <Box
              key={cat.id}
              sx={{
               flexShrink: 0,
                textAlign: "center",
                minWidth: 90, // ensures each item has width for small screens
                cursor: "pointer",
              }}
            >
              <Avatar
                src={cat.image}
                alt={cat.label}
                sx={{
                  width: 80,
                  height: 80,
                  mb: 1,
                  backgroundColor: "#eee",
                  p: 1,
                  margin: "0 auto",
                }}
                imgProps={{ style: { objectFit: "contain" } }}
              />
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{ fontSize: { xs: "0.75rem", sm: "0.9rem" } }}
              >
                {cat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}

export default Categories;
