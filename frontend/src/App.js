// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import  Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Home from "./pages/Home";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";

// Customer Pages
import ProductList  from "./pages/Customer/ProductList";
import Cart from "./pages/Customer/Cart";
import Checkout from "./pages/Customer/Checkout";

// Admin Pages
import AddProduct from "./pages/Admin/AddProduct";
import AdminProductList  from "./pages/Admin/ProductList";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Orders from "./pages/Admin/Orders";

function App() {
  const [user, setUser] = useState(null); // { email, role }
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 200, image: "https://via.placeholder.com/150" },
  ]);
  const [productToEdit, setProductToEdit] = useState(null);

  // Customer functions
  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const clearCart = () => setCart([]);

  // Admin functions
  const addProduct = (product) =>
    setProducts([...products, { ...product, id: products.length + 1 }]);
  const editProduct = (product) => setProductToEdit(product);
  const updateProduct = (updated) => {
    setProducts(products.map((p) => (p.id === updated.id ? updated : p)));
    setProductToEdit(null);
  };
  const deleteProduct = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <Router>
      <Navbar user={user} />
      <div style={{ display: "flex" }}>
        {user?.role === "admin" && <Sidebar />}
        <div style={{ flexGrow: 1 }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login setUser={setUser} />} />

            {/* Customer Routes */}
            <Route
              path="/products"
              element={
                <PrivateRoute user={user} role="customer">
                  <ProductList addToCart={addToCart} />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute user={user} role="customer">
                  <Cart
                    cartItems={cart}
                    removeFromCart={removeFromCart}
                    checkout={() => alert("Go to checkout")}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <PrivateRoute user={user} role="customer">
                  <Checkout cartItems={cart} clearCart={clearCart} />
                </PrivateRoute>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin/add-product"
              element={
                <PrivateRoute user={user} role="admin">
                  <AddProduct addProduct={addProduct} />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <PrivateRoute user={user} role="admin">
                  <AdminProductList
                    products={products}
                    deleteProduct={deleteProduct}
                    editProduct={editProduct}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/update-product"
              element={
                <PrivateRoute user={user} role="admin">
                  <UpdateProduct
                    productToEdit={productToEdit}
                    updateProduct={updateProduct}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <PrivateRoute user={user} role="admin">
                  <Orders />
                </PrivateRoute>
              }
            />

            {/* Fallback Route */}
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
