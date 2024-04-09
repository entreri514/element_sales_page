// General Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import CoinPage from "./pages/CoinPage/CoinPage";
import PlasmaPage from "./pages/PlasmaPage/PlasmaPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import RareEarthPage from "./pages/RareEarthPage/RareEarthPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductItem from "./components/ProductItem/ProductItem";
import PayPalPayment from "./components/PayPalPayment/PayPalPayment";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/item/:atomicNumber" element={<ProductItem />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/coins" element={<CoinPage />} />
        <Route path="/rareearths" element={<RareEarthPage />} />
        <Route path="/plasmas" element={<PlasmaPage />} />
        <Route path="/add" element={<AddProductPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
