import { HomePage } from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function Hats() {
  return <div>Hats</div>;
}

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={Hats} />
    </div>
  );
}

export default App;
