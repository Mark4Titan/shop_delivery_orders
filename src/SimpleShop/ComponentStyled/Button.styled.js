import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicButton = ({
  color = "cornsilk",
  colorHov = "cornsilk",
  fontSize = "22",
  backgroundColorHov = "hotpink",
  backgroundColor = "hotpink",
  borderRadius = "15",
  borderSolid = "cornsilk",
  width = "180",
  width_hover = "180",
}) =>
  css`
    font-size: ${fontSize}px;
    border-radius: ${borderRadius}px;
    background-color: ${backgroundColor};
    color: ${color};
    font-weight: bold;
    width: ${width}px;
    height: 50px;
    display: grid;
    justify-items: center;
    align-items: center;
    transition: all 0.1s ease-out;
    cursor: pointer;
    border: 1px solid ${borderSolid};

    &:hover {
      color: ${colorHov};
      border: none;
      width: ${width_hover}px;
      background-color: ${backgroundColorHov};
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }
  `;

export const DynamicButton = styled.button`
  ${dynamicButton}; 

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
