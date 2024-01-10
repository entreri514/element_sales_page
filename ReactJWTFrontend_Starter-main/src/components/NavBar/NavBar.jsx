import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Elemental</b>
          </Link>
        </li>
        <li className="coins">
          <Link to="/coins" style={{ textDecoration: "none", color: "white" }}>
            <b>Coins</b>
          </Link>
        </li>
        <li className="products">
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "white" }}
          >
            <b>Products</b>
          </Link>
        </li>
        <li className="plasma">
          <Link to="/plasma" style={{ textDecoration: "none", color: "white" }}>
            <b>Plasma</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
