import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynDiv = ({
  background_color = "none",
  grid_template = "1fr/1fr minmax(auto, 1280px) 1fr",
  padding = "0px 0px",
}) =>
  css`
    grid-template: ${grid_template};
    padding: ${padding};
    background-color: ${background_color};
  `;

export const DynDiv = styled.div`
  ${dynDiv};
  grid-column: 2/3;
  display: grid;
  grid-gap: 10px;
`;
const dynh2 = ({ padding_bottom = "0" }) =>
  css`
    padding-bottom: ${padding_bottom};
  `;
export const DynH2 = styled.h2`
  grid-column: 2/3;
  background-color: rgb(255, 255, 255);
  display: grid;
  padding: 20px 15px;
  align-items: center;
  justify-content: center;
  ${dynh2}
`;