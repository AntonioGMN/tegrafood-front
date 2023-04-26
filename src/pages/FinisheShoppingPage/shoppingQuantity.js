import { useState, useEffect } from "react";
import BaseButton from "../../components/baseButton";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Div from "../../components/div";

export default function ShoppingQuantityButtom({
	allProducts,
	product,
	setProducts,
	setPrice,
}) {
	const [quantity, setQuantity] = useState(product.quantity);

	useEffect(() => {
		function getPrice() {
			const total = allProducts.reduce((sum, p) => {
				return sum + parseFloat(p.price) * parseFloat(p.quantity);
			}, 0);

			const priceString = total.toLocaleString("pt-BR", {
				minimumFractionDigits: 2,
			});
			setPrice(priceString);
		}
		getPrice();
	}, [allProducts, setPrice, quantity]);

	function changeQuantity(value) {
		const productIndex = allProducts.findIndex((p) => p.id === product.id);
		allProducts[productIndex].quantity = value;
		allProducts[productIndex].updated = true;
		setProducts(allProducts);
		setQuantity(value);
	}

	return (
		<BaseButton width="80px">
			<Div width="100%" row align="center" justify="space-evenly">
				{quantity}x
				<Div>
					<MdKeyboardArrowUp
						onClick={() => {
							changeQuantity(quantity + 1);
						}}
					/>
					<MdOutlineKeyboardArrowDown
						onClick={() => {
							if (quantity > 1) changeQuantity(quantity - 1);
						}}
					/>{" "}
				</Div>
			</Div>
		</BaseButton>
	);
}
