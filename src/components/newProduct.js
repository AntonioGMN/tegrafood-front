import styled from "styled-components";

const NewProduct = styled.main`
	display: flex;
	flex-direction: column;
	align-items: ${(props) => (props.center ? "center" : "start")};
	justify-content: ${(props) => (props.justify ? props.justify : "center")};
	height: 100vh;
	width: 100vw;
	background: #6a0000;

	padding: 0 50px 50px 30px;
	letter-spacing: 0.5px;

	h1 {
		margin-bottom: 36px;
		font-size: 24px;
		font-weight: 700;
		line-height: 36px;
		text-align: center;
		color: #e5a11f;
	}

	span {
		font-size: 20px;
		font-weight: 500;
		line-height: 30px;
		color: #ffffff;
	}

	@media (max-width: 900px) {
		padding: 12px;
	}
`;

export const FormNewProduct = styled.form`
	width: 100%;
	border-radius: 15px;
	padding-left: 31px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 28px;

	@media (max-width: 900px) {
		padding: 0;

		div {
			flex-direction: column;
		}

		> div {
			&:nth-child(2) {
				flex-direction: row;
			}
		}
	}
`;

export default NewProduct;
