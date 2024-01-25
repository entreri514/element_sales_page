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
        <p>
          <b>
            <Link to={`/item/${plasma.atomicNumber}`}>
              <video
                autoPlay
                loop
                src={`/pics/${plasma.itemPic}.mp4`}
                alt="video"
                width="200"
                height="250"
              />
            </Link>{" "}
            {plasma.name}${plasma.price}.00
          </b>
        </p>
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
