import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MainView from "./views/MainView";
import NotFoundView from "./views/NotFoundView";
import YoutubeView from "./views/YoutubeView";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/youtube" component={YoutubeView} />
        <Route path="/" exact component={MainView} />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
