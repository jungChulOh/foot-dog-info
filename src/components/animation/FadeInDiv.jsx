import styled, { css } from "styled-components";

const FadeInDiv = styled.div`
  ${(props) =>
    css`
      animation: ${props.duration}s ${props.delay}s
        ${props.topBottom && `topBottomMove`}
        ${props.leftRight && `leftRightMove`}
        ${props.rightLeft && `rightLeftMove`};
    `}

  @keyframes topBottomMove {
    from {
      transform: translateY(-100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes leftRightMove {
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes rightLeftMove {
    from {
      transform: translateX(100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export default FadeInDiv;
