import styled, { keyframes } from "styled-components";

const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const BuyProductAlert = styled.div`
	height: 66px;
	width: 573px;

	overflow: hidden;

	display: ${(props) => (props.show ? "flex" : "none")};
	justify-content: space-around;
	align-items: center;

	background: #223263;
	position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;	
	z-index: 1; */
	margin-bottom: 25px;
	animation: ${slideUpAnimation} 0.5s ease-in-out;

	p {
		font-size: 16px;
		font-weight: 500;
		line-height: 29px;
		letter-spacing: 0.5px;
		text-align: left;
		color: #ffffff;
	}

	a, span {
		color: #e5a11f;
	}
`;

export default BuyProductAlert;
