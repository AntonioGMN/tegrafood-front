import Column from "../../components/column";
import Container from "../../components/conteiner";
import ShowProducts from "./showProducts";
import FilterOrSortProduts from "./filterOrSortProduts";
import Menu from "./menu";
import Header from "../../components/header";
import Div from "../../components/div";
import { useState, useEffect } from "react";
import * as apiProducts from "../../service/productsApi.js";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AlertProducts from "./alertProducts";

export default function ShowProductsPage() {
	const { token } = useAuth();
	const navegate = useNavigate();
	const [products, setProducts] = useState(null);
	const [showMenu, setShowMenu] = useState(false);
	const [filterCategory, setFilterCategory] = useState(null);
	const [priceFilter, setPriceFilter] = useState({ start: null, end: null });
	const [showAlert, setShowAlert] = useState(false);
	const [filters, setFilters] = useState({
		alphabetical: false,
		byPrice: false,
	});

	useEffect(() => {
		if (!token) navegate("/login");

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
	}, [filters, priceFilter, filterCategory, token, navegate]);

	console.log(showAlert);

	return (
		<Div row width="100%" height="100%">
			<Menu
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				filterCategory={filterCategory}
				setFilterCategory={setFilterCategory}
			/>
			<Column>
				<Header showMenu={setShowMenu} />
				<Container padding justify="start">
					<FilterOrSortProduts
						filters={filters}
						setFilters={setFilters}
						setPriceFilter={setPriceFilter}
						filterCategory={filterCategory}
						setShowAlert={setShowAlert}
					/>
					<ShowProducts
						products={products}
						setProducts={setProducts}
						setShowAlert={setShowAlert}
					/>
					<AlertProducts
						showAlert={showAlert}
						setShowAlert={setShowAlert}
						filters={filters}
						setFilters={setFilters}
					/>
				</Container>
			</Column>
		</Div>
	);
}
