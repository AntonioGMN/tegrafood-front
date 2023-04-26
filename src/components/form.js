import styled from "styled-components";

export const Form = styled.form`
	width: 343px;
	border-radius: 15px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 28px;

	font-size: 12px;
	font-weight: 700;
	line-height: 18px;
	letter-spacing: 0.5px;
	text-align: center;

	a {
		width: 100%;
		color: #9098b1;
	}

	span {
		color: #40bfff;
	}

	div {
		height: 48px;
		width: 100%;

		border: 1px solid #ebf0ff;
		border-radius: 5px;

		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 16px;
		gap: 12px;
	}

	input {
		width: 100%;
		border: none;
		outline: none

		&:focus {
			outline: none;
			font-weight: normal;
		}
	}

	@media (max-width: 900px) {
		width: 100%;

		align-items: start;
	}
`;
