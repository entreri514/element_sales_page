import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, [token]);

  const fetchCars = async () => {
    try {
      let response = await axios.get("https://localhost:5001/api/cars/myCars", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setCars(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="text">
      {console.log(user)}
      <h1>Home Page for {user.userName}!</h1>
      <img src={"/pics/img100.png"} alt="image" width="1920" height="700" />
    </div>
  );
};

export default HomePage;
