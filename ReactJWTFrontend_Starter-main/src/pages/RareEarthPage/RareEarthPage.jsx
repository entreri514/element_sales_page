import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Axios } from "axios";

const RareEarthPage = ({}) => {
  const [rareEarths, setRareEarths] = useState([]);
  useEffect(() => {
    getRareEarths();
  }, []);

  const getRareEarths = async (e) => {
    try {
      const response = await axios.get(`https://localhost:5001/api/products/`);
      if (response.status === 200) {
        setRareEarths(response.data);
      }
    } catch (error) {
      console.warn("Unable to retrieve product data: ", error);
    }
  };

  const getResults = rareEarths
    .filter((rareEarth) =>
      rareEarth.atomicNumber.where(atomicNumber >= 57 && atomicNumber <= 71)
    )
    .map((rareEarth, index) => {
      return (
        <a>
          <Link to={`/item/${rareEarth.atomicNumber}`}>
            <img
              src={`pics/${rareEarth.itemPic}.jpg`}
              alt="image"
              width="200"
              height="250"
            />
            <h5>{rareEarth.name}</h5>
            <h6>${rareEarth.price}</h6>
          </Link>
        </a>
      );
    });
  return <div></div>;
};

export default RareEarthPage;
