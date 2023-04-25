import styled from "styled-components";

const DivInput = styled.div`
	height: ${(props) => (props.height ? props.height : "46px")};
	width: ${(props) => (props.width ? props.width : "auto")};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 5px;

	background: #ffffff;
	border: 0.5px solid #0000004d;
	border-radius: 5px;

	label,
	input {
		font-size: 12px;
		font-weight: 500;
		line-height: 18px;
		letter-spacing: 0.5px;
		text-align: start;
		color: #00000080;
	}

	input {
		border: none;
		outline: none;
	}
`;

export const InputImage = styled.div`
	width: 40vw;

	border: 1px dashed #e5a11f;
	background: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	span,
	p {
		color: #00000080;
		font-size: 14px;
		font-weight: 500;
		line-height: 21px;
		letter-spacing: 0.5px;
		text-align: center;
	}

	input {
		display: none;
	}
`;

export default DivInput;
