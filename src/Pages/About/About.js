import React from "react";
import "./about.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
function About() {
  return (
    <div className="col-sm-12 col-lg-10 container" id="about">
      <div className="cards">
        <p className="ch">About Us</p>
        <p className="cb">
          <FormatQuoteIcon className="invert" />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          <FormatQuoteIcon className="revert" />
        </p>
      </div>
    </div>
  );
}

export default About;
