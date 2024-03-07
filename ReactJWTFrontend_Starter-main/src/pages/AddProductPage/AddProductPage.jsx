import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddField from "../../components/AddField/AddField";

const AddProductPage = () => {
  const [atomicNumber, setAtomicNumber] = useState("");
  const [name, setName] = useState("");
  const [itemPic, setItemPic] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [itemType, setItemType] = useState("");
  const [symbol, setSymbol] = useState("");
  const [density, setDensity] = useState("");
  const [meltingPoint, setMeltingPoint] = useState("");
  const [boilingPoint, setBoilingPoint] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      atomicNumber,
      name,
      itemPic,
      price,
      description,
      productInfo,
      itemType,
      symbol,
      density,
      meltingPoint,
      boilingPoint,
    };
    try {
      const response = await axios.post(
        "https://localhost:5001/api/products",
        formData
      );
      if (response.status === 201) {
        console.log("Product added.");
      }
    } catch (error) {
      console.warn("Error submitting new product form: ", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h1>Add a Product</h1>
      <div>
        <AddField
          label="Atomic Number"
          value={atomicNumber}
          onChange={setAtomicNumber}
        />
        <AddField label="Name" value={name} onChange={setName} />
        <AddField label="Item Pic" value={itemPic} onChange={setItemPic} />
        <AddField label="Price" value={price} onChange={setPrice} />
        <AddField
          label="Description"
          value={description}
          onChange={setDescription}
        />
        <AddField
          label="Product Information"
          value={productInfo}
          onChange={setProductInfo}
        />
        <AddField label="Item Type" value={itemType} onChange={setItemType} />
        <AddField label="Symbol" value={symbol} onChange={setSymbol} />
        <AddField label="Density" value={density} onChange={setDensity} />
        <AddField
          label="Melting Point"
          value={meltingPoint}
          onChange={setMeltingPoint}
        />
        <AddField
          label="Boiling Point"
          value={boilingPoint}
          onChange={setBoilingPoint}
        />
        <div>
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProductPage;
