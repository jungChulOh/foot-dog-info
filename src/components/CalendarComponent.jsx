import React from "react";
import Fullcalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export default function CalenderComponent() {
  const API_KEY = process.env.REACT_APP_CALENDER_ID;
  return (
    <Fullcalender
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={API_KEY}
      events={{
        googleCalendarId: "fcfootdog@gmail.com",
      }}
      initialView="dayGridMonth"
    />
  );
}
