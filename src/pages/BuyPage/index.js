import Column from "../../components/column";
import Container from "../../components/conteiner";
import BuyProducts from "./buyProducts";
import FilterOrSortProduts from "./filterOrSortProduts";
import Menu from "./menu";
import Header from "../../components/header";
import Div from "../../components/div";
import { useState, useEffect } from "react";
import * as apiProducts from "../../service/productsApi.js";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function BuyPage() {
	const { token } = useAuth();
	const navegate = useNavigate();
	const [products, setProducts] = useState(null);
	const [showMenu, setShowMenu] = useState(false);
	const [filterCategory, setFilterCategory] = useState(null);
	const [priceFilter, setPriceFilter] = useState({ start: null, end: null });
	const [filters, setFilters] = useState({
		alphabetical: false,
		byPrice: false,
	});

	useEffect(() => {
		// if (!token) navegate("/login");

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
		//getProducts();
	}, [filters, priceFilter, filterCategory, token, navegate]);

	return (
		<Div row>
			<Menu
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				filterCategory={filterCategory}
				setFilterCategory={setFilterCategory}
			/>
			<Column>
				<Header showMenu={setShowMenu} />
				{/* 
				<Container padding>
					<FilterOrSortProduts
						filterCategory={filterCategory}
						filters={filters}
						setFilters={setFilters}
						setPriceFilter={setPriceFilter}
					/>
					<BuyProducts products={products} />
				</Container>
			*/}
			</Column>
		</Div>
	);
}
