import styled from "styled-components";

const BoxPriceFilter = styled.section`
	width: 463px;
	height: 135px;

	display: ${(props) => (props.hide ? "none" : "flex")};
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	height: 135px;
	width: 463px;
	left: 0px;
	top: 0px;
	border-radius: 10px;
	box-shadow: 0px 4px 4px 0px #00000040;

	background: #ffffff;

	position: fixed;
	top: 120px;
	left: 600px;

	p {
		width: 100%;
		color: #000000;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0.5px;
		text-align: center;
	}

	div {
		display: flex;
	}

	button {
		height: 44px;
		width: 115px;
		border-radius: 6px;
		background: #dc9000;
		border: none;
		border-radius: 12px;
		cursor: pointer;

		color: #ffffff;
	}

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export default BoxPriceFilter;
