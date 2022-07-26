import React from "react";
import "./events.css";
import EventItem from "../../items/EventItem";
import { EventLists } from "../../data/EventLists";

function Events() {
  return (
    <>
      <h1 className="heading">Events</h1>
      <br />
      <div className="section_one">
        <div className="events">
          <div className="eventList">
            {EventLists.length > 0 ? (
              EventLists.map((eventItem, key) => (
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
