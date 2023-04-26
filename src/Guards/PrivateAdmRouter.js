import { Navigate, Outlet } from "react-router-dom";
import { useAlert } from "../contexts/AlertContext";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

export default function PrivateAdmRoutes() {
	const { token, user } = useAuth();
	const { setMessage } = useAlert();

	const isAdm = user.is_adm;
	useEffect(() => {
		if (!isAdm) {
			setMessage({
				type: "warning",
				text: "Apenas administradores podem entrar nessa rota",
			});
		}
	}, [isAdm, setMessage, token]);

	return isAdm ? <Outlet /> : <Navigate to="/" />;
}
