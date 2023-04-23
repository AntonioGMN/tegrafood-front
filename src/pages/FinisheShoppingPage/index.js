import Column from "../../components/column";
import Container from "../../components/conteiner";
import Header from "../../components/header";
import Title from "../../components/title";
import Div from "../../components/div";
import BaseButton from "../../components/baseButton";
import Table from "../../components/table";
import AddCupom from "../../components/addCupom";
import FinishBuysection from "../../components/FinishBuySection";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../../service/buyApi";
import { useAuth } from "../../contexts/AuthContext";
import { useAlert } from "../../contexts/AlertContext";
import ShowShoppings from "./showShopping";

export default function FinishShoppingPage() {
	const { token } = useAuth();
	const { setMessage } = useAlert();
	const navegate = useNavigate();
	const [products, setProducts] = useState([]);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		if (!token) navegate("/login");
	}, [token, navegate]);

	async function saveQuantity() {
		await products.map(async (p) => {
			if ("updated" in p) await api.updateQuantity(p.quantity, p.shopping_id);
		});
	}

	async function finishShopping() {
		await products.map(async (p) => {
			await api.finishShopping(p.shopping_id);
		});
		navegate("/");
		setMessage({ type: "success", text: `Compras realizadas com sucesso` });
	}

	return (
		<Column>
			<Header />
			<Container justify="space-evenly">
				<Title>Meu carrinho</Title>
				<ShowShoppings
					products={products}
					setProducts={setProducts}
					setPrice={setPrice}
				/>
				<Div gap row height="128px" width="95%">
					<AddCupom row>
						<p>Cupom de desconto</p>
						<BaseButton>Adicionar</BaseButton>
					</AddCupom>
					<Table>
						<thead>
							<tr>
								<th>SubTotal</th>
								<td>R$ {price}</td>
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
					<Link
						to="/"
						onClick={async () => {
							await saveQuantity();
						}}
					>
						Escolher mais
					</Link>
					<BaseButton
						width="190px"
						onClick={async () => {
							await finishShopping();
						}}
					>
						Fechar pedido
					</BaseButton>
				</FinishBuysection>
			</Container>
		</Column>
	);
}
