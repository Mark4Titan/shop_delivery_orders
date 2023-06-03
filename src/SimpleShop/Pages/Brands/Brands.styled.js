import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const DynContent = styled.div`
  display: grid;
  grid-template: 1fr/1fr minmax(auto, 1100px) 1fr;
  font-size: 20px;
`;

export const DynUl = styled.ul`
  //   grid-column: 2/3;
  display: grid;
  grid-template: 1fr / repeat(4, 220px);
  grid-gap: 30px;
  justify-content: start;
  list-style: disc;
  padding: 0 50px;
  &:last-child {
    padding-bottom: 0px;
  }
`;

const dynDivBorder = ({
  grid_column = "auto",
}) =>
  css`
    grid-column: ${grid_column};
  `;

export const DynDivBorder = styled.div`
  ${dynDivBorder}
  border: solid 1px #011627b0;
  margin: 5px 0;
  padding: 10px;
  list-style: none;
  display: grid;
  justify-items: center;
  margin-top: 50px; 
`;