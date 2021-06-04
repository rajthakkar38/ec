import React from "react";
import CollectionItems from "../collection-items/collection-items.component";
import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((val) => (
            <CollectionItems
              key={val.id}
              imgUrl={val.imageUrl}
              name={val.name}
              price={val.price}
            ></CollectionItems>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
