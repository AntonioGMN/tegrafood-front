import Container from "../../components/conteiner";
import { Form } from "../../components/form";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import H1 from "../../components/h1";
import Box from "../../components/box";
import FoodPresentationImg from "../../components/apresentationImage";
import GreyText from "../../components/greyText";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import SeparatorLine from "../../components/separatorLine";
import handlerInput from "../../utils";
import { useAlert } from "../../contexts/AlertContext";
import * as api from "../../service/authApi";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginPage() {
	const { setMessage } = useAlert();
	const navegate = useNavigate();
	const { token, saveToken, saveUser } = useAuth();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		if (token) navegate("/home");
	}, [token, navegate]);

	async function handlerSubmit(e) {
		e.preventDefault();

		try {
			const response = await api.login(formData);
			console.log(response.data);
			saveToken(response.data.token);
			saveUser(response.data.user);
			navegate("/home");
		} catch (err) {
			console.log(err);
			return setMessage({ type: "error", text: err.response.data });
		}
	}

	return (
		<>
			<FoodPresentationImg />
			<Container center>
				<Box>
					<H1>Bem vindo!</H1>
					<GreyText>faça o login para continuar</GreyText>
					<Form onSubmit={(e) => handlerSubmit(e)}>
						<div>
							<AiOutlineMail size={20} color="#9098B1" />
							<input
								placeholder="Seu e-mail"
								type="email"
								name="email"
								value={formData.email}
								onChange={(e) => handlerInput(e, formData, setFormData)}
							/>
						</div>
						<div>
							<AiOutlineLock size={20} color="#9098B1" />
							<input
								placeholder="Senha"
								type="password"
								name="password"
								value={formData.password}
								onChange={(e) => handlerInput(e, formData, setFormData)}
							/>
						</div>
						<Button type="submit">Entrar</Button>
						<SeparatorLine />
						<Link to={"signUp"}>
							Não tem uma conta? <span>Cadastre</span>
						</Link>
					</Form>
				</Box>
			</Container>
		</>
	);
}
