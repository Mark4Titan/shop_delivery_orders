import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const DynDivSlider = styled.div`
  position: relative;
  display: grid;
  grid-template: auto 40px/ 1fr;
  grid-gap: 10px;
  padding-bottom: 40px;
  @media (max-width: 440px) {
    padding-bottom: 15px;
  } ;
`;

export const DynDivDots = styled.div`
  grid-row: 2/3;
  display: grid;
  grid-template: auto / repeat(auto-fit, 40px);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;
// //
const dinDots = ({ width = "10" }) =>
  css`
    width: ${width}px;
  `;

export const DynDivDot = styled.div`
  cursor: pointer;
  border: solid 2px #011627b0;
  ${dinDots}
  height: 3px;
  padding: 2px;
  border-radius: 20px;
  background-color: #011627b0;
  transition: all 0.1s ease-out;
  &:hover {
    width: 28px;
  }
`;

// //
const dinDispley = ({ opacity = 0 }) =>
  css`
 
    display: ${opacity === "0" ? "none" : "block"};
    
    // opacity: ${opacity};
  `;

export const DynImgSlider = styled.img`
  grid-row: 1/2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: display;
  ${dinDispley}
  // transition: all 3s ease-out;
  animation: showNav 250ms ease-in-out both;
  @keyframes showNav {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  } ;
`;
