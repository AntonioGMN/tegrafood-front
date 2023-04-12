import { MdFilterListAlt, MdSortByAlpha } from "react-icons/md";
import styled from "styled-components";

const Section = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;

	div {
		display: flex;
		gap: 20px;
		margin: 0 20px;
	}

	p {
		font-size: 32px;
		font-weight: 700;
		line-height: 48px;
	}
`;

export default function FilterOrSortProduts() {
	return (
		<Section>
			<div>
				<p>Produtos</p>
				<p>Todos</p>
			</div>
			<div>
				<MdFilterListAlt size={35} color="#DC9000" />
				<MdSortByAlpha size={35} color="#DC9000" />
			</div>
		</Section>
	);
}
