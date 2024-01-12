import App from "../../App";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import ProductItem from "../../components/ProductItem/ProductItem";
const CartPage = ({}) => {
  const [user, token] = useAuth();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
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
  const handleSubmit = (async) => {};

  let totalPrice = 0;
  const getResults = products.map((product, index) => (
    <p>
      {" "}
      Item: {product.productInfo}
      {"     $"}
      {product.price}.00
    </p>
  ));
  console.log(getResults.productInfo);
  return (
    <div>
      <h1>{user.userName}'s Cart</h1>
      <p>{getResults}</p>
      <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
        Order Complete
      </button>
    </div>
  );
};
export default CartPage;
