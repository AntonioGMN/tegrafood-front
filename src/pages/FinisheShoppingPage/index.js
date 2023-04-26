import Column from "../../components/column";
import Container from "../../components/conteiner";
import Header from "../../components/header";
import Title from "../../components/title";
import Div from "../../components/div";
import BaseButton from "../../components/baseButton";
import Table from "../../components/table";
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

	const saveQuantity = async () => {
		await products.map(async (p) => {
			if ("updated" in p) await api.updateQuantity(p.quantity, p.shopping_id);
		});
	};

	const finishShopping = async () => {
		await Promise.all(
			products.map(async (p) => {
				await api.finishShopping(p.shopping_id);
			})
		);
		navegate("/");
		setMessage({ type: "success", text: `Compras realizadas com sucesso` });
	};

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
				<Div gap row width="95%">
					<Table>
						<thead>
							<tr>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>R$ {price}</td>
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
