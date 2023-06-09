import styled from "styled-components";

const BaseButton = styled.button`
	all: unset;
	width: ${(props) => (props.width ? props.width : "140px")};
	height: 50px;
	margin-top: 6px;
	background: ${(props) => (props.shopping ? "#6a0000" : "#dc9000")};
	border-radius: 5px;
	box-shadow: 0px 4px 4px 0px #00000040;
	cursor: pointer;

	position: relative;

	font-size: 20px;
	font-weight: 500;
	line-height: 20px;
	letter-spacing: 0.5px;
	text-align: center;
	color: white;
`;

export default BaseButton;
