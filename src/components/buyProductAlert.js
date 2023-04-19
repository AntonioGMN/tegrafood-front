import styled, { keyframes } from "styled-components";

const slideUpAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const BuyProductAlert = styled.div`
	max-height: 66px;
	max-width: 573px;

	display: flex;
	background: #223263;
	position: fixed;
	bottom: 0px;
	left: 25%;
	z-index: 1; */
	margin: auto;
	animation: ${slideUpAnimation} 1s ease-in-out;

	p {
		font-size: 16px;
		font-weight: 500;
		line-height: 29px;
		letter-spacing: 0.5px;
		text-align: left;
		color: #ffffff;
	}

	a {
		color: #e5a11f;
	}
`;

export default BuyProductAlert;
