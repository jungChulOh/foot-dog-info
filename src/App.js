import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import MainView from "./views/MainView";

function App() {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainView} />
        </Switch>
      </BrowserRouter>
      <FooterComponent />
    </>
  );
}

export default App;
