import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyPage from "./pages/BuyPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/signUp" element={<SignUpPage />} />
				<Route path="/home" element={<BuyPage />} />
			</Routes>
		</BrowserRouter>
	);
}
