import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import "./header.component.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin/">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
