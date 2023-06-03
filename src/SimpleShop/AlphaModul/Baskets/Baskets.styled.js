import styled from "@emotion/styled";

export const DynUl = styled.ul`
  // margin-bottom: 30vh;
  background-color: rgb(255, 255, 255);
  border: solid 1px rgb(148, 148, 148);
  grid-column: 2/3;
  display: grid;
  &:last-child {
    border-bottom: none;
  }
`;
export const DynLi = styled.li`
  display: grid;
  grid-gap: 10px;
  grid-template: 100px / 60px 300px 1fr 1fr 1fr;
  padding: 15px;
  border-bottom: solid 1px rgb(148, 148, 148);
  align-items: center;
  justify-items: center;
  @media (max-width: 720px) {
    grid-template: 1fr/1fr;
  }
`;
export const DynLiTotal = styled.li`
  padding: 15px;
  border-bottom: solid 1px rgb(148, 148, 148);
  align-items: center;
  justify-items: center;
  @media (max-width: 720px) {
    grid-template: 1fr/1fr;
  }
`;

export const DynImg = styled.img`
  width: 70px;
  @media (max-width: 720px) {
    width: 155px;
  }
`;
export const DynButtonTotol = styled.button`
  grid-column: 4/6;
  width: 70%;
  height: 70%;
  @media (max-width: 720px) {
    grid-column: 3/4;
    width: 140px;
    height: 70px;
    grid-row: 3;
    grid-column: 1/-1;
  }
`;

