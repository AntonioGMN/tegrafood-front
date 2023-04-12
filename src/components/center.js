import styled from "styled-components";

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;

	@media (max-width: 700px) {
		justify-content: center;
		gap: 15px;
	}
`;

export default Container;
