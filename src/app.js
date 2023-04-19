import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyPage from "./pages/BuyPage";
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
						<Route path="/" element={<LoginPage />} />
						<Route path="/cadastro" element={<SignUpPage />} />
						<Route path="/" element={<BuyPage />} />
						<Route path="/carrinho" element={<FinishShoppingPage />} />
					</Routes>
				</AuthProvider>
			</AlertProvide>
		</BrowserRouter>
	);
}
