import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CartPage from "../../pages/CartPage/CartPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({}) => {
  const stripe = useStripe();
  const elements = useElements();
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };
  return (
    <div>
      <h2>Checkout</h2>
      <form on submit={handleSubmit}>
        <PaymentElement />
        <button disabled={!stripe}>Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
