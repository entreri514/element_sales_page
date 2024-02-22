import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
const AddProduct = ({ value, onChange }) => {
  const [id, setId] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [user, token] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ProductId = value;
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
  return (
    <div>
      {isAdd ? (
        <button className="btn-isadd" type="submit">
          Add to Cart
        </button>
      ) : (
        <button
          className="btn-add"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="submit"
          onClick={handleSubmit}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddProduct;
