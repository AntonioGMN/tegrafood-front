import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../service/authApi";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const persistedToken = JSON.parse(localStorage.getItem("token"));
	const [token, setToken] = useState(persistedToken);
	const persistedUser = JSON.parse(localStorage.getItem("user"));
	const [user, setUser] = useState(persistedUser);
	const navegate = useNavigate();

	async function saveToken(newToken) {
		setToken(newToken);
		localStorage.setItem("token", JSON.stringify(newToken));
	}

	async function saveUser(newUser) {
		setUser(newUser);
		localStorage.setItem("user", JSON.stringify(newUser));
	}

	async function logout() {
		await api.logout();
		localStorage.clear();
		setToken(null);
		navegate("/login");
	}

	return (
		<AuthContext.Provider value={{ token, saveToken, logout, user, saveUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
