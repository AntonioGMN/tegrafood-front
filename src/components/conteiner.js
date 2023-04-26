import styled from "styled-components";

const Container = styled.main`
	height: 100vh;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: ${(props) => (props.center === true ? "center" : "start")};
	justify-content: ${(props) => (props.justify ? props.justify : "center")};

	padding: ${(props) => (props.padding !== null ? "0 12px" : "none")};
	position: relative;
	overflow: hidden;

	@media (max-width: 900px) {
		gap: 15px;
	}
`;

export default Container;
