import App from "../../App";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductPage = ({}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    try {
      const response = await axios.get(`https://localhost:5001/api/products/`);

      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.warn("Unable to retreive product data: ", error);
    }
  };

  const getResults = products.map((product, index) => {
    {
      console.log(product);
    }
    return <Link to={`/item/${product.atomicNumber}`}>{product.name}</Link>;
  });
  return (
    <div>
      <h2>Our Products</h2>

      <div>{getResults}</div>
    </div>
  );
};

export default ProductPage;
