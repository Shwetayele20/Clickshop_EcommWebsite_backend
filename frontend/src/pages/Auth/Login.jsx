// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";

function Login({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const [snackbar, setSnackbar] = useState({
  open: false,
  message: "",
  severity: "success", // can be "success", "error", "warning", "info"
});

const handleCloseSnackbar = () => {
  setSnackbar({ ...snackbar, open: false });
};


  // Handle input change
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Redirect to signup page
  const handleSignUpRedirect = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Login Data:", form);

    // Temporary role-based navigation (can be improved later)
    const role = form.email.includes("admin") ? "admin" : "user";
    const userData = { email: form.email, role };
    setUser(userData);

    if (role === "admin") navigate("/admin/add-product");
    else navigate("/products");

    // Extract form data
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");


    try {
      // Call backend API
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result && result.message) {
        setSnackbar({
          open: true,
          message: result.message,
          severity: response.ok ? "success" : "error",
          });

      } else {
        setSnackbar({
        open: true,
        message: "Unexpected server response",
        severity: "warning",
       });

      }

      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      setSnackbar({
       open: true,
       message: "Something went wrong! Please check your network or backend.",
      severity: "error",
    });
    }
  };

  return (
    <Container maxWidth="sm" component="main">
      <CssBaseline />
      <Paper
        elevation={6}
        sx={{
          mx: { xs: 3, sm: 4, md: 5 },
          my: { xs: 1, sm: 2, md: 3 },
          px: { xs: 3, sm: 4, md: 5 },
          py: { xs: 1, sm: 2, md: 3 },
          borderRadius: 3,
          width: "70%",
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
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography component="h1" variant="h5" >
              Sign
            </Typography>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <Typography
                component="h1"
                variant="h5"
                sx={{ fontSize: "1rem" }}
              >
                In
              </Typography>
            </Avatar>
          </Box>

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              {/* Email */}
              <Grid size ={{xs:12}}>
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

              {/* Password */}
              <Grid size ={{xs:12}}>
                <TextField
                  required
                  fullWidth
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

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              size="small"
              sx={{ mt: 2, mb: 2, py: 1.5 }}
            >
              Login
            </Button>

            {/* Footer Links */}
            <Grid container justifyContent="center">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={handleSignUpRedirect}
                >
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
      <Snackbar
  open={snackbar.open}
  autoHideDuration={4000}
  onClose={handleCloseSnackbar}
  anchorOrigin={{ vertical: "top", horizontal: "center" }}
>
  <MuiAlert
    onClose={handleCloseSnackbar}
    severity={snackbar.severity}
    variant="filled"
    sx={{ width: "100%" }}
  >
    {snackbar.message}
  </MuiAlert>
</Snackbar>

    </Container>
  );
}

export default Login;
