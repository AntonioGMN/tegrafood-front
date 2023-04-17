import styled from "styled-components";

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;

	padding: ${(props) => (props.padding ? "0 12px" : "none")};

	position: relative;

	@media (max-width: 900px) {
		justify-content: center;
		gap: 15px;
	}
`;

export default Container;
