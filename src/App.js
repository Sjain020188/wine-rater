import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import MainPageComponent from "./components/main-page/mainpage";
import NotFoundComponent from "./components/notfound/notfound";
import WineDetailsComponent from "./components/wine-details/winedetails";
import logo from "./wine.png";

const App = props => {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <h2 className="app-header-text">Vinolini</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Switch>
          <Route exact path={["/wines", "/"]} component={MainPageComponent} />
          <Route path="/wines/:id" component={WineDetailsComponent} />.
          <Route component={NotFoundComponent} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
