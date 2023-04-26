import styled from "styled-components";

const FinishBuysection = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 95%;
	gap: 25px;

	a {
		font-size: 20px;
		font-weight: 500;
		line-height: 30px;
		letter-spacing: 0.5px;
		color: #223263;
		text-decoration: underline;
	}

	@media (max-width: 900px) {
		width: 95%;
	}
`;

export default FinishBuysection;
