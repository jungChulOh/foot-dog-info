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

// CustomDiv.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.array,
//   beforeLocation: PropTypes.shape({
//     location: PropTypes.string,
//     value: PropTypes.number,
//   }),
//   afterLocation: PropTypes.shape({
//     location: PropTypes.string,
//     value: PropTypes.number,
//   }),
//   duration: PropTypes.number,
//   delay: PropTypes.number,
// };

// CustomDiv.defaultProps = {
//   className: "",
//   children: [],
//   beforeLocation: {
//     location: "x",
//     value: 0,
//   },
//   afterLocation: {
//     location: "x",
//     value: 0,
//   },
//   duration: 0,
//   delay: 0,
// };

export default FadeInDiv;
