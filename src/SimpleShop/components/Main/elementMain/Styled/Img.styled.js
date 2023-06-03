import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicImg = ({
  padding = "5% 0 15% 0",
}) =>
  css`
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    /* height: 100%; */
    padding: ${padding};
  `;
export const DynamicImg = styled.img`
  ${dynamicImg};
`;
