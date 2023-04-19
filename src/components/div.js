import styled from "styled-components";

const Div = styled.div`
	height: ${(props) => (props.height ? props.height : "100%")};
	width: ${(props) => (props.width ? props.width : "100%")};

	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	${(props) => (props.gap ? "gap: 17px" : "")};

	@media (max-width: 900px) {
		padding-left: 0px;
	}
`;

export default Div;
