import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {

  return (
    <div className="navbar">
      <h1>
        <Link to={"/"} className="logo">
          Kalvium ❤️
        </Link>
      </h1>
      <ul>
        <li>
          <Link to={"/about"} className="link">
            About
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}