// src/pages/Admin/AddProduct.jsx
import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function AddProduct({ addProduct }) {
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(form);
    setForm({ name: "", price: "", image: "" });
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" mb={3}>Add Product</Typography>
      <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }} onSubmit={handleSubmit}>
        <TextField label="Product Name" name="name" value={form.name} onChange={handleChange} required />
        <TextField label="Price" type="number" name="price" value={form.price} onChange={handleChange} required />
        <TextField label="Image URL" name="image" value={form.image} onChange={handleChange} required />
        <Button variant="contained" type="submit">Add Product</Button>
      </Box>
    </Container>
  );
}

export default AddProduct;
