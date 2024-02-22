import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductItem.css";
import useAuth from "../../hooks/useAuth";
import AddProduct from "../AddProduct/AddProduct";

const ProductItem = () => {
  const { atomicNumber } = useParams();
  const [item, setItem] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [user, token] = useAuth();
  const [id, setId] = useState([]);

  let displayResults;

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
        <AddProduct value={item.id} onChange={setId}></AddProduct>
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
