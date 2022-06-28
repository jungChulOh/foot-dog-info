import React from "react";
import NavBar from "~/components/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <div style={{ position: "fixed", width: "100%" }}>
        <NavBar />
      </div>
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}

export default App;
