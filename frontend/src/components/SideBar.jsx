// src/components/Sidebar.jsx
import React from "react";
import { Drawer, List, ListItemButton, ListItemText, Collapse, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function Sidebar() {
  const [openProducts, setOpenProducts] = React.useState(true);
  const [openOrders, setOpenOrders] = React.useState(true);

  return (
    <Drawer variant="permanent" anchor="left">
      <Typography variant="h6" sx={{ m:2 }}>Admin Menu</Typography>
      <List>
        <ListItemButton onClick={() => setOpenProducts(!openProducts)}>
          <ListItemText primary="Products" />
          {openProducts ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/admin/add-product">
              <ListItemText primary="Add Product" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/admin/products">
              <ListItemText primary="View Products" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => setOpenOrders(!openOrders)}>
          <ListItemText primary="Orders" />
          {openOrders ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOrders} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/admin/orders">
              <ListItemText primary="View Orders" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}

export default Sidebar;
