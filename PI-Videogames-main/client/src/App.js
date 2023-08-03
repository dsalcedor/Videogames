import "./App.css";
import { Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/home" render={()=><Home />} />
    </div>
  );
}

export default App;
