import { Navigate, Outlet } from "react-router-dom";
import { useAlert } from "../contexts/AlertContext";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

export default function PrivateAuthRoutes() {
	const { token } = useAuth();
	const { setMessage } = useAlert();

	const isAuthenticated = token !== null;
	useEffect(() => {
		if (!isAuthenticated) {
			setMessage({
				type: "warning",
				text: "Por favor, efetue login.",
			});
		}
	}, [isAuthenticated, setMessage, token]);

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
