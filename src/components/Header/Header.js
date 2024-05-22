import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import AuthContext from "../../store/Auth-Context";

const Header = () => {
  const history = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/auth");
  };
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      <div className="Header">
        <ul className="header-list">
          <Link to="">Home</Link>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/contact">Contact-Us</Link>
          </li>
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
          <HeaderCartButton />
        </ul>
        <h1>The Generics</h1>
      </div>
    </>
  );
};

export default Header;
