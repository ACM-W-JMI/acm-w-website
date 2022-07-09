import styled from "styled-components";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home/Home";
import Teams from "./Pages/Teams/Teams";
import Blogs from "./Pages/Blogs/Blogs";
import Events from "./Pages/Events/Events";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar />
      <MainContentStyled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
        </Routes>
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
