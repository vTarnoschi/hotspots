import styled, { css } from "styled-components";

const pulseAnimation = css`
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

export const HotspotsWrapper = styled.div`
  ${({ left, top }) => css`
    background: rgba(255, 82, 82, 1);
    position: absolute;
    top: ${top}px;
    left: ${left}px;

    border-radius: 50%;
    height: 20px;
    width: 20px;

    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse 2s infinite;

    ${pulseAnimation};
  `}
`;
