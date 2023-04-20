import { useEffect, useState } from "react";
import { MdFilterListAlt, MdSortByAlpha } from "react-icons/md";
import styled from "styled-components";
import BoxPriceFilter from "../../components/selectFilterPrice";

const Section = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
	padding: 20px 35px 0 43px;
	background: white;

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

const UnderlineText = styled.p`
	color: #dc9000;
	text-decoration: underline;
	text-underline-position: under;
	u {
		padding-bottom: 10px;
	}
`;

export default function FilterOrSortProduts({
	filters,
	setFilters,
	setPriceFilter,
	filterCategory,
	setShowAlert,
}) {
	const [hide, setHide] = useState(true);
	const [productCategory, setProductCategory] = useState("Todos");
	function handlerFilterPrice(start, end) {
		setPriceFilter({ start, end });
		setHide(!hide);
		setFilters({ ...filters, byPrice: true });
	}

	useEffect(() => {
		switch (filterCategory) {
			case "pizza":
				setProductCategory("Pizza");
				break;
			case "lanche":
				setProductCategory("Lanche");
				break;
			case "açaí":
				setProductCategory("Açaí");
				break;
			case "bebidas":
				setProductCategory("Bebidas");
				break;
			case "sobremesa":
				setProductCategory("Sobremesa");
				break;
			default:
				setProductCategory("Todos");
		}
	}, [filterCategory]);

	function openAndCloseFilterPrice() {
		if (filters.byPrice) {
			setFilters({ ...filters, byPrice: false });
			setHide(true);
			return;
		}

		setHide(false);
	}

	return (
		<Section>
			<div>
				<p>Produtos</p>
				<UnderlineText>
					<u>{productCategory}</u>
				</UnderlineText>
			</div>
			<div>
				<MdFilterListAlt
					size={35}
					color={filters.byPrice ? "#DC9000" : "#C8C8C8"}
					onClick={() => openAndCloseFilterPrice()}
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
					onClick={() => {
						if (!filters.alphabetical) setShowAlert("ativeAlphabeticalOrder");
						setFilters({ ...filters, alphabetical: !filters.alphabetical });
					}}
				/>
			</div>
		</Section>
	);
}
