import React from "react";
import logo from "../../utils/logo (2).svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="nav-bar">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>Geek Foods</h2>
      </div>
      <div className="pages">
        <span className="active">Home</span>
        <span>Quote</span>
        <span>Restaurants</span>
        <span>Foods</span>
        <span>Contacts</span>
      </div>
      <div>
        <button className="btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
