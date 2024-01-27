import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CoinPage.css";

const CoinPage = ({}) => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    getCoins();
  }, []);

  const getCoins = async (e) => {
    try {
      const response = await axios.get(`https://localhost:5001/api/products/`);
      if (response.status === 200) {
        setCoins(response.data);
      }
    } catch (error) {
      console.warn("Unable to retreive product data: ", error);
    }
  };

  const getResults = coins
    .filter((coin) => coin.itemType.includes("Coin"))
    .map((coin, index) => {
      return (
        <a>
          <Link to={`/item/${coin.atomicNumber}`}>
            <img
              src={`/pics/${coin.itemPic}.jpg`}
              alt="image"
              width="200"
              height="250"
            />
          </Link>
          <h5> {coin.name}</h5>
          <h6>${coin.price}.00</h6>
        </a>
      );
    });
  return (
    <div>
      <h2 className="text-align">Our Coins!</h2>

      <div className="product-grid">{getResults}</div>
    </div>
  );
};

export default CoinPage;
