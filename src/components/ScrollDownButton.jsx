import React from 'react';
import styled from 'styled-components';

const ScrollDownButton = () => {
  return (
    <StyledWrapper>
      <a
        href="https://rayhanportfolio.super.site"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-md hover:bg-yellow-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        See Projects
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
