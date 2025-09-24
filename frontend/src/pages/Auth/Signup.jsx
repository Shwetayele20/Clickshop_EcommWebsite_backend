import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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


export default function Signup() {

 const navigate = useNavigate();
 const [form, setForm] = useState({ 
  name: "", 
  email:"", 
  password: "", 
  phone_no:"", 
  role:" " 
});
 
const handleLoginRedirect = (e) => {
    e.preventDefault();                         
    navigate('/login');                      
  };

const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("Signup Data:", form);
  

    // // Get Form data
    // const data = new FormData(event.currentTarget);
    // const username = data.get("username");
    // const email = data.get("email");
    // const password = data.get("password");
    // const phone_no = data.get("phone_no");
    // const role = data.get('role');


// console.log('User Name:', username);
// console.log('Email:', email);
// console.log('Password',password);
// console.log('Mobile:', phone_no);

try {
  // Call the backend API
  const response = await fetch('http://192.168.2.67:3300/api/auth/register', {
    method : 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(form),
  });

  const result = await response.json();
  alert(result?.message || "Unexpected server response");

  if (response.ok) navigate('/login');
  
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
                 id = 'role'
                 name="role"
                 value={form.role}
                 autoComplete="role"
                 size="small"
                onChange={handleChange}
                >
          <MenuItem value="user">User</MenuItem>
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
