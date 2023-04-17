import { useState } from "react";
import { MdFilterListAlt, MdSortByAlpha } from "react-icons/md";
import styled from "styled-components";
import BoxPriceFilter from "../../components/selectFilterPrice";

const Section = styled.section`
	width: calc(100% - 254px);
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
	padding: 20px 35px 0 43px;
	background: white;

	position: fixed;
	top: 40px;
	right: 0;
	z-index: 1;

	div {
		display: flex;
		gap: 20px;
	}

	p {
		font-size: 32px;
		font-weight: 700;
		line-height: 48px;
	}

	@media (max-width: 900px) {
		width: 100%;
	}
`;

export default function FilterOrSortProduts({
	filters,
	setFilters,
	setPriceFilter,
}) {
	const [hide, setHide] = useState(true);

	function handlerFilterPrice(start, end) {
		setPriceFilter({ start, end });
		setHide(!hide);
		setFilters({ ...filters, byPrice: true });
	}

	return (
		<Section>
			<div>
				<p>Produtos</p>
				<p>Todos</p>
			</div>
			<div>
				<MdFilterListAlt
					size={35}
					color={filters.byPrice ? "#DC9000" : "#C8C8C8"}
					onClick={() => {
						setHide(!hide);
					}}
				/>
				<BoxPriceFilter hide={hide}>
					<p>Filtrar por preço:</p>
					<div>
						<button onClick={() => handlerFilterPrice(5, 25)}>R$5 à R$25</button>
						<button onClick={() => handlerFilterPrice(26, 45)}>R$26 à R$45</button>
						<button onClick={() => handlerFilterPrice(46, null)}>R$46 ou mais</button>
					</div>
				</BoxPriceFilter>
				<MdSortByAlpha
					size={35}
					color={filters.alphabetical ? "#DC9000" : "#C8C8C8"}
					onClick={() =>
						setFilters({ ...filters, alphabetical: !filters.alphabetical })
					}
				/>
			</div>
		</Section>
	);
}
