import React from "react";
import Collection from "../../components/collection/collection-component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { UpdateCollection } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.components";

const S1 = WithSpinner(CollectionOverview);
const S2 = WithSpinner(Collection);

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    loading: true,
  };

  componentDidMount() {
    const { UpdateCollection } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      UpdateCollection(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <S1 isLoading={this.state.loading} {...props} />}
        ></Route>

        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => <S2 isLoading={this.state.loading} {...props} />}
        ></Route>
      </div>
    );
  }
}

const fun = (dispatch) => ({
  UpdateCollection: (col) => dispatch(UpdateCollection(col)),
});

export default connect(null, fun)(Shop);
