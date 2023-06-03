import styled from "@emotion/styled";

export const DynDivForm = styled.div`
  grid-template: 1fr/1fr minmax(auto, 1280px) 1fr;
  display: grid;
  grid-gap: 10px;
`;
export const DynDivCenter = styled.div`
  background-color: rgb(255, 255, 255);
  grid-column: 2/3;
  padding: 50px;
  display: grid;
  grid-gap: 10px;
  @media (max-width: 1106px) {
    padding: 15px;
  }
`;
export const DynDivContent = styled.div`
  background-color: rgb(255, 255, 255);
  border: solid 1px #011627b0;
  justify-items: center;
  display: grid;
  padding: 20px 20px 200px 20px;
  grid-template: auto 1fr / repeat(1, minmax(60px, 400px) 1fr);
  grid-template-areas:
    "name name"
    "Imgdiv  Infodiv"
    "Imgdiv  Infodiv";
  @media (max-width: 1106px) {
    // grid-template: 1fr / minmax(60px, 400px);
    grid-template-areas:
      "name name"
      "Imgdiv Imgdiv"
      "Infodiv Infodiv";
    padding: 15px;
  }
`;

export const DynName = styled.h2`
  background-color: rgb(255, 255, 255);
  border-bottom: solid 1px #011627b0;
  display: grid;
  padding: 15px 15px;
  margin: 0 0 30px 0;
  align-items: center;
  justify-content: center;
  grid-area: name;
  font-size: 40px;
  @media (max-width: 960px) {
    font-size: 30px;
  }
`;
export const DynImg = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
`;
export const DynDivImg = styled.div`
  grid-area: Imgdiv;
  position: relative;
  align-items: center;
`;
export const DynInfo = styled.div`
  padding: 30px 15px;
  grid-area: Infodiv;
  display: grid;
  justify-items: center;
  align-items: center;
`;
export const DynDop = styled.div`
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  grid-template: 1fr / repeat(3, minmax(60px, 160px));
  @media (max-width: 640px) {
    grid-template: 1fr / repeat(1, 100%);
  }
`;
export const DynDivButtons = styled.div`
  display: grid;
  grid-gap: 15px;
  padding-top: 30px;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  grid-template: 1fr / repeat(2, minmax(60px, 160px));
  @media (max-width: 640px) {
    grid-template: 1fr / repeat(1, 100%);
  }
`;
