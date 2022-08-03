import React from "react";
import "./events.css";
import EventItem from "../../items/EventItem";
import { UpcomingEventLists, PastEventLists } from "../../data/EventLists";

function Events() {
  return (
    <>
      <h1 className="heading">Events</h1>
      <br />
      <br />
      <div className="section_one">
        <h1>Upcoming Events</h1>
        <div className="events">
          <div className="eventList">
            {UpcomingEventLists.length > 0 ? (
              UpcomingEventLists.map((eventItem, key) => (
                <EventItem
                  key={key}
                  image={eventItem.image}
                  title={eventItem.title}
                  desc={eventItem.desc}
                  visit={eventItem.visit}
                />
              ))
            ) : (
              <div
                style={{
                  fontSize: "1.6rem",
                  color: "#a7a4a4",
                  display: "block",
                  alignItems: "center",
                  justifyContent: "center",
                  fontStyle: "bold",
                }}
              >
                No Events found
              </div>
            )}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="section_one">
        <h1>Past Events</h1>
        <div className="events">
          <div className="eventList">
            {PastEventLists.length > 0 ? (
              PastEventLists.map((eventItem, key) => (
                <EventItem
                  key={key}
                  image={eventItem.image}
                  title={eventItem.title}
                  desc={eventItem.desc}
                  visit={eventItem.visit}
                />
              ))
            ) : (
              <div
                style={{
                  fontSize: "1.6rem",
                  color: "#a7a4a4",
                  display: "block",
                  alignItems: "center",
                  justifyContent: "center",
                  fontStyle: "bold",
                }}
              >
                No Events found
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
