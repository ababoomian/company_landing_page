import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 264px;
  position: relative;
  width: 1018px;

  & .navbar-brand {
    height: 44px;
    left: 103px;
    overflow: hidden;
    position: absolute;
    top: 13px;
    width: 142px;
  }

  & .text-wrapper {
    color: var(--light-text-color);
    font-family: "Montserrat-Bold", Helvetica;
    font-size: 18.2px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0.08px;
    line-height: 24.3px;
    position: absolute;
    top: 9px;
    white-space: nowrap;
    width: 110px;
  }

  & .collapse-navbar {
    height: 44px;
    left: 276px;
    overflow: hidden;
    position: absolute;
    top: 12px;
    width: 618px;
  }

  & .navbar-nav {
    align-items: center;
    display: inline-flex;
    gap: 15.92px;
    left: 0;
    position: absolute;
    top: 13px;
  }

  & .li {
    height: 18.19px;
    position: relative;
    width: 34.11px;
  }

  & .a {
    height: 18px;
    position: relative;
    width: 36px;
  }

  & .link {
    color: var(--light-text-color);
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 10.6px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0.15px;
    line-height: 18.2px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 34px;
  }

  & .a-wrapper {
    height: 18.19px;
    position: relative;
    width: 45.48px;
  }

  & .link-wrapper {
    height: 18px;
    position: relative;
    width: 47px;
  }

  & .div {
    color: var(--light-text-color);
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 10.6px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0.15px;
    line-height: 18.2px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 45px;
  }

  & .div-wrapper {
    height: 18.19px;
    position: relative;
    width: 40.18px;
  }

  & .a-2 {
    height: 18px;
    position: relative;
    width: 42px;
  }

  & .link-2 {
    color: var(--light-text-color);
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 10.6px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0.15px;
    line-height: 18.2px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 40px;
  }

  & .li-2 {
    height: 18.19px;
    position: relative;
    width: 44.73px;
  }

  & .navbar-nav-2 {
    align-items: center;
    display: inline-flex;
    gap: 34.11px;
    left: 390px;
    position: absolute;
    top: 2px;
  }

  & .nav-item {
    height: 16.68px;
    position: relative;
    width: 31.08px;
  }

  & .btn-text-wrapper {
    all: unset;
    box-sizing: border-box;
    height: 17px;
    position: relative;
    width: 33px;
  }

  & .btn-text {
    all: unset;
    box-sizing: border-box;
    color: var(--light-text-color);
    font-family: "Montserrat-Bold", Helvetica;
    font-size: 10.6px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0.15px;
    line-height: 16.7px;
    position: absolute;
    text-align: right;
    top: 0;
    white-space: nowrap;
    width: 31px;
  }

  & .button-btn-primary-wrapper {
    height: 39.42px;
    position: relative;
    width: 162.23px;
  }

  & .button-btn-primary {
    align-items: center;
    background-color: var(--primary-color);
    border-radius: 3.79px;
    display: inline-flex;
    gap: 11.37px;
    overflow: hidden;
    padding: 11.37px 18.95px;
    position: relative;
  }

  & .btn-text-2 {
    color: var(--light-text-color);
    font-family: "Montserrat-Bold", Helvetica;
    font-size: 10.6px;
    font-weight: 700;
    height: 16.68px;
    letter-spacing: 0.15px;
    line-height: 16.7px;
    margin-top: -0.76px;
    position: relative;
    white-space: nowrap;
    width: 103.86px;
  }

  & .icn-arrow-right-icn {
    height: 8.28px;
    margin-bottom: -7.65px;
    margin-right: -0.69px;
    position: relative;
    width: 12.95px;
  }
`;

const Header = (): React.RC => {
  return (
    <StyledHeader>
      <div className="navbar-brand">
        <div className="text-wrapper">Logo</div>
      </div>
      <div className="collapse-navbar">
        <div className="navbar-nav">
          <div className="li">
            <div className="a">
              <div className="link">Home</div>
            </div>
          </div>
          <div className="a-wrapper">
            <div className="link-wrapper">
              <div className="div">Team</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="a-2">
              <div className="link-2">Service</div>
            </div>
          </div>
          <div className="li-2">
            <div className="link-wrapper">
              <div className="div">Contact</div>
            </div>
          </div>
        </div>
        <div className="navbar-nav-2">
          <div className="button-btn-primary-wrapper">
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
export default Header