import { HomePage } from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { Route } from "react-router-dom";
import Shop from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/" component={Shop} />
    </div>
  );
}

export default App;
