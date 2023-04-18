import styled from "styled-components";

const NavStyle = styled.nav`
	width: 254px;
	height: 100%;
	background: #6a0000;

	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;

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
		display: none;
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
