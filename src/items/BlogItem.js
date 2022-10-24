import React from "react";
import { WorkOffSharp } from "@material-ui/icons";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../Pages/Blogs/blogs.css";
function BlogItem({ subTitle, title, desc, date, link }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#40BFFB", color: "#fff" }}
      contentArrowStyle={{ borderRight: "10px solid  #0444AC" }}
      date={date}
      iconStyle={{
        background: "#0444AC",
        color: "#fff",
      }}
      icon={<WorkOffSharp />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
      <p className="decsription">{desc} </p>
      <br />
      <button className="button">
        <a href={link}>{title}</a>
      </button>
    </VerticalTimelineElement>
  );
}

export default BlogItem;
