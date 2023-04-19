import styled from "styled-components";

const Table = styled.table`
	border-spacing: 0;
	flex: 1;

	th,
	td {
		border: 0.25px solid rgba(0, 0, 0, 0.5);

		padding: 10px;
		font-weight: bold;
	}

	th {
		border-radius: 6px 0px 0px 6px;
	}

	td {
		border-radius: 0px 6px 6px 0px;
	}
`;

export default Table;
