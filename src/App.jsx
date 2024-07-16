import React, { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import instance from "./axios";
import Home from "./pages/Home";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import ProductDetal from "./pages/ProductDetal";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    })();
  }, []);

  const handleSubmit = async (data) => {
    try {
      const res = await instance.post("/products", data);
      setProducts([...products, res.data]);
      if (confirm("Do you want to add another product?")) {
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to add product", error);
    }
  };

  const handleSubmitEdit = async (data) => {
    try {
      await instance.patch(`/products/${data.id}`, data);
      const newData = await instance.get("/products");
      setProducts(newData.data);
      if (confirm("Edit product success, redirect to home?")) {
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to edit product", error);
    }
  };

  const handleRemove = async (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await instance.delete(`/products/${id}`);
        const newData = products.filter((item) => item.id !== id);
        setProducts(newData);
      } catch (error) {
        console.error("Failed to delete product", error);
      }
    }
  };

  return (
    <>
      <header>
        <nav className="nav">
          <ul>
            <li>
              <Link
                to="/"
                className="nav-item is-active orange"
                active-color="orange"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/admin/product-add"
                className="nav-item blue"
                active-color="blue"
              >
                Add
              </Link>
            </li>
            <li>
              <Link
                to="/admin/register"
                className="nav-item green"
                active-color="green"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/admin/login"
                className="nav-item green"
                active-color="green"
              >
                Login
              </Link>
              <span className="nav-indicator"></span>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home data={products} removeProduct={handleRemove} />}
          />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/product-detal/:id" element={<ProductDetal />} />
          <Route path="/admin/register" element={<Register />} />
          <Route
            path="/admin/product-add"
            element={<ProductAdd onAdd={handleSubmit} />}
          />
          <Route
            path="/product-edit/:id"
            element={<ProductEdit onEdit={handleSubmitEdit} />}
          />
          <Route path="/admin" element={<Dashboard data={products} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
