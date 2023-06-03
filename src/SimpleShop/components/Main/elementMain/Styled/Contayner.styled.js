import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

const dynamicDiv = ({ gridRow = "2 / 3" }) =>
  css`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    grid-row: ${gridRow};

    &::before {
      display: grid;
      content: attr(data-description);
      position: absolute;
      padding: 10px;
      top: 0;
      left: 0;
      width: calc(100% - 20px);
      height: 95%;
      align-items: center;
      transition: all 0.1s ease-out;
      grid-row: ${gridRow};
      visibility: hidden;
      z-index: -1;
      opacity: 0;
      /* From https://css.glass */
      background: rgba(255, 255, 255, 0.52);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(11px);
      -webkit-backdrop-filter: blur(11px);
      border: 1px solid rgba(255, 255, 255, 0.36);
    }
    &:hover:before {
      opacity: 1;
      visibility: visible;
      z-index: 1;
    }
  `;

export const DynamicDiv = styled.div`
  ${dynamicDiv};
`;
export const DynamicDivIco = styled.div`
  display: grid;
  grid-template: 100% /1fr 1fr;
  align-items: center;
`;
export const DynamicH3 = styled.h3`
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 19px;
  padding-top: 15px;
`;
export const Link = styled(NavLink)`
  color: black;
`;

