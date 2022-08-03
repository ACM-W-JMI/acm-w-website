import React from "react";
import {
  TeamList,
  TechTeamList,
  EventTeamList,
  SocialTeamList,
  DesignTeamList,
  OperationTeamList,
  ContentTeamList,
} from "../../data/TeamLists";
import TeamItem from "../../items/TeamItem";
import "./teams.css";
function Teams() {
  return (
    <>
      <h1 className="heading">Our Team</h1>
      <br />
      <div className="section_one">
        <div className="teams">
          <div className="teamList">
            {TeamList.map((teamItem, key) => {
              return (
                <TeamItem
                  key={key}
                  image={teamItem.image}
                  name={teamItem.name}
                  position={teamItem.position}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="section_one">
        <h2 className="sec_head">Technical Team</h2>
        <div className="teams">
          <div className="teamList">
            {TechTeamList.map((teamItem, key) => {
              return (
                <TeamItem
                  key={key}
                  image={teamItem.image}
                  name={teamItem.name}
                  position={teamItem.position}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="section_one">
        <h2 className="sec_head">Event Team</h2>
        <div className="teams">
          <div className="teamList">
            {EventTeamList.map((teamItem, key) => {
              return (
                <TeamItem
                  key={key}
                  image={teamItem.image}
                  name={teamItem.name}
                  position={teamItem.position}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="section_one">
        <h2 className="sec_head">Social Media Team</h2>
        <div className="teams">
          <div className="teamList">
            {SocialTeamList.map((teamItem, key) => {
              return (
                <TeamItem
                  key={key}
                  image={teamItem.image}
                  name={teamItem.name}
                  position={teamItem.position}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="section_one">
        <h2 className="sec_head">Design Team</h2>
        <div className="teams">
          <div className="teamList">
            {DesignTeamList.map((teamItem, key) => {
              return (
                <TeamItem
                  key={key}
                  image={teamItem.image}
                  name={teamItem.name}
                  position={teamItem.position}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="section_one">
        <h2 className="sec_head">Operations and PR Team</h2>
        <div className="teams">
          <div className="teamList">
            {OperationTeamList.map((teamItem, key) => {
              return (
                <TeamItem
                  key={key}
                  image={teamItem.image}
                  name={teamItem.name}
                  position={teamItem.position}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="section_one">
        <h2 className="sec_head">Content Team</h2>
        <div className="teams">
          <div className="teamList">
            {ContentTeamList.map((teamItem, key) => {
              return (
                <TeamItem
                  key={key}
                  image={teamItem.image}
                  name={teamItem.name}
                  position={teamItem.position}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Teams;
