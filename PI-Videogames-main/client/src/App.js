import "./App.css";
import { Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Form from "./views/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./views/Detail/Detail";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/form" render={() => <Form />} />
      <Route path="/detail/:detailId" render={() => <Detail />} />
    </div>
  );
}

export default App;
