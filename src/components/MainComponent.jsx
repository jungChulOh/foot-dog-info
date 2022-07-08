import React from "react";
import AboutTeam from "./main/AboutTeam";
import Phrase from "./main/Phrase";
import Calendar from "./main/Calendar";

export default function MainComponent() {
  return (
    <div className="relative pt-28">
      <AboutTeam />
      <Phrase />
      <Calendar />
    </div>
  );
}
