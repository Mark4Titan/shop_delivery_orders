import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicLiHeader = ({ SC }) => {
  // console.log(item);
  switch (SC.key) {
    case "social":
      return css`
        display: grid;
        gap: 15px;
        grid-template: 1fr/1fr 1fr 1fr;

        @media (max-width: 900px) {
          visibility: hidden;
          z-index: -1;
          opacity: 0;
          display: none;
        }

        & :last-child {
          color: #011627b0;
          font-size: 32px;
          display: grid;
          transition: all 0.1s ease-out;
        }
        & :last-child:hover {
          fill: #ff6a00;
        }
      `;
    case "burger":
      return css`
        @media (min-width: 900px) {
          visibility: hidden;
          z-index: -1;
          opacity: 0;
          display: none;
        }
      `;
    case "logo":
      return css`
        width: 70px;
        height: 70px;
        border-radius: 50%;
      `;

    case "phone":
      return css`
        display: grid;

        @media (max-width: 900px) {
          visibility: hidden;
          z-index: -1;
          opacity: 0;
          display: none;
        }

        & :last-child {
          color: #011627b0;
          font-size: 19px;
          display: grid;
          transition: all 0.1s ease-out;
        }
        & :last-child:hover {
          color: #ff6a00;
        }
      `;

    case "search":
      return css`
        @media (max-width: 620px) {
          visibility: hidden;
          z-index: -1;
          opacity: 0;
          display: none;
        }
      `;
    case "like":
      return css`
        & :last-child {
          display: inline-block;
          padding: 8px;
          background-size: cover;
        }
        & :last-child:hover {
          fill: #ff6a00;
          color: #ff6a00;
        }
      `;
    case "basket":
      return css`
        & :last-child {
          display: inline-block;
          padding: 8px;
          background-size: cover;
        }
        & :last-child:hover {
          fill: #ff6a00;
          color: #ff6a00;
        }
      `;
    default:
      return css``;
  }
};

export const DynamicLiHeader = styled.li`
  ${dynamicLiHeader};
`;
// //
const dynamicUlHeader = ({
  borderBottom = "solid 1px rgb(148, 148, 148)",
  gridColumn = "2/3",
}) =>
  css`
    border-bottom: ${borderBottom};
    grid-column: ${gridColumn};
  `;

export const DynamicUlHeader = styled.ul`
  ${dynamicUlHeader};
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  padding: 0 15px;
`;
// //
const dynamicHeader = ({
  gridTemplate = "1fr / 1fr minmax(auto, 1280px) 1fr",
  backgroundColor = "rgb(255, 255, 255)",
}) =>
  css`
    position: sticky;
    top: 0;
    z-index: 10;
    grid-template: ${gridTemplate};
    background-color: ${backgroundColor};
  `;

export const DynamicHeader = styled.header`
  ${dynamicHeader};
  grid-area: header;
  /* padding: 15px 0 0 0; */
  display: grid;
`;
// //
export const AfterDiv = styled.div`
  position: absolute;
  top: calc((100vh) / 2);
`;
// //
