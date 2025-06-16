import React from 'react';
import styled from 'styled-components';

const NavbarButton = () => {
  return (
    <StyledWrapper>
      <a
        href="https://rayhanportfolio.super.site"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
        Contact
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    width: 110px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: rgb(250, 204, 21);
    border-radius: 30px;
    color: rgb(19, 19, 19);
    font-weight: 600;
    border: none;
    position: relative;
    cursor: pointer;
    transition-duration: .2s;
    padding-left: 8px;
    transition-duration: .5s;
    font-family: 'Mori', sans-serif;
  }

  .svgIcon {
    height: 25px;
    transition-duration: 1.5s;
  }

  .bell path {
    fill: rgb(19, 19, 19);
  }

  .button:hover {
    background-color: rgb(250, 204, 21);
    transition-duration: .5s;
  }

  .button:active {
    transform: scale(0.97);
    transition-duration: .2s;
  }

  .button:hover .svgIcon {
    transform: rotate(370deg);
    transition-duration: 1.5s;
  }`;

export default NavbarButton;
