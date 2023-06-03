import styled from "@emotion/styled";


export const BuyTextarea = styled.textarea`
  display: none;
`;
export const BuyUl = styled.ul`
  display: grid;
  grid-template: minmax(70px, 1fr)/ 1fr 1fr 1fr;
  border: solid 1px #011627b0;
  margin: 10px;
  justify-items: center;
  grid-gap: 10px;
  padding: 10px;
  align-items: center;
`;

export const BuyInput = styled.input`
  height: 100%;
  width: 250px;
  border: none;
  border-bottom: solid 1px #011627b0;
  outline: none;
  font-size: 20px;
`;

export const BuyH2Totol = styled.h2`
  grid-column: 2/3;
  @media (max-width: 720px) {
    grid-column: 1/2;
  }
`;