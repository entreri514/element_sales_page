import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import PayPalPayment from "../../components/PayPalPayment/PayPalPayment";
import "./CartPage.css";
const CartPage = ({}) => {
  const [user, token] = useAuth();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const [checkout, setCheckout] = useState(false);
  let viewOrderHistory = false;
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
  const orderHistory = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/cartitem/myHistory`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status === 200) {
        setProducts(response.data);
        viewOrderHistory = true;
      }
    } catch (error) {
      console.warn("Unable to retreive cart data: ", error);
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `https://localhost:5001/api/cartitem`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status === 201) {
        console.log("Successfully processed");
        setCheckout(true);
      }
    } catch (error) {
      console.warn("Unable to complete order: ", error);
    }

    const paypalauth = async () => {
      const response = await axios.post(
        `https://sandbox.paypal.com/v2/checkout/orders`
      );
    };
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
      {viewOrderHistory ? <p>Your Current Total: ${totalPrice}.00</p> : <p></p>}
      <div className="button-flex">
        {checkout ? (
          <PayPalPayment price={totalPrice} />
        ) : (
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Order Complete
          </button>
        )}
        <button
          className="btn btn-secondary"
          type="submit"
          onClick={orderHistory}
        >
          View Order History
        </button>
      </div>
    </div>
  );
};
export default CartPage;
