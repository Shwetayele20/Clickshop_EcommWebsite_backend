// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';


function Navbar({ user }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    navigate("/login");
    window.location.reload();
  };

  return (
    <AppBar 
    position="sticky" 
     sx={{
    backgroundColor: "white",
    color: "black",
    boxShadow: 2, // adds subtle shadow
    zIndex: (theme) => theme.zIndex.drawer + 1 // keeps it above content
  }}
     >
      <Toolbar sx={{ display:'flex', alignItems:'center', justifyContent:{sm:'space-between', md:'center'}}}>
        <Box sx={{ display: "flex", alignItems: "center", mr: '2rem' }}>
          <img
            src="/logos/logo.png"  // Reference public folder directly
            alt="Logo"
            style={{ width: '2rem', height: '2rem' }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "black", fontWeight:'600' }}
          >
            ClickShop
          </Typography>
        </Box>

   {/* Search Bar */}
        <Box
          sx={{
            backgroundColor: "#f4f4f5ff",
            // display: 'flex',
            borderRadius: 1,
            display: {xs:'none', md:'flex' },
            alignItems: "center",
            width: "30%",
            px: 2,
            mr:'5rem'
            
          }}
        >
          <InputBase
            placeholder="Search for Products"
            sx={{ flex: 1 }}
          />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </Box>



        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
          {user?.role === "customer" && (
            <>
              <Button color="inherit" component={Link} to="/products">
                Products
              </Button>
              <Button color="inherit" component={Link} to="/cart">
                Cart
              </Button>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <Button color="inherit" component={Link} to="/admin/products">
                Manage Products
              </Button>
              <Button color="inherit" component={Link} to="/admin/add-product">
                Add Product
              </Button>
              <Button color="inherit" component={Link} to="/admin/orders">
                Orders
              </Button>
            </>
          )}

          {!user ? (
            <>
             <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />}>
                Home
              </Button>
              <Button color="inherit" component={Link} to="/login" startIcon={<LoginIcon />}>
                Login
              </Button>
              {/* <Button color="inherit" component={Link} to="/cart" startIcon={<AppRegistrationIcon />}>
                Signup
              </Button> */}
            </>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {user?.role === "customer" && (
              <>
                <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
                  Products
                </MenuItem>
                <MenuItem component={Link} to="/cart" onClick={handleMenuClose}>
                  Cart
                </MenuItem>
              </>
            )}
            {user?.role === "admin" && (
              <>
                <MenuItem component={Link} to="/admin/products" onClick={handleMenuClose}>
                  Manage Products
                </MenuItem>
                <MenuItem component={Link} to="/admin/add-product" onClick={handleMenuClose}>
                  Add Product
                </MenuItem>
                <MenuItem component={Link} to="/admin/orders" onClick={handleMenuClose}>
                  Orders
                </MenuItem>
              </>
            )}
            {!user ? (
              <>
                <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
                  Login
                </MenuItem>
                {/* <MenuItem component={Link} to="/signup" onClick={handleMenuClose}>
                  Signup
                </MenuItem> */}
              </>
            ) : (
              <MenuItem onClick={() => { handleLogout(); handleMenuClose(); }}>
                Logout
              </MenuItem>
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
