import App from "../../App";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductPage = ({}) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
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
    }
    return (
      <p>
        <Link to={`/item/${product.atomicNumber}`}>{product.name}</Link>
      </p>
    );
  });
  function priceSearch(e) {
    e.preventDefault();
    const searchResults = products.filter((product) => {
      let diff = Math.abs(product.price - search);
      return diff <= 10;
    });

    console.log(searchResults);
    setProducts(searchResults);
  }
  return (
    <div>
      <h2>Our Products</h2>

      <div>{getResults}</div>

      <form onSubmit={priceSearch}>
        <label className="form-label">
          Price Search
          <input
            type="text"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default ProductPage;
