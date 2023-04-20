import { createContext, useContext, useState } from "react";
import * as api from "../service/authApi";
import { useAlert } from "./AlertContext";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const persistedToken = JSON.parse(localStorage.getItem("token"));
	const [token, setToken] = useState(persistedToken);
	const persistedUser = JSON.parse(localStorage.getItem("user"));
	const [user, setUser] = useState(persistedUser);
	const { setMessage } = useAlert();

	async function saveToken(novoToken) {
		setToken(novoToken);
		localStorage.setItem("token", JSON.stringify(novoToken));
	}

	async function saveUser(novoUser) {
		setUser(novoUser);
		localStorage.setItem("user", JSON.stringify(novoUser));
	}

	async function logout() {
		try {
			await api.logout();
		} catch (err) {
			console.log(err);
			setMessage({ text: err });
		}

		localStorage.clear();
		window.location.replace("/login");
	}

	return (
		<AuthContext.Provider value={{ token, saveToken, logout, user, saveUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
