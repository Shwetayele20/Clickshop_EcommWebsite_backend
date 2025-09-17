import React from "react";
import { useNavigate } from 'react-router-dom';
// import NavBar from "../../components/NavBar";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  MenuItem,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { useState } from 'react';

export default function Signup() {

const [form, setForm] = useState({ name: "", email: "", password: "", role: "customer" });

 const navigate = useNavigate();

 const handleLoginRedirect = (e) => {
    e.preventDefault();                         
    navigate('/login');                      
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("Signup Data:", form);
  

    // Get Form data
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const phone_no = data.get("phone_no");


console.log('User Name:', username);
console.log('Email:', email);
console.log('Password',password);
console.log('Mobile:', phone_no);

try {
  // Call the backend API
  const response = await fetch('http://192.168.2.67:3300/api/auth/register', {
    method : 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username , email , password , phone_no})
  });

  const result = await response.json();

  if (result && result.message) {
    alert(result.message);
  } else {
    alert("Unexpected server response");
  }

  if (response.ok) {
    navigate('/login');
  }
} catch (error) {
  console.error('Fetch failed:', error);
  alert("Something went wrong! Please check your network or backend.");
}

};
  return (
    <>
    
    <Container component="main" maxWidth="sm">
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

         {/* Signup Form  */}
        
          <Box  sx={{display:"flex"}}>
             <Typography component="h1" variant="h5">
            Sign
          </Typography>
          <Avatar sx={{ p:1, bgcolor: "primary.main" }}>
            {/* <AccountCircleIcon /> */}
             <Typography component="h1" variant="h5" sx={{fontSize : "1rem"}}>
            Up
          </Typography>   
          </Avatar> 
          </Box>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1}}
          >
            <Grid container spacing={2}>
              {/* First Name */}
              <Grid size = {{xs :12}}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                  size="small"
                />
              </Grid>

              {/* Email */}
              <Grid size = {{xs :12 }}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  size="small"
                />
              </Grid>

              {/* Password */}
              <Grid size = {{xs :12}}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  size="small"
                />
              </Grid>


               {/* Mobile */}
              <Grid size = {{xs :12}}>
                <TextField
                  required
                  fullWidth
                  name="phone_no"
                  label="Mobile No."
                  type="text"
                  id="phone_no"
                  autoComplete="tel"
                  size="small"
                />
              </Grid>

                {/* Role */}
              <Grid size = {{xs :12}}>
               <TextField
                required
                fullWidth
                 select
                 label="Role"
                 name="role"
                 value={form.role}
                 autoComplete="role"
                 size="small"
                onChange={handleChange}
                >
          <MenuItem value="customer">Customer</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </TextField>
        </Grid>
               
               
            </Grid>
            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1,  mb: 1,  py: 1.5 }}
              size="small"
            >
              Sign Up
            </Button>
             
            {/* Footer Links */}
            <Grid container justifyContent="center">
              <Grid item>
                <Link 
                href = "#" 
                variant = "body2"
                onClick = {handleLoginRedirect}
                >
                  Existing User? Log in 
                </Link>
              </Grid>
            </Grid>
          </Box>       
        </Box>
      </Paper>
    </Container>
    </>
  );
}















// // src/pages/Signup.jsx
// import React, { useState } from "react";
// import { Container, TextField, Button, Typography, MenuItem, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [form, setForm] = useState({ name: "", email: "", password: "", role: "customer" });
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Data:", form);
//     navigate("/login");
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Typography variant="h4" mb={3}>Signup</Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//         <TextField label="Name" name="name" value={form.name} onChange={handleChange} required />
//         <TextField label="Email" name="email" value={form.email} onChange={handleChange} required />
//         <TextField label="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
//         <TextField
//           select
//           label="Role"
//           name="role"
//           value={form.role}
//           onChange={handleChange}
//         >
//           <MenuItem value="customer">Customer</MenuItem>
//           <MenuItem value="admin">Admin</MenuItem>
//         </TextField>
//         <Button variant="contained" type="submit">Signup</Button>
//       </Box>
//     </Container>
//   );
// }

// export default Signup;
