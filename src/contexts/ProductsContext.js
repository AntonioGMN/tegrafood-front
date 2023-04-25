import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "./AlertContext";
import { useAuth } from "./AuthContext";
const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
	const { token } = useAuth();
	const { setMessage } = useAlert();
	const navegate = useNavigate();
	const persistedProductForEdite = JSON.parse(
		localStorage.getItem("ProductForEdite")
	);
	const [productForEdite, setProductForEdite] = useState(
		persistedProductForEdite
	);

	useEffect(() => {
		if (!token) {
			navegate("/login");
			setMessage({ type: "warning", text: `Efetue o login por gentiliza` });
		}
	}, [token, navegate, setMessage]);

	async function saveProductForEdite(newProductForEdite) {
		setProductForEdite(newProductForEdite);
		localStorage.setItem("ProductForEdite", JSON.stringify(newProductForEdite));
	}

	return (
		<ProductsContext.Provider value={{ productForEdite, saveProductForEdite }}>
			{children}
		</ProductsContext.Provider>
	);
}

export const useProducts = () => useContext(ProductsContext);
