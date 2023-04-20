import styled from "styled-components";

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: ${(props) => (props.center === true ? "center" : "start")};
	justify-content: ${(props) => (props.justify ? props.justify : "center")};
	height: 100vh;
	width: 100%;
	overflow: hidden;

	padding: ${(props) => (props.padding !== null ? "0 12px" : "none")};

	position: relative;

	@media (max-width: 900px) {
		gap: 15px;
	}
`;

export default Container;
