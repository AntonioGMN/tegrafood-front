import styled from "styled-components";

const AddCupom = styled.section`
	width: 75%;
	border: 0.25px solid #000000;
	border: 0.25px solid rgba(0, 0, 0, 1);
	box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.3);

	border-radius: 8px;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	p {
		font-family: Poppins;
		font-size: 24px;
		font-weight: 700;
		line-height: 36px;
		letter-spacing: 0.5px;
		text-align: center;
		color: #223263;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export default AddCupom;
