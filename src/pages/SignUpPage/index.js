import Container from "../../components/conteiner";
import { Form } from "../../components/form";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
		image: null,
	});

	useEffect(() => {
		if (token) navegate("/");
	}, [token, navegate]);

	function handleImageChange(e) {
		const file = e.target.files[0];
		setFormData({ ...formData, image: file });
	}

	async function handlerSubmit(e) {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword)
			return setMessage({ type: "error", text: "Senha não estão iguais" });

		const { name, email, password, image } = formData;

		try {
			const body = new FormData();
			body.append("name", name);
			body.append("email", email);
			body.append("password", password);
			body.append("image", image);

			await api.signUp(body);
			setMessage({ type: "success", text: `${name} foi cadastrado com sucesso` });
			navegate("/login");
		} catch (err) {
			return setMessage({ type: "error", text: err.response.data });
		}
	}

	return (
		<>
			<FoodPresentationImg />
			<Container center>
				<H1>Vamos começar!</H1>
				<GreyText>Crie uma nova conta</GreyText>
				<Form enctype="multipart/form-data" onSubmit={(e) => handlerSubmit(e)}>
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
							placeholder="Foto de perfil"
							type="file"
							name="image"
							onChange={(e) => handleImageChange(e)}
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
					<Link to={"/login"}>
						Já tem uma conta? <span>Entrar</span>
					</Link>
				</Form>
				<ArrowReturnButton />
			</Container>
		</>
	);
}
