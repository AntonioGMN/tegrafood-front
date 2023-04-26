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

	section {
		height: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	label,
	input,
	p {
		font-size: 12px;
		font-weight: 500;
		line-height: 18px;
		letter-spacing: 0.5px;
		text-align: start;
		color: #00000080;
	}

	label {
		display: flex;
		align: center;
		justify-content: space-between;
	}

	input {
		border: none;
		outline: none;
	}
`;

export const InputImage = styled.div`
	width: 40vw;
	height: 262px;

	border: 1px dashed #e5a11f;
	border-radius: 5px;
	background: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	img {
		height: 90%;
	}

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

	@media (max-width: 900px) {
		width: 100%;
	}
`;

export default DivInput;
