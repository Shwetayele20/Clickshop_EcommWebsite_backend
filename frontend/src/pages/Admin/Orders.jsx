// src/pages/Admin/Orders.jsx
import React, { useState } from "react";
import { Container, Table, TableHead, TableBody, TableCell, TableRow, Button, Select, MenuItem } from "@mui/material";

const mockOrders = [
  { id: 1, customer: "John", total: 300, status: "Pending" },
  { id: 2, customer: "Alice", total: 200, status: "Shipped" },
];

function Orders() {
  const [orders, setOrders] = useState(mockOrders);

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(o => o.id === id ? {...o, status: newStatus} : o));
  };

  return (
    <Container sx={{ mt: 3 }}>
      <h2>Orders</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <TableRow key={order.id}>
              <TableCell>{order.customer}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>
                <Select value={order.status} onChange={(e) => handleStatusChange(order.id, e.target.value)}>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Shipped">Shipped</MenuItem>
                  <MenuItem value="Delivered">Delivered</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Orders;
