import styled from "styled-components";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home/Home";
import Teams from "./Pages/Teams/Teams";
import Blogs from "./Pages/Blogs/Blogs";
import Events from "./Pages/Events/Events";
import { Route, Routes as Switching } from "react-router-dom";
import { useState } from "react";
import { MenuRounded } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="App">
      <SideBar navToggle={navToggle}/>
      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuRounded />
        </IconButton>
      </div>

      <MainContentStyled>
      <Switching>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
export default App;
