import styled, { css } from "styled-components";

const errorStyle = css`
  border-color: #ff0000;
`;

export const InputStyle = styled.input`
  ${({ hasError }) => {
    return css`
      outline: none;
      padding: 8px 0;
      margin: 10px 0;
      border-radius: 4px;
      border: 1px solid #858885;
      padding-left: 10px;

      ${hasError ? errorStyle : ""};
    `;
  }}
`;
