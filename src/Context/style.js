import styled, { css } from "styled-components";

const inspectCss = css`
  cursor: crosshair;

  * {
    :hover {
      border: 1px solid #ff8080;
    }
  }

  .delete-action {
    pointer-events: none;
  }
`;

const AppWrapper = styled.div`
  ${({ inspect }) => {
    return css`
      width: 100%;
      height: 100%;
      position: relative;

      ${inspect ? inspectCss : ""}
    `;
  }}
`;

export default AppWrapper;
