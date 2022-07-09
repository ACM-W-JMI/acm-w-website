import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

function SideBar() {
  return (
    <SideBarStyled>
      <NavBar />
    </SideBarStyled>
  );
}
const SideBarStyled = styled.div`
  width: 14rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
`;
export default SideBar;
