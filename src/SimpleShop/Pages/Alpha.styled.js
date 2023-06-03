import styled from "@emotion/styled";

export const DynContent = styled.div`
  display: grid;
  grid-template: 1fr/1fr minmax(auto, 1100px) 1fr;
  font-size: 20px;
`;

export const DynH2 = styled.h2`
  grid-column: 2/3;
  display: grid;
  justify-items: center;
  font-size: 40px;
`;
export const DynH3 = styled.h3`
  grid-column: 2/3;
  padding-top: 20px;
`;
export const DynH4 = styled.h4`
  grid-column: 2/3;
  display: grid;
  justify-items: center;
  padding-top: 40px;
  padding-bottom: 20px;
`;
export const DynP = styled.p`
  grid-column: 2/3;
  justify-content: start;
  padding: 10px 0px;
`;
export const DynPCenter = styled.p`
  grid-column: 2/3;
  display: grid;
  // padding: 10px 0px;
  justify-items: center;
`;
export const DynUl = styled.ul`
  grid-column: 2/3;
  display: grid;
  justify-content: start;
  list-style: disc;
  padding: 0 50px;
  &:last-child {
    padding-bottom: 0px;
  }
`;
export const DynLi = styled.li`
padding: 5px 0;
`;

