import { HomePage } from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { Route } from "react-router-dom";
import Shop from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignUpSignIn from "./pages/sign-up-and-sign-in/sign-up-and-sign-in.component.jsx";
import { auth, createUserDoc } from "./firebase/firebase.utils";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const ref = await createUserDoc(user);
        ref.onSnapshot((snap) => {
          this.setState(
            {
              currentUser: {
                id: snap.id,
                ...snap.data(),
              },
            },
            () => {
              console.log(this.state.currentUser);
            }
          );
        });
      }
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}></Header>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/" component={Shop} />
        <Route exact path="/signin/" component={SignUpSignIn} />
      </div>
    );
  }
}

export default App;
