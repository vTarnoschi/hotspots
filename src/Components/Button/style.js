import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  ${({ space }) => {
    const { top, bottom, left, right } = space;

    return css`
      min-width: 200px;
      padding: 12px 14px;
      border-radius: 20px;
      outline: none;
      border: none;
      background: #0fc0c7;
      color: #ffffff;
      font-weight: 600;

      margin-top: ${top}px;
      margin-bottom: ${bottom}px;
      margin-left: ${left}px;
      margin-right: ${right}px;

      transition: opacity 0.2s ease-in-out;

      :hover {
          opacity: 0.7;
          cursor: pointer;
      }
    `;
  }}
`;
