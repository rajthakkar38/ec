import React from "react";
import "./custom-button.component.scss";

export const CustomButton = ({ children, isGoogleSignIn, ...other }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...other}
    >
      {children}
    </button>
  );
};
