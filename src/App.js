import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AlbumView from "./views/AlbumView";
import MainView from "./views/MainView";
import NotFoundView from "./views/NotFoundView";
import YoutubeView from "./views/YoutubeView";

const CHANNEL_PLUGIN_KEY = process.env.REACT_APP_CHANNEL_PLUGIN_KEY;

window.addEventListener("DOMContentLoaded", () => {
  if (CHANNEL_PLUGIN_KEY) {
    window.ChannelIO("boot", {
      pluginKey: CHANNEL_PLUGIN_KEY, //please fill with your plugin key
    });
  }
});

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/youtube" component={YoutubeView} />
        <Route path="/album" component={AlbumView} />
        <Route path="/" exact component={MainView} />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
