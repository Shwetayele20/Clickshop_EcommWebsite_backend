// src/pages/Login.jsx
import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = form.email.includes("admin") ? "admin" : "customer"; 
    const userData = { email: form.email, role };
    setUser(userData);
    if (role === "admin") navigate("/admin/add-product");
    else navigate("/products");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" mb={3}>Login</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} required />
        <TextField label="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
        <Button variant="contained" type="submit">Login</Button>
      </Box>
    </Container>
  );
}

export default Login;
