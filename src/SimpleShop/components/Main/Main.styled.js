import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicMain = ({ gridTemplate = "1fr / 1fr minmax(auto, 1280px) 1fr" }) =>
  css`
    grid-area: main;
    display: grid;
    grid-template: ${gridTemplate};
  `;
export const DynamicMain = styled.main`
  ${dynamicMain};
`;
// //
const dynamicDiv = ({
  backgroundColor = "rgb(255, 255, 255)",
  padding = "30px 15px",
  gridColumn = "2/3",
}) =>
  css`
    background-color: ${backgroundColor};
    padding: ${padding};
    grid-column: ${gridColumn};
  `;
export const DynamicDiv = styled.div`
  ${dynamicDiv};
`;

