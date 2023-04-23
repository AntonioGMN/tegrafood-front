import SectionProducts, { Article } from "../../components/sectionProducts";
import { FaTrash } from "react-icons/fa";
import Div from "../../components/div";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as api from "../../service/buyApi";
import { useAuth } from "../../contexts/AuthContext";
import ShoppingQuantityButtom from "./shoppingQuantity";

export default function ShowShoppings({ products, setProducts, setPrice }) {
	const { token } = useAuth();
	const navegate = useNavigate();

	useEffect(() => {
		if (!token) navegate("/login");

		async function getProducts() {
			try {
				const response = await api.get();
				setProducts(response.data);
			} catch (err) {
				console.log(err);
			}
		}

		getProducts();
	}, [token, navegate, setProducts]);

	async function deleteShopping(shoppingId) {
		try {
			await api.deleteById(shoppingId);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	}

	if (products === null) return "carregando";
	if (products.length === 0)
		return "Você no momento não possui nenhum produto no carrinho. Começe a comprar agora";

	return (
		<SectionProducts maxHeight="440px">
			{products.map((product) => {
				const image = process.env.REACT_APP_API_URL + "uploads/" + product.image;
				return (
					<section key={product.id}>
						<Article width="95%">
							<img src={image} alt="err" />
							<Div glow>
								<p>{product.name}</p>
								{product.description !== null ? (
									<p>({product.description})</p>
								) : (
									<p></p>
								)}
							</Div>
							<Div>
								<span>
									R$
									{product.price.toLocaleString("pt-BR", {
										minimumFractionDigits: 2,
									})}
								</span>
								<ShoppingQuantityButtom
									allProducts={products}
									product={product}
									setProducts={setProducts}
									setPrice={setPrice}
								/>
							</Div>
						</Article>
						<FaTrash
							size={30}
							color="#223263"
							onClick={async () => {
								await deleteShopping(product.shopping_id);
							}}
						/>
					</section>
				);
			})}
		</SectionProducts>
	);
}
