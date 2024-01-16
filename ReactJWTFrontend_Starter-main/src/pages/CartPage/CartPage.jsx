import App from "../../App";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CartPage = ({}) => {
  const [user, token] = useAuth();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  //var options = stripe.elements({ clientSecret: "CLIENT_SECRET" });

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/cartitem/myCart`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.warn("Unable to retreive cart data: ", error);
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.put(`https://localhost:5001/api/cartitem`);

      if (response.status === 201) {
        console.log("Successfully processed");
      }
    } catch (error) {
      console.warn("Unable to complete order: ", error);
    }
    const formData = products.productInfo;
    try {
      const response = await axios.post(
        `https://localhost:5001/api/cartitem/myCart`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (error) {
      console.warn("Unable to complete request: ", error);
    }
  };

  function gatherTotalPrice(totalPrice, product) {
    return totalPrice + product.price;
  }

  let totalPrice = 0;
  totalPrice = products.reduce(gatherTotalPrice, 0);

  console.log("totalPrice", totalPrice);

  const getResults = products.map((product, index) => (
    <p>
      {" "}
      Item: {product.productInfo}
      {"     $"}
      {product.price}.00
    </p>
  ));

  return (
    <div>
      <h1>{user.userName}'s Cart</h1>
      <p>{getResults}</p>
      <p>Your Current Total: ${totalPrice}.00</p>
      <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
        Order Complete
      </button>
    </div>
  );
};
export default CartPage;
