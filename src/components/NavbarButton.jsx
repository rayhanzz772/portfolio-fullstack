import React from 'react';
import styled from 'styled-components';

const NavbarButton = () => {
  return (
    <StyledWrapper>
      <a
        href="mailto:rayhanzz772@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
        <span className="text">Contact</span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(250, 204, 21);
    border-radius: 30px;
    color: rgb(19, 19, 19);
    font-weight: 600;
    border: none;
    position: relative;
    cursor: pointer;
    transition-duration: 0.5s;
    padding: 0 16px;
    font-family: 'Mori', sans-serif;
    gap: 10px;
  }

  .svgIcon {
    height: 25px;
    transition-duration: 1.5s;
  }

  .button:hover {
    background-color: rgb(250, 204, 21);
  }

  .button:active {
    transform: scale(0.97);
    transition-duration: 0.2s;
  }

  .button:hover .svgIcon {
    transform: rotate(370deg);
    transition-duration: 1.5s;
  }

  /* ✅ Mobile (show only icon) */
  @media (max-width: 640px) {
    .text {
      display: none;
    }
    .svgIcon {
      display: block;
    }
  }

  /* ✅ Desktop (show only text) */
  @media (min-width: 641px) {
    .svgIcon {
      display: none;
    }
    .text {
      display: block;
    }
  }
`;

export default NavbarButton;
