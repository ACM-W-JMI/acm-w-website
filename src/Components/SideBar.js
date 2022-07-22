import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

function SideBar({ navToggle }) {
  return (
    <SideBarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <NavBar />
    </SideBarStyled>
  );
}
const SideBarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;
export default SideBar;
