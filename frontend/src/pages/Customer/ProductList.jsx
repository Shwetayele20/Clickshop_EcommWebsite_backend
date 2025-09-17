// src/pages/Customer/ProductList.jsx
import React, { useState } from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

const mockProducts = [
  { id: 1, name: "Product 1", price: 100, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: 200, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: 300, image: "https://via.placeholder.com/150" },
];

function ProductList({ addToCart }) {
  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" mb={3}>Products</Typography>
      <Grid container spacing={3}>
        {mockProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">${product.price}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" onClick={() => addToCart(product)}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;
