import React from "react";
import Fullcalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export default function CalenderComponent() {
  const API_KEY = process.env.REACT_APP_CALENDER_ID;
  const initialView = window.outerWidth < 640 ? "dayGridDay" : "dayGridWeek";
  return (
    <div className="p-3 w-full h-full overflow-x-auto">
      <Fullcalender
        viewClassNames={["sans", "text-xs"]}
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        googleCalendarApiKey={API_KEY}
        events={{
          googleCalendarId: "fcfootdog@gmail.com",
          display: "block",
          classNames: ["text-xs"],
        }}
        initialView={initialView}
        locale="ko"
        headerToolbar={{ left: "", center: "title", right: "" }}
      />
    </div>
  );
}
