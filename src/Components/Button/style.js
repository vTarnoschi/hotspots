import styled, { css } from "styled-components";

const disabledCss = css`
  opacity: 0.5;
  pointer-events: none;
`;

export const ButtonWrapper = styled.button`
  ${({ space, disabled, size }) => {
    const { top, bottom, left, right } = space;

    return css`
      width: ${size}px;
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

      ${disabled ? disabledCss : ""}

      :hover {
          opacity: 0.7;
          cursor: pointer;
      }
    `;
  }}
`;
