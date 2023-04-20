import Column from "../../components/column";
import Container from "../../components/conteiner";
import Header from "../../components/header";
import SectionProducts, { Article } from "../../components/sectionProducts";
import Title from "../../components/title";
import { FaTrash } from "react-icons/fa";
import Div from "../../components/div";
import BaseButton from "../../components/baseButton";
import Table from "../../components/table";
import AddCupom from "../../components/addCupom";
import FinishBuysection from "../../components/FinishBuySection";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../../service/buyApi";

export default function FinishShoppingPage() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		// if (!token) navegate("/login");

		async function getProducts() {
			try {
				const response = await api.get();
				console.log(response);
				setProducts(response.data);
			} catch (err) {
				console.log(err);
			}
		}
		getProducts();
	}, []);

	function calcTotalPrice(array) {
		let total = array.reduce((sum, product) => {
			return sum + parseFloat(product.price);
		}, 0);
		return total.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
	}

	if (products === null) return "carregando";

	return (
		<Column>
			<Header />
			<Container justify="space-evenly">
				<Title>Meu carrinho</Title>
				<SectionProducts maxHeight="440px">
					{products.map((product) => {
						const image = process.env.REACT_APP_API_URL + "uploads/" + product.image;
						return (
							<section key={product.id}>
								<Article width="95%">
									<img src={image} alt="err" />
									<div>
										<p>{product.name}</p>
										{product.description !== null ? (
											<p>({product.description})</p>
										) : (
											<p></p>
										)}
									</div>
									<div>
										<span>R${product.price}</span>
										<button>Comprar</button>
									</div>
								</Article>
								<FaTrash size={30} color="#223263" />
							</section>
						);
					})}
				</SectionProducts>
				<Div gap row height="128px" width="95%">
					<AddCupom row>
						<p>Cupom de desconto</p>
						<BaseButton>Adicionar</BaseButton>
					</AddCupom>
					<Table>
						<thead>
							<tr>
								<th>SubTotal</th>
								<td>R$ {calcTotalPrice(products)}</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Total</th>
								<td>Content 6</td>
							</tr>
						</tbody>
					</Table>
				</Div>
				<FinishBuysection>
					<Link to="/">Escolher mais</Link>
					<BaseButton width="190px">Fechar pedido</BaseButton>
				</FinishBuysection>
			</Container>
		</Column>
	);
}
