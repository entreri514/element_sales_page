import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PlasmaPage = ({}) => {
  const [plasmas, setPlasmas] = useState([]);
  useEffect(() => {
    getPlasmas();
  }, []);

  const getPlasmas = async (e) => {
    try {
      const response = await axios.get(`https://localhost:5001/api/products/`);
      if (response.status === 200) {
        setPlasmas(response.data);
      }
    } catch (error) {
      console.warn("Unable to retreive product data: ", error);
    }
  };
  const getResults = plasmas
    .filter((plasma) => plasma.itemType.includes("Plasma"))
    .map((plasma, index) => {
      {
        console.log(plasma);
      }
      return (
        <b>
          <Link to={`/item/${plasma.atomicNumber}`}>
            <img
              src={`/pics/${plasma.itemPic}.jpg`}
              alt="image"
              width="200"
              height="250"
            />
          </Link>
        </b>
      );
    });
  return (
    <div>
      <div>
        <h2>Plasma Page</h2>

        <div>{getResults}</div>
      </div>
    </div>
  );
};

export default PlasmaPage;