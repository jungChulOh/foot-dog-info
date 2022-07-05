import React from "react";
import Fullcalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import styled from "styled-components";

const CalendarDiv = styled.div`
  .fc-toolbar-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  .fc-h-event .fc-event-title {
    white-space: pre-wrap;
  }
  .fc-daygrid-block-event .fc-event-time {
    white-space: pre-wrap;
  }
`;

export default function CalenderComponent() {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const initialView = window.outerWidth < 640 ? "listMonth" : "dayGridMonth";
  const contentHeight = window.outerWidth < 640 ? "300px" : "500px";
  return (
    <CalendarDiv className="max-w-7xl mx-auto p-3 w-full h-full overflow-x-auto">
      <Fullcalender
        viewClassNames={["sans", "text-xs"]}
        plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
        googleCalendarApiKey={API_KEY}
        events={{
          googleCalendarId: "fcfootdog@gmail.com",
          display: "block",
          classNames: ["text-xs"],
        }}
        initialView={initialView}
        locale="ko"
        headerToolbar={{ left: "", center: "title", right: "" }}
        contentHeight={contentHeight}
        eventClick={(info) => {
          info.jsEvent.preventDefault();
        }}
      />
    </CalendarDiv>
  );
}
