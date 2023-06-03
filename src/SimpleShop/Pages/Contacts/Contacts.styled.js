import styled from "@emotion/styled";

export const DynDivContacts = styled.div`
  grid-column: 2/3;
  padding: 10px;
  display: grid;
  grid-template: 1fr/500px;
  justify-content: center;
`;
export const DynDivBlock = styled.div`
  margin-top: 60px;
  border: solid 1px #011627b0;
  padding: 15px;
  display: grid;
  grid-template: 1fr/auto 1fr;
  grid-gap: 25px;
`;
export const DynDivP = styled.div`
  & :last-child {
    color: #011627b0;
  }
`;
export const DynSmallP = styled.p`
  font-size: 14px;
`;
