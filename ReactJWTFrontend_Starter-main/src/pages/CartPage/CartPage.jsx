import App from "../../App";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
const CartPage = ({}) => {
  const [user, token] = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const response = await axios.get(`https://localhost:5001/api/cartitem`);

      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.warn("Unable to retreive cart data: ", error);
    }
  };

  const getResults = products.map((product, index) => {
    {
      console.log(product);
    }
    product = product.productInfo;
  });
  return (
    <div>
      <h1>Cart for {user.userName}</h1>
      <p>{getResults}</p>
    </div>
  );
};
export default CartPage;
