import { createContext, useContext, useState } from "react";
import * as api from "../service/authApi";
import { useAlert } from "./AlertContext";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const persistedToken = JSON.parse(localStorage.getItem("token"));
	const [token, setToken] = useState(persistedToken);
	const { setMessage } = useAlert();

	async function saveToken(novoToken) {
		setToken(novoToken);
		localStorage.setItem("token", JSON.stringify(novoToken));
	}

	async function logout() {
		try {
			await api.logout();
		} catch (err) {
			console.log(err);
			setMessage({ text: err });
		}

		localStorage.clear();
		window.location.replace("/");
	}

	return (
		<AuthContext.Provider value={{ token, saveToken, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
