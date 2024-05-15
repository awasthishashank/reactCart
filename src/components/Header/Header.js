import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart"
import Home from "../../Pages/Home";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="Header">
        <ul className="header-list">
        <Link to="" >Home</Link>
          <li>
            <Link to ="/store">Store</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
          <li>
            <Link to = "/contact">Contact-Us</Link>
          </li>
          <HeaderCartButton />

        </ul>
        <h1>The Generics</h1>
      </div>
    </>
  );
};

export default Header;
