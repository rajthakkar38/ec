import React from "react";

import "./collection-items.component.scss";

const CollectionItems = ({ id, imgUrl, name, price }) => {
  return (
    <div className="collection-item">
      {console.log(imgUrl)}
      <div className="image" style={{ backgroundImage: `url(${imgUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
    </div>
  );
};

export default CollectionItems;
