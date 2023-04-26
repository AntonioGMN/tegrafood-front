import Column from "../../components/column";
import Container from "../../components/conteiner";
import ShowProducts from "./showProducts";
import FilterOrSortProduts from "./filterOrSortProduts";
import Menu from "./menu";
import Header from "../../components/header";
import Div from "../../components/div";
import { useState, useEffect } from "react";
import * as apiProducts from "../../service/productsApi.js";
import { useNavigate } from "react-router-dom";
import AlertProducts from "./alertProducts";
import { useAlert } from "../../contexts/AlertContext";

export default function ShowProductsPage() {
	const navegate = useNavigate();
	const [products, setProducts] = useState(null);
	const { setMessage } = useAlert();

	const [showMenu, setShowMenu] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [getProductsAgain, setGetProductsAgain] = useState(false);

	const [filterCategory, setFilterCategory] = useState(null);
	const [priceFilter, setPriceFilter] = useState({ start: false, end: false });
	const [filters, setFilters] = useState({
		alphabetical: false,
		byPrice: false,
	});

	useEffect(() => {
		async function getProducts() {
			try {
				const { alphabetical, byPrice } = filters;
				const { start, end } = priceFilter;
				let response;

				if (alphabetical || byPrice || filterCategory) {
					response = await apiProducts.getWithFilter(
						filterCategory,
						alphabetical,
						start,
						end
					);
				} else response = await apiProducts.getAll();

				setProducts(response.data);
				setGetProductsAgain(false);
			} catch (err) {
				return setMessage({ type: "error", text: err.response.data });
			}
		}
		getProducts();
	}, [
		filters,
		priceFilter,
		filterCategory,
		navegate,
		getProductsAgain,
		setMessage,
	]);

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
						setGetProducts={setGetProductsAgain}
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
