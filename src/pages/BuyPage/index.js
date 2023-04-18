import Column from "../../components/column";
import Container from "../../components/conteiner";
import BuyProducts from "./buyProducts";
import FilterOrSortProduts from "./filterOrSortProduts";
import Menu from "./menu";
import Header from "../../components/header";
import Div from "../../components/div";
import { useState, useEffect } from "react";
import * as apiProducts from "../../service/productsApi.js";

export default function BuyPage() {
	const [products, setProducts] = useState(null);
	const [filterCategory, setFilterCategory] = useState(null);
	const [priceFilter, setPriceFilter] = useState({ start: null, end: null });
	const [filters, setFilters] = useState({
		alphabetical: false,
		byPrice: false,
	});

	useEffect(() => {
		async function getProducts() {
			try {
				const { alphabetical, byPrice } = filters;
				let response;

				if (byPrice) {
					const { start, end } = priceFilter;
					if (end === null)
						response = await apiProducts.getByPriceBiggerThen(
							start,
							alphabetical,
							filterCategory
						);
					else
						response = await apiProducts.getByPrice(
							start,
							end,
							alphabetical,
							filterCategory
						);
				} else if (filterCategory) {
					response = await apiProducts.getByCategory(filterCategory, alphabetical);
				} else if (alphabetical) {
					response = await apiProducts.getWithAlphabeticalOrde();
				} else response = await apiProducts.getAll();

				setProducts(response.data);
			} catch (err) {
				console.log(err);
			}
		}
		getProducts();
	}, [filters, priceFilter, filterCategory]);

	console.log(products);

	return (
		<Div row>
			<Menu
				filterCategory={filterCategory}
				setFilterCategory={setFilterCategory}
			/>
			<Column>
				<Header />
				<Container padding="12px">
					<FilterOrSortProduts
						filters={filters}
						setFilters={setFilters}
						setPriceFilter={setPriceFilter}
					/>
					<BuyProducts products={products} />
				</Container>
			</Column>
		</Div>
	);
}
