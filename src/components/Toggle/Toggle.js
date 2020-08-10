import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import './Toggle.css';

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -8px;
  border: none !important;`
  

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Links = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #000;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Toggle = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>

      <Nav>
        <Link className="logo" to="/">

          <span style={{color:"#799351"}}>9ja</span> News Api's
        </Link>
        <Menu>
          <Item>
            <Link className="nl" to="/register">
              Get Started
            </Link>
          </Item>
          <Item>
            <Link className="nl" to="/documentation">
              Documentation
            </Link >
          </Item>
          <Item>
            <Link className="nl" to="/pricing">
              pricing
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link className="nl" to="/register">
              Get Started
            </Link>
          </Item>
          <Item>
            <Link className="nl" to="/documentation">
              Documentation
            </Link>
          </Item>
          <Item>
            <Link className="nl" to="/pricing">
              pricing
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Toggle;
