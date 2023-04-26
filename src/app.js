import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowProductsPage from "./pages/ShowProductsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AlertProvide from "./contexts/AlertContext.js";
import AuthProvider from "./contexts/AuthContext.js";
import FinishShoppingPage from "./pages/FinisheShoppingPage";
import CreateProductsPage from "./pages/CreateProductsPage";
import EditeProductsPage from "./pages/EditeProductsPage";
import ProductsProvider from "./contexts/ProductsContext";
import PrivateAuthRoutes from "./Guards/PrivateAuthRouter";
import PrivateAdmRoutes from "./Guards/PrivateAdmRouter";

export default function App() {
	return (
		<BrowserRouter>
			<AlertProvide>
				<AuthProvider>
					<ProductsProvider>
						<Routes>
							<Route path="/login" element={<LoginPage />} />
							<Route path="/cadastro" element={<SignUpPage />} />
							<Route element={<PrivateAuthRoutes />}>
								<Route path="/" element={<ShowProductsPage />} />
								<Route path="/carrinho" element={<FinishShoppingPage />} />
								<Route element={<PrivateAdmRoutes />}>
									<Route path="/produtos/criar" element={<CreateProductsPage />} />
									<Route path="/produtos/editar" element={<EditeProductsPage />} />
								</Route>
							</Route>
						</Routes>
					</ProductsProvider>
				</AuthProvider>
			</AlertProvide>
		</BrowserRouter>
	);
}
