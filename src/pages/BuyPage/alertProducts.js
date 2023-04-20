import BuyProductAlert from "../../components/buyProductAlert";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function AlertProducts({
	showAlert,
	setShowAlert,
	filters,
	setFilters,
}) {
	useEffect(() => {
		if (showAlert) {
			setTimeout(() => {
				setShowAlert(false);
			}, 3000);
		}
	}, [showAlert, setShowAlert]);

	return (
		<BuyProductAlert show={showAlert}>
			{showAlert === "ativeAlphabeticalOrder" ? (
				<>
					<p>Ítens organizados de A à Z</p>
					<span
						onClick={() => {
							setShowAlert(false);
							setFilters({ ...filters, alphabetical: false });
						}}
					>
						cancelar
					</span>
				</>
			) : (
				<>
					<p>ítem adicionado ao carrinho</p>
					<Link to="/carrinho">ir para o carrinho</Link>
				</>
			)}
		</BuyProductAlert>
	);
}
