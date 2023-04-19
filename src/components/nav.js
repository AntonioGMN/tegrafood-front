import styled, { keyframes } from "styled-components";

const slideRightAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const NavStyle = styled.nav`
	width: 254px;
	height: 100%;
	background: #6a0000;

	display: flex;
	flex-direction: column;

	img {
		height: 140px;
		width: 170px;
		margin: 42px 34px;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 900px) {
		display: ${(props) => (props.show === true ? "flex" : "none")};
		animation: ${slideRightAnimation} 1s ease-in-out;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
`;

export const SelectedButton = styled.button`
	height: 45px;
	width: 254px;
	border: 1px solid #ffffff;
	box-shadow: 0px 2px 4px 0px #00000026;
	cursor: pointer;

	background: ${(props) => (props.selected ? "#e5a11f" : "#6a0000")};

	font-size: 18px;
	font-weight: 500;
	line-height: 27px;
	text-align: center;
	color: #ffffff;
`;

export default NavStyle;
