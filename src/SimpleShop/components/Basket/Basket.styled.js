import styled from "@emotion/styled";
import { css } from "@emotion/react";



export const DynDiv = styled.div`
  grid-template: 1fr/1fr minmax(auto, 1280px) 1fr;
  grid-column: 2/3;
  display: grid;
  grid-gap: 10px;
`;
export const DynDivContent = styled.div`
  grid-column: 2/3;
  background-color: rgb(255, 255, 255);
  padding: 40px 15px;
  display: grid;
  grid-template: 1fr/1fr minmax(auto, 880px) 1fr;
  grid-gap: 10px;
  @media (max-width: 900px) {
    padding: 40px 0px;
  }
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
export const DynDivBuy = styled.div`
  grid-column: 2/3;
  display: grid;
  border: solid 1px #011627b0;
  padding: 20px;
  justify-items: center;
  align-items: center;
`;

