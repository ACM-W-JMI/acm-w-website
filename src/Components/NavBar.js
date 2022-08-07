import React from "react";
import styled from "styled-components";
import logo from "../Assets/acm logo.jpg";
import { NavLink } from "react-router-dom";
import { Instagram, LinkedIn } from "@material-ui/icons";
function NavBar() {
  return (
    <NavBarStyled>
      <div className="avatar">
        <img src={logo} alt="" className="avatarImg" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeclassname="active-class">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/team" activeclassname="active-class">
            Our Team
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/events" activeclassname="active-class">
            Events
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeclassname="active-class">
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <div className="subFooter">
          <img src={logo} alt="" /> ACM-W JMI
          <a
            href="https://www.linkedin.com/in/acm-w-jmi-31611a23b/"
          >
            <LinkedIn htmlColor="blue" className="icons" />
          </a>
          <a href="https://www.instagram.com/acmw_jmi/">
            <Instagram htmlColor=" #FF00C1" className="icons" />
          </a>
        </div>
      </footer>
    </NavBarStyled>
  );
}
const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border-radius: 100%;
      border: 8px solid var(--border-color);
      background-color: #000;
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
      color: white;
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        font-weight: bold;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        letter-spacing: 1px;
        &:active,
        &:focus {
          background-color: var(--primary-color);
          color: white;
        }
        &:hover {
          cursor: pointer;
          background-color: var(--primary-color);
          color: white;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 53%;
          transition: All 0.4s ease-in-out;
          z-index: -1;
          opacity: 0.21;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    .subFooter {
      padding: 2rem 0;
      font-weight: bold;
      font-size: 1rem;
      display: block;
      text-align: center;
      img {
        width: 40px;
        border-radius: 50%;
        border: 1px solid var(--border-color);
        background-color: #000;
        margin-bottom: -13px;
      }
      .icons {
        margin-bottom: -8px;
        cursor: pointer;
      }
    }
  }
`;
export default NavBar;
