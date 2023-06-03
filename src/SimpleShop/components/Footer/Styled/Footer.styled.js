import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicContainerFooter = ({
  gridTemplate = "1fr / 1fr minmax(auto, 1280px) 1fr",
}) =>
  css`
    grid-template: ${gridTemplate};
  `;

export const DynamicContainerFooter = styled.footer`
  ${dynamicContainerFooter};
  grid-area: footer;
  display: grid;
  background-color: #011627b0;
`;

const dynamicDivBlock = ({
  gridTemplate = "1fr / 1fr 1fr 1fr 1fr minmax(198px, auto)",
}) =>
  css`
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  `;
export const DynamicUlBlock = styled.ul`
  ${dynamicDivBlock}

  display: grid;
  grid-column: 2/3;
  grid-gap: 15px;
  padding: 90px 15px;
`;

export const DynamicUlItem = styled.ul`
  & :last-child {
    font-size: 19px;
    color: rgb(255, 255, 255);
    text-decoration: auto;
  }
  & :last-child:hover {
    text-decoration: revert;
    color: #ff6a00;
  }
`;

const dynamicUlItem = ({ gridColumn = "1/2" }) => css``;
export const DynamicDivFuter = styled.div`
  ${dynamicUlItem};
`;

export const DynH3 = styled.h3`
  font-size: 19px;
  padding-bottom: 10px;
  color: rgb(255, 255, 255);
`;
export const DynDivElement = styled.div`
  font-size: 19px;
  color: rgb(255, 255, 255);
`;

export const DynDiv = styled.div`
  color: rgb(255, 255, 255);
  font-size: 17px;
  padding-top: 20px;
  & :first-of-type {
    font-family: cursive;
  }
`;
export const DynDivSubscribe = styled.div`
  color: rgb(255, 255, 255);
  font-size: 17px;
  display: grid;
  grid-template: 1fr 1fr / 1fr;
  padding-bottom: 50px;
  & :first-of-type {
    padding-bottom: 20px;
  }
  & :last-child {
    color: rgb(255 255 255 / 60%);
  }
`;
export const DynDivSubscribeInput = styled.div`
  display: grid;
  grid-template: 1fr/ 1fr 40px;
  border-bottom: solid 2px;
  & :first-of-type {
    color: rgb(255 255 255 / 60%);
    min-width: 31px;
    font-size: 17px;
    border: none;
    outline: none;
    background-color: transparent;
    padding-bottom: 0px;
    margin-bottom: -10px;
  }
  & :last-child {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  & :last-child:hover {
    color: #ff6a00;
    fill: #ff6a00;
  }
`;
export const DynDivIco = styled.div`
  color: rgb(255, 255, 255);
  font-size: 17px;
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  padding-bottom: 50px;

  & :first-of-type {
    color: rgb(255, 255, 255);
    font-size: 32px;
    display: grid;
    -webkit-transition: all 0.1s ease-out;
    transition: all 0.1s ease-out;
  }
  & :last-child:hover {
    fill: #ff6a00;
  }
`;

const dynamicLi = ({ gridColumn }) =>
  gridColumn &&
  css`
  @media (max-width: 1106px) {
    grid-column: ${gridColumn};
  }
  @media (max-width: 461px) {
    grid-column: 1/2;
  }
  `;
export const DynLi = styled.li`
  ${dynamicLi};
`;
