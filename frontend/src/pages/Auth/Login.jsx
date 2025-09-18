// src/pages/Login.jsx
import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async(e) => {
    e.preventDefault();
    const role = form.email.includes("admin") ? "admin" : "user"; 
    const userData = { email: form.email, role };
    setUser(userData);
    if (role === "admin") navigate("/admin/add-product");
    else navigate("/products");


       // Get Form data
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    

console.log('User Name:', email);
console.log('Email:', password);

    try {
  // Call the backend API
  const response = await fetch('http://192.168.2.67:3300/api/auth/login', {
    method : 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email , password })
  });

  const result = await response.json();

  if (result && result.message) {
    alert(result.message);
  } else {
    alert("Unexpected server response");
  }

  if (response.ok) {
    navigate('/');
  }
} catch (error) {
  console.error('Fetch failed:', error);
  alert("Something went wrong! Please check your network or backend.");
}

  };


  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography 
      variant="h4" 
      mb={3}>
        Login
      </Typography>

      <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ display: "flex", 
      flexDirection: "column", 
      gap: 2 }}>

        <TextField 
        label="Email" 
        name="email" 
        id="email"
        value={form.email} 
        onChange={handleChange} 
        required />

        <TextField 
        label="Password" 
        type="password" 
        id="password"
        name="password" 
        value={form.password} 
        onChange={handleChange} 
        required />

        <Button 
        variant="contained" 
        type="submit">
        Login</Button>
      </Box>
    </Container>
  );
}

export default Login;
