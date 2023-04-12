import styled from "styled-components";

const SeparatorLine = styled.hr`
	width: 100%;
	border: none;
	border-top: 1px solid #ccc;
	height: 10px;
	overflow: visible;
	color: #ccc;
	text-align: center;

	::after {
		content: "ou";
		display: inline-block;
		position: relative;
		top: -0.8em;
		font-size: 15px;
		padding: 0 0.3em;
		background: white;

		font-size: 14px;
		font-weight: 700;
		line-height: 21px;
		letter-spacing: 0.005em;
		text-align: left;
	}
`;

export default SeparatorLine;
