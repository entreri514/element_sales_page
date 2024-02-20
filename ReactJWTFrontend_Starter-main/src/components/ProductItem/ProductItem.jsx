import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductItem.css";
import useAuth from "../../hooks/useAuth";
const ProductItem = () => {
  const { atomicNumber } = useParams();
  const [item, setItem] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [user, token] = useAuth();
  let displayResults;
  let id;
  useEffect(() => {
    getItem();
  }, []);
  const getItem = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/products/${atomicNumber}`
      );
      console.log("setItem=", response);
      if (response.status === 200) {
        setItem(response.data);
      }
    } catch (error) {
      console.warn("Error submitting form ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ProductId = item.id;
    const formData = { ProductId };
    console.log(formData);
    try {
      const response = await axios.post(
        `https://localhost:5001/api/cartitem?`,

        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 201) {
        setIsAdd(true);
        console.log("Added to cart.");
      }
    } catch (error) {
      console.warn("Unable to add item: ", error);
      console.log("Token", token);
      console.log("formdata", formData);
    }
  };

  displayResults = item.map((item, index) => {
    return (
      <div>
        {item.itemType === "Plasma" ? (
          <video
            autoPlay
            loop
            src={`/pics/${item.itemPic}.mp4`}
            alt="video"
            width="400"
            height="450"
            controls
          />
        ) : (
          <img
            src={`/pics/${item.itemPic}.jpg`}
            alt="image"
            width="350"
            height="450"
          />
        )}
        <div className="product-description">
          <h5>Atomic number: {item.atomicNumber}</h5>
          <h5>Symbol: {item.symbol}</h5>
          <h5>Product: {item.productInfo}</h5>
          <h5>Care: {item.productCare}</h5>
          <h5>Density: {item.density}</h5>
          <h5>Melting Point: {item.meltingPoint}</h5>
          <h5>Boiling Point: {item.boilingPoint}</h5>
          <div></div>
          <h3>Price: ${item.price}.00</h3>
        </div>
        {isAdd ? (
          <button className="btn-isadd" value={item.id} type="submit">
            Add to Cart
          </button>
        ) : (
          <button
            className="btn-add"
            value={item.id}
            type="submit"
            onClick={handleSubmit}
          >
            Add to Cart
          </button>
        )}
      </div>
    );
  });

  return (
    <div className="product-details">
      <h2 className="title-item">{item.name}</h2>
      {displayResults}
    </div>
  );
};

export default ProductItem;
