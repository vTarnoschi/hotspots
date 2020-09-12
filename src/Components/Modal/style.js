import styled, { css } from "styled-components";

const fadeInAnimation = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalWrapper = styled.div`
  ${({ position, visible }) => {
    const { left, top } = position;

    return css`
      padding: 10px;
      display: ${visible ? "block" : "none"};
      width: 350px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0px 5px 10px 0px rgba(117, 117, 117, 0.5);
      position: absolute;
      z-index: 3;
      left: ${left}px;
      top: ${top}px;
      animation: fadeIn 0.2s ease-in;

      .modal-title {
        padding: 10px;
        color: #808080;
        border-bottom: 1px solid #dedede;
        font-size: 20px;
        font-weight: 700;
        display: flex;

        span {
          flex: 1;
        }

        .close {
          cursor: pointer;

          :hover {
            opacity: 0.8;
          }
        }
      }

      .modal-content {
        padding: 10px;
      }

      ${fadeInAnimation};
    `;
  }}
`;

export default ModalWrapper;
