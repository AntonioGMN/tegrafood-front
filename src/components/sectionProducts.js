import styled from "styled-components";

const SectionProducts = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 9px;
	flex: 1;

	/* border: 1px solid red; */
	padding-bottom: 80px;

	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 6px;
		background-color: #f5f5f5;
	}
	::-webkit-scrollbar-thumb {
		background-color: #ccc;
	}
`;

export const Article = styled.article`
	min-height: 128px;
	width: 100%;

	border: 0.25px solid #000000;
	box-shadow: 3px 3px 8px 1px #0000004d;
	border-radius: 8px;
	padding: 0 13px;

	display: flex;
	align-items: center;
	justify-content: space-around;

	:last-child {
		margin-bottom: 20px;
	}

	div {
		display: flex;
		height: 65px;
		flex-direction: column;

		:first-of-type {
			flex-grow: 1;
			margin-left: 20px;
		}
	}

	img {
		height: 100px;
		width: 96px;

		border-radius: 50px;
		box-shadow: 0px 0px 0px 0px #00000040;
		background: node;

		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	p {
		font-size: 24px;
		font-weight: 700;
		line-height: 36px;
		color: #223263;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		:last-child {
			font-size: 16px;
			font-weight: 500;
			line-height: 29px;
			letter-spacing: 0.5px;
			text-align: left;
			color: #00000080;
		}
	}

	span {
		font-size: 20px;
		font-weight: 700;
		line-height: 30px;
		letter-spacing: 0.5px;
		text-align: center;
		color: #223263;
	}

	button {
		all: unset;
		height: 50px;
		width: 140px;
		margin-top: 6px;
		background: #dc9000;
		border-radius: 5px;
		box-shadow: 0px 4px 4px 0px #00000040;
		cursor: pointer;

		font-size: 20px;
		font-weight: 500;
		line-height: 30px;
		letter-spacing: 0.5px;
		text-align: center;
		color: white;
	}
`;

export default SectionProducts;
