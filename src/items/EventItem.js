import React from "react";

function EventItem({ image, title, desc, visit }) {
  return (
    <div className="eventItem">
      <div className="image">
        <div
          className="eventImage"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="eventContent">
        <h2> {title} </h2>
        <h4> {desc} </h4>
        <a className="eventVisit" href={visit}>
          Visit
        </a>
      </div>
    </div>
  );
}

export default EventItem;