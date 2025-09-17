// src/pages/Customer/Cart.jsx
import React from "react";
import { Container, Typography, List, ListItem, ListItemText, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function Cart({ cartItems, removeFromCart, checkout }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" mb={3}>Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>No items in cart</Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item, index) => (
              <ListItem key={index}
                secondaryAction={
                  <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={item.name} secondary={`$${item.price}`} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={{ mt: 2 }}>Total: ${total}</Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={checkout}>Checkout</Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
