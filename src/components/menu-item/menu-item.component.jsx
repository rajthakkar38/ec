import React from "react";
import "./menu-item.component.scss";

export const MenuItem = ({ head, imgUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{head.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
