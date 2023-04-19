import styled from "styled-components";

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${(props) => (props.center === true ? "center" : "start")};
	height: 100vh;
	width: 100%;

	padding: ${(props) => (props.padding !== null ? "0 12px" : "none")};

	position: relative;

	@media (max-width: 900px) {
		gap: 15px;
	}
`;

export default Container;
