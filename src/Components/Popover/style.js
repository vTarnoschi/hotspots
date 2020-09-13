import styled from "styled-components";

export const PopoverWrapper = styled.div`
  .popover-content {
    display: none;
    width: 200px;
    position: absolute;
    left: ${(props) => `${props.position.left - 100}px`};
    top: ${(props) => `${props.position.top + 40}px`};

    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    background: #fff;
    box-shadow: 0px 5px 10px 0px rgba(117, 117, 117, 0.5);

    :after {
      left: 92px;
      top: -35px;
      width: 25px;
      height: 25px;
      z-index: 1;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgb(0 0 0 / 0%);
      border-bottom-color: #ffffff;
      border-width: 18px;
    }

    :before {
      content: "";
      position: absolute;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      width: 28px;
      height: 28px;
      left: 97px;
      top: -12px;
      z-index: -1;
      box-shadow: 0px 5px 10px 0px rgba(117, 117, 117, 0.5);
    }
  }

  .popover-title {
    color: #808080;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .popover-description {
    color: #a5a5a5;
    font-size: 20px;
  }

  :hover {
    .popover-content {
      display: flex;
    }
  }
`;
