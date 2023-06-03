import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";


const link = ({
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

export const Link = styled(NavLink)`
  display: grid;
  background-color: transparent;
  border: none;
  cursor: pointer;
  justify-content: end;
  ${link}
`;

const linkHome = ({ color = "#011627b0" }) => css`
  color: ${color};
`;

export const LinkHome = styled(NavLink)`
  ${linkHome};

  text-decoration: none;
`;
