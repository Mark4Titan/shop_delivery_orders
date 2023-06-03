import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicDivSearch = ({ gridTemplate = "1fr/ 1fr 40px" }) =>
  css`
    display: grid;
    grid-template: ${gridTemplate};
  `;

export const DynamicDivSearch = styled.div`
  ${dynamicDivSearch};
  cursor: pointer;
  justify-items: center;
  border-bottom: solid 2px;
`;

const dynamicInputSearch = ({ width = "170", fontSize = "20" }) =>
  css`
    width: ${width}px;
    font-size: ${fontSize}px;
  `;

export const DynamicInputSearch = styled.input`
  ${dynamicInputSearch};
  border: none;
  outline: none;

`;
