import styled from "@emotion/styled";
import { css } from "@emotion/react";
// //
const dynDiv = ({
  grid_column = "2/3",
  grid_template = "1fr/repeat(auto-fit, minmax(300px, 1fr))",
  border = "none",
  padding_bottom = "10",
}) =>
  css`
    grid-column: ${grid_column};
    grid-template: ${grid_template};
    // padding-top: 20px;
    padding-bottom: ${padding_bottom}px;
    border: ${border};
  `;
export const DynDiv = styled.div`
  display: grid;
  grid-gap: 5px;
  padding: 10px;
  ${dynDiv}
`;
// //
export const DynImg = styled.img`
  display: grid;
  grid-row: 1/3;
//   padding-left: 50px;
`;
export const DynUl = styled.ul`
  padding-top: 10px;
  grid-column: 1/3;
`;
// //
const dynLi = ({ grid_template = "auto/1fr 1fr" }) =>
  css`
    grid-template: ${grid_template};
  `;
export const DynLi = styled.li`
  display: grid;  
  grid-gap: 25px;
  ${dynLi};
`;
// 
export const DynUlPay = styled.ul`
  padding-top: 40px;
  display: grid;
  grid-template: minmax(auto, 120px) / repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
`;
export const DynILiPay = styled.li`
  display: grid;
  justify-items: center;  
  padding-bottom: 30px;
  grid-gap: 2px;
`;
export const DynImgPay = styled.img`
  display: grid;
  grid-row: 1/3;
  height: 47px;
  padding-bottom: 15px;
`;