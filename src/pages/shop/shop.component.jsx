import React from "react";
import Collection from "../../components/collection/collection-component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";

const Shop = ({ match }) => {
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
      ></Route>
      ,<Route path={`${match.path}/:categoryId`} component={Collection}></Route>
    </div>
  );
};

export default Shop;
