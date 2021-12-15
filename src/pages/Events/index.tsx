import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function Events(): JSX.Element {
  const events = [{ title: "today's event", date: new Date() }];

  return (
    <div className="px-4 my-6 sm:px-6 lg:px-8">
      <FullCalendar
        contentHeight="auto"
        initialView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      />
    </div>
  );
}
