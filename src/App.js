import { HomePage } from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { Route } from "react-router-dom";
import Shop from "./pages/shop/shop.component.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/" component={Shop} />
    </div>
  );
}

export default App;
