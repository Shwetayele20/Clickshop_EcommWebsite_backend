// src/pages/Customer/Checkout.jsx
import React from "react";
import { Container, Typography, Button } from "@mui/material";

function Checkout({ cartItems, clearCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" mb={3}>Checkout</Typography>
      {cartItems.length === 0 ? (
        <Typography>No items to checkout</Typography>
      ) : (
        <>
          <Typography variant="h6">Total Amount: ${total}</Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleCheckout}>Place Order</Button>
        </>
      )}
    </Container>
  );
}

export default Checkout;
