import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

export const DynamicH1Error = styled.h1`
  padding-top: 100px;
  font-size: 40px;
  width: 100%;
  display: grid;
  justify-items: center;
`;

const dynamicP = ({ backgroundColor = "rgb(255, 255, 255)" }) =>
  css`
    grid-column: 2/3;
    background-color: ${backgroundColor};
    padding-top: 40px;
    font-size: 20px;
    width: 100%;
    display: grid;
    justify-items: center;
  `;

export const DynamicP = styled.p`
  ${dynamicP};
`;

const dynamicDiv = ({
  gridColumn = "2/3",
  backgroundColor = "rgb(255, 255, 255)",
}) =>
  css`
    width: 100%;
    grid-column: ${gridColumn};
    background-color: ${backgroundColor};
    // display: flex;
    // flex-direction: column;
    // align-items: center;
  `;

export const DynamicDiv = styled.div`
  ${dynamicDiv};
`;

export const Link = styled(NavLink)`
  padding-top: 10px;
  cursor: pointer;
  // text-decoration: none;
  font-size: 28px;
  color: #011627b0;
  font-family: fantasy;
`;
