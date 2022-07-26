import React from "react";

function TeamItem({ name, image, position }) {
  return (
    <div className="teamItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h2> {name} </h2>
      <h4> {position} </h4>
    </div>
  );
}

export default TeamItem;
