import React from "react";
import ShopData from "./shopdata.js";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: ShopData,
    };
  }
  render() {
    const { collection } = this.state;

    return (
      <div className="shop-page">
        {collection.map((val) => {
          return (
            <PreviewCollection
              key={val.id}
              title={val.title}
              items={val.items}
            />
          );
        })}
      </div>
    );
  }
}

export default Shop;
