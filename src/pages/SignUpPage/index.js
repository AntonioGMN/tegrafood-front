import Container from "../../components/conteiner";
import { Form } from "../../components/form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import H1 from "../../components/h1";
import Button from "../../components/button";
import FoodPresentationImg from "../../components/apresentationImage";
import handlerInput from "../../utils";
import GreyText from "../../components/greyText";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BsFileEarmarkPerson } from "react-icons/bs";
import ArrowReturnButton from "../../components/arrowReturnButton";
import * as api from "../../service/authApi.js";
import { useAlert } from "../../contexts/AlertContext";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function SignUpPage() {
	const navegate = useNavigate();
	const { setMessage } = useAlert();
	const { token } = useAuth();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		image: "",
	});

	useEffect(() => {
		if (token) navegate("/home");
	}, [token, navegate]);

	async function handlerSubmit(e) {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword)
			return setMessage({ type: "error", text: "Senha não estão iguais" });

		const { name, email, password, image } = formData;

		try {
			await api.signUp({ name, email, password, image });
			setMessage({ type: "success", text: `${name} foi cadastrado com sucesso` });
			navegate("/");
		} catch (err) {
			return setMessage({ type: "error", text: err.response.data });
		}
	}

	return (
		<>
			<FoodPresentationImg />
			<Container>
				<H1>Vamos começar!</H1>
				<GreyText>Crie uma nova conta</GreyText>
				<Form onSubmit={(e) => handlerSubmit(e)}>
					<div>
						<FiUser size={30} color="#9098B1" />
						<input
							placeholder="Nome completo"
							type="text"
							name="name"
							value={formData.name}
							onChange={(e) => handlerInput(e, formData, setFormData)}
							required
						/>
					</div>
					<div>
						<AiOutlineMail size={30} color="#9098B1" />
						<input
							placeholder="Seu e-mail"
							type="email"
							name="email"
							value={formData.email}
							onChange={(e) => handlerInput(e, formData, setFormData)}
							required
						/>
					</div>
					<div>
						<BsFileEarmarkPerson size={30} color="#9098B1" />
						<input
							placeholder="Endereço de foto de perfil"
							type="text"
							name="image"
							value={formData.image}
							onChange={(e) => handlerInput(e, formData, setFormData)}
							required
						/>
					</div>
					<div>
						<AiOutlineLock size={30} color="#9098B1" />
						<input
							placeholder="senha"
							type="password"
							name="password"
							value={formData.password}
							onChange={(e) => handlerInput(e, formData, setFormData)}
							required
						/>
					</div>
					<div>
						<AiOutlineLock size={30} color="#9098B1" />
						<input
							placeholder="confirme a senha"
							type="password"
							name="confirmPassword"
							value={formData.confirmPassword}
							onChange={(e) => handlerInput(e, formData, setFormData)}
							required
						/>
					</div>

					<Button type="submit">Cadastre-se</Button>
					<Link to={"/"}>
						Já tem uma conta? <span>Entrar</span>
					</Link>
				</Form>
				<ArrowReturnButton />
			</Container>
		</>
	);
}
