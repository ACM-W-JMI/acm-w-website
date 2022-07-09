import React from "react";
import styled from "styled-components";
import "./home.css";
function Home() {
  return (
    <HomeStyled>
      <div className="typography">home</div>
    </HomeStyled>
  );
}
const HomeStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export default Home;
