import React from "react";
import styled from "styled-components";
import HomeBack from "../../Assets/bg_acmwjmi.jpg";
import { HashLink } from "react-router-hash-link";
import "./home.css";
import About from "../About/About";
function Home() {
  return (
    <HomeStyled>
      <div classNameName="typography">
        <div className="col-sm-12 col-lg-10">
          <img src={HomeBack} alt="" className="background-img" />
          <div className="box3">
            <p>ACM-W</p>
            <p>Jamia Millia Islamia</p>
          </div>
          <div className="aboutBtn routes">
            <HashLink smooth to="/#about" className="aboutTag">
              About
            </HashLink>
          </div>
        </div>
        <About />
      </div>
    </HomeStyled>
  );
}
const HomeStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export default Home;