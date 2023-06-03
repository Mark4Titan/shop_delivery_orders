import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicUl = ({
  gap = "10",
  gridTemplateColumns = "auto-fit, minmax(250px, 1fr)",
}) =>
  css`
    position: relative;
    display: grid;
    gap: ${gap}px;
    grid-template-columns: repeat(${gridTemplateColumns});
  `;

export const DynamicUl = styled.ul`
  ${dynamicUl};
`;

const dynamicLi = ({
  padding = "10",
  gridTemplate = "auto 1fr 20px 90px / auto",
  borderRadius = "16",
  border = "1px solid rgba(255, 255, 255, 0.36)",
}) =>
  css`
    position: relative;
    padding: ${padding}px;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template: ${gridTemplate};

    background: rgba(255, 255, 255, 0.14);
    border-radius: ${borderRadius}px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border: ${border};
  `;

export const DynamicLi = styled.li`
  ${dynamicLi};
`;
