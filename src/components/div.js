import styled from "styled-components";

const Div = styled.div`
	height: 100%;
	width: 100%;
	padding-left: 254px;
	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};

	@media (max-width: 900px) {
		padding-left: 0px;
	}
`;

export default Div;
