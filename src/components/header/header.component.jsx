import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import "./header.component.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="Logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop/">
          Shop
        </Link>
        <Link className="option" to="/shop/">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
