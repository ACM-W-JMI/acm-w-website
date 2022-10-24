import styled from "styled-components";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home/Home";
import Teams from "./Pages/Teams/Teams";
import Events from "./Pages/Events/Events";
import Blogs from "./Pages/Blogs/Blogs";
import { Route, Routes as Switching } from "react-router-dom";
import { useState } from "react";
import { MenuRounded } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import Contacts from "./Pages/Contact/Contacts";
import { Toaster } from "react-hot-toast";
import Blog1 from "./Components/Blog1";
function App() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="App">
      <Toaster />
      <SideBar navToggle={navToggle} />
      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuRounded />
        </IconButton>
      </div>

      <MainContentStyled>
        <Switching>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/blogs/blog1" element={<Blog1 />} />
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
