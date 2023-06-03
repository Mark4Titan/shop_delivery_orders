import styled from "@emotion/styled";

export const DynamicButIco= styled.button`
  border: none;
  background-color: transparent;

  & :last-child {
    width: 24px;
    height: 24px;
    display: inline-block;
    padding: 8px;
    background-size: cover;
  }
  & :last-child:hover {
    fill: #ff6a00;
    color: #ff6a00;
  }
`;
