import styled from "styled-components";

const Table = styled.table`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	border-spacing: 0;

	th,
	td {
		height: 54px;
		border: 0.25px solid rgba(0, 0, 0, 0.5);

		padding: 10px;
		font-weight: 700;
		text-align: center;
	}

	th {
		width: 224px;
		border-radius: 6px 0px 0px 6px;
		font-size: 12px;
		line-height: 18px;
	}

	td {
		width: 180px;
		border-radius: 0px 6px 6px 0px;
		font-size: 20px;
		line-height: 30px;
		color: #223263;
	}
`;

export default Table;
