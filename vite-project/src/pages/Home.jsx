import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <h1>Home</h1>
    </div>
  );
}

export default Home;