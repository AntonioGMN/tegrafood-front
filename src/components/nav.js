import styled from "styled-components";

const NavStyle = styled.nav`
	width: 254px;
	height: 100vh;
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

	button {
		height: 45px;
		width: 254px;
		border: 1px solid #ffffff;
		box-shadow: 0px 2px 4px 0px #00000026;

		background: #6a0000;
		font-size: 18px;
		font-weight: 500;
		line-height: 27px;
		text-align: center;
		color: #ffffff;
	}
`;

export default NavStyle;
