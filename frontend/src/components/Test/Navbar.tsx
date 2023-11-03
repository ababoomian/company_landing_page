import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Update from './Update';
import Calendar from './Calendar';

interface NavState {
  isNavOpen: boolean;
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #252b42c4;
  padding: 10px 20px;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const CenteredContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const NavLinks : NavState = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    display: ${(props) => (props.isnavOpen ? 'block' : 'none')};
  }
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.2s ease-in-out, font-size 0.2s ease-in-out;
    position: relative;

    &:hover {
      color: aqua;
      font-size: 1.2em;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: blue;
      transform: scaleX(0);
      transform-origin: 100% 50%;
      transition: transform 0.2s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: 800px) {
    display: block;
    background: none;
    border: none;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    outline: none;
  }
`;
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import Pricing from './Pricing';

const Navbar: React.FC = () => {
  const [IsNavOpen, setIsNavOpen] = useState<NavState>({
    isNavOpen: false,
  });

  const isOpen = IsNavOpen.isNavOpen;
  const toggleNav = () => {
    setIsNavOpen({ isNavOpen: !isOpen });
  };

   return (
    <NavbarContainer>
      <Logo src="/your-logo.png" alt="Logo" />
      <MobileMenuButton onClick={toggleNav}>☰</MobileMenuButton>
      <CenteredContent>
        <NavLinks isnavOpen={IsNavOpen}>
          <NavLink>
            <a href="/">Home</a>
          </NavLink>
          <NavLink>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={800}
            onClick={Update}
          >
            About
          </Link>
            {/* <a  onClick={Update}>About</a> */}
          </NavLink>
          <NavLink>
          <Link
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            duration={800}
            onClick={Pricing}
          >
            Services
          </Link>
          </NavLink>
          <NavLink>
            <a href="/contact">Contact</a>
          </NavLink>
        </NavLinks>
      </CenteredContent>
    </NavbarContainer>
  );
};

export default Navbar;
