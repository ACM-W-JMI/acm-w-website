import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeBack from "../../Assets/jmihomeback.jpg";
import "./home.css";
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
            {/* <Link href="#about"> */}
              <NavLink>About</NavLink>
            {/* </Link> */}
          </div>
        </div>
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