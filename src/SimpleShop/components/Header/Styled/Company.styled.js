import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicImgLogo = ({ gridRow = "1/3", gridColumn = "1/2" }) =>
  css`
    grid-row: ${gridRow};
    grid-column: ${gridColumn};
  `;

export const DynamicImgLogo = styled.img`
  ${dynamicImgLogo};
  width: 100%;
  cursor: pointer;
`;

const dynamicDivLogo = ({ gridTemplate = "1fr 1fr/ 70px 1fr" }) => css`
  grid-template: ${gridTemplate};
`;

export const DynamicDivLogo = styled.div`
  ${dynamicDivLogo};
  display: grid;
  justify-items: center;
  align-items: center;
`;

const dynButtonHome = ({
  color = "#011627b0",
  fill = "#ff6a00",
  fill_activ = "none",
}) => css`
  color: ${color};
  & :last-child {
    font-size: 32px;
    display: grid;
    padding: 8px;
    fill: ${fill_activ};
    transition: all 0.1s ease-out;
  }
  & :hover :last-child {
    fill: ${fill};
    color: ${fill};
  }
`;

export const DynButton = styled.button`
  display: grid;
  background-color: transparent;
  border: none;
  cursor: pointer;
  justify-content: end;
  ${dynButtonHome}
`;
// //
const dynBat = ({ bottom = "-90" }) => css`
  bottom: ${bottom}px;
`;
export const DynBat = styled.button`
  position: fixed;
  ${dynBat}
  right: 20px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #011627b0;
  width: 130px;
  transition: bottom 0.2s, opacity 0.2s;

  & :last-child {
    width: 60px;
    height: 60px;
    fill: rgb(255, 255, 255);
  }
  &:hover :last-child {
    fill: #ff6a00;
  }
  &:hover {
    fill: #ff6a00;
    background-color: #0116278a;
  }
`;

