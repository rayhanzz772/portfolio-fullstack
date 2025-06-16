import React from 'react';
import styled from 'styled-components';

const ScrollDownButton = () => {
  return (
    <StyledWrapper>
      <a
        href="https://rayhanportfolio.super.site"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        <svg viewBox="0 0 384 512" className="svgIcon">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(20, 20, 20);
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.25);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
    transform: rotate(180deg); /* Menambahkan ini untuk membalik panah ke bawah */
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: rgb(250, 204, 21);
    align-items: center;
  }

  .button:hover .svgIcon {
    /* width: 20px; */
    transition-duration: 0.3s;
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "See Projects";
    color: black;
    /* transition-duration: .3s; */
    font-size: 0px;
  }

  .button:hover::before {
    font-size: 16px;
    opacity: 1;
    bottom: unset;
    /* transform: translateY(-30px); */
    transition-duration: 0.3s;
  }`;

export default ScrollDownButton;
