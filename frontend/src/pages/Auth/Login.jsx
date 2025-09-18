// src/pages/Login.jsx
import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import {
  Avatar,
  Container, 
  TextField, 
  Button, 
  Typography, 
  Box ,
  Link,
  Paper,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Login({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSignUpRedirect = (e) => {
    e.preventDefault();                         
    navigate('/signup');                      
  };

  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async(e) => {                                      
    e.preventDefault();
    console.log("Login Data:", form );


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
    <Container maxWidth="sm" component="main">
      <CssBaseline />
      <Paper
        elevation={6}
        sx={{
          mx: {xs :3, sm : 4 , md : 5},
          my: {xs:1, sm:2, md: 3},
          px: { xs: 3, sm: 4, md: 5 }, // responsive padding
          py:{ xs: 1, sm: 2, md: 3 },
          borderRadius: 3,
          width :"70%",
           position: "relative",
          overflow: "hidden",
         
        }}
      >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    
                  }}
                >
      {/* Login Form */}

      <Box  sx={{display:"flex"}}>
      <Typography 
      variant="h4" 
      mb={3}>
        Login
      </Typography>

     <Avatar sx={{ p:1, bgcolor: "primary.main" }}>
        <AccountCircleIcon />    
      </Avatar> 
      </Box>
    

      <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ mt : 1}}
      >
    <Grid container spacing = {2}>

      {/* Email  */}
      <Grid size = {{xs:12}}>
        <TextField 
        required
        fullWidth
        size="small"
        label="Email" 
        name="email" 
        id="email"
        value={form.email} 
        onChange={handleChange} 
         />
        </Grid>

        {/* Password  */}

        <Grid size = {{xs:12}}>
        <TextField 
        fullWidth
        required
        size="small"
        label="Password" 
        type="password" 
        id="password"
        name="password" 
        value={form.password} 
        onChange={handleChange} 
         />
        </Grid>
      </Grid>

        <Button 
        fullWidth
        variant="contained" 
        type="submit"
        size="small"
         sx={{ mt: 1,  mb: 1,  py: 1.5 }}
        >
        Login
        </Button>

        {/* Footer Links */}
            <Grid container justifyContent="center">
              <Grid item>
                <Link 
                href = "#" 
                variant = "body2"
                onClick = {handleSignUpRedirect}
                >
                  Don't have an account? Sign up 
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Box>
    </Paper>
  </Container>
  );
}

export default Login;
