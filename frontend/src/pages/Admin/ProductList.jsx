// src/pages/Admin/ProductList.jsx
import React from "react";
import { Container, Table, TableHead, TableBody, TableCell, TableRow, Button } from "@mui/material";

function AdminProductList({ products, deleteProduct, editProduct }) {
  return (
    <Container sx={{ mt: 3 }}>
      <h2>Products</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((prod) => (
            <TableRow key={prod.id}>
              <TableCell>{prod.name}</TableCell>
              <TableCell>${prod.price}</TableCell>
              <TableCell><img src={prod.image} alt={prod.name} width={50} /></TableCell>
              <TableCell>
                <Button variant="outlined" sx={{ mr:1 }} onClick={() => editProduct(prod)}>Edit</Button>
                <Button variant="outlined" color="error" onClick={() => deleteProduct(prod.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default AdminProductList;
