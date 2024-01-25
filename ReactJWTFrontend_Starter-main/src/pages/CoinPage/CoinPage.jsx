import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      {
        console.log(coin);
      }
      return (
        <b>
          <Link to={`/item/${coin.atomicNumber}`}>
            <img
              src={`/pics/${coin.itemPic}.jpg`}
              alt="image"
              width="200"
              height="250"
            />
          </Link>
          {coin.name}${coin.price}.00
        </b>
      );
    });
  return (
    <div>
      <h2>Our Coins!</h2>

      <div>{getResults}</div>
    </div>
  );
};

export default CoinPage;
