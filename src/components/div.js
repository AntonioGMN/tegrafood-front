import styled from "styled-components";

const Div = styled.div`
	height: ${(props) => (props.height ? props.height : "auto")};
	width: ${(props) => (props.width ? props.width : "auto")};

	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	justify-content: ${(props) => props.justify};
	align-items: ${(props) => props.aligh};
	${(props) => props.glow && "flex-grow: 1"};
	${(props) => props.gap && "gap: 17px"};

	@media (max-width: 900px) {
		padding-left: 0px;
	}
`;

export default Div;
