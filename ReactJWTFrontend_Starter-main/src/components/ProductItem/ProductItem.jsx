import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProductItem = () => {
  const { atomicNumber } = useParams();
  const [item, setItem] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getItem();
  }, []);
  const getItem = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/products/${atomicNumber}`
      );
      console.log("setItem=", response.data[0]);
      if (response.status === 200) {
        setItem(response.data[0]);
      }
    } catch (error) {
      console.warn("Error submitting form ", error);
    }
  };
  let thumb = `/pics/${item.itemPic}.jpg`;
  console.log(thumb);
  if (!item) {
    return null;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let productId = item.id;
    console.log(item.id);
    const formData = { productId };
    try {
      const response = await axios.post(
        "https://localhost:5001/api/cartitem",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 201) {
        console.log("Added to cart.");
      }
    } catch (error) {
      console.warn("Unable to add item: ", error);
    }
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={thumb} alt="image" width="400" height="500" />

      <h5>Atomic number: {item.atomicNumber}</h5>
      <h5>Symbol: {item.symbol}</h5>
      <h5>Product: {item.productInfo}</h5>
      <h5>Care: {item.productCare}</h5>
      <h5>Density: {item.density}</h5>
      <h5>Melting Point: {item.meltingPoint}</h5>
      <h5>Boiling Point: {item.boilingPoint}</h5>
      <div></div>
      <h3>Price: ${item.price}.00</h3>

      <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
