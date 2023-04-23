import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowProductsPage from "./pages/ShowProductsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AlertProvide from "./contexts/AlertContext.js";
import AuthProvider from "./contexts/AuthContext.js";
import FinishShoppingPage from "./pages/FinisheShoppingPage";

export default function App() {
	return (
		<BrowserRouter>
			<AlertProvide>
				<AuthProvider>
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/cadastro" element={<SignUpPage />} />
						<Route path="/" element={<ShowProductsPage />} />
						<Route path="/carrinho" element={<FinishShoppingPage />} />
					</Routes>
				</AuthProvider>
			</AlertProvide>
		</BrowserRouter>
	);
}
