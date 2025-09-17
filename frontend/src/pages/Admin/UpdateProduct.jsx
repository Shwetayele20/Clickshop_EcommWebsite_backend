// src/pages/Admin/UpdateProduct.jsx
import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function UpdateProduct({ productToEdit, updateProduct }) {
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  useEffect(() => {
    if(productToEdit) setForm(productToEdit);
  }, [productToEdit]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(form);
  };

  if(!productToEdit) return <Typography>Select a product to edit</Typography>;

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" mb={3}>Update Product</Typography>
      <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }} onSubmit={handleSubmit}>
        <TextField label="Product Name" name="name" value={form.name} onChange={handleChange} required />
        <TextField label="Price" type="number" name="price" value={form.price} onChange={handleChange} required />
        <TextField label="Image URL" name="image" value={form.image} onChange={handleChange} required />
        <Button variant="contained" type="submit">Update Product</Button>
      </Box>
    </Container>
  );
}

export default UpdateProduct;
