import Container from "../../components/center";
import { Form } from "../../components/form";
import { Link } from "react-router-dom";
import { useState } from "react";
import H1 from "../../components/h1";
import Button from "../../components/button";
import FoodPresentationImg from "../../components/apresentationImage";
import handlerInput from "../../utils";
import GreyText from "../../components/greyText";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import ArrowReturnButton from "../../components/arrowReturnButton";

export default function SignUpPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	return (
		<>
			<FoodPresentationImg />
			<Container>
				<center>
					<H1>Vamos começar!</H1>
					<GreyText>Crie uma nova conta</GreyText>
					<Form>
						<div>
							<FiUser size={20} />
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
							<AiOutlineMail size={20} />
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
							<AiOutlineLock size={20} />
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
							<AiOutlineLock size={20} />
							<input
								placeholder="confirme a senha"
								type="password"
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={(e) => handlerInput(e, formData, setFormData)}
								required
							/>
						</div>
						<Button>Cadastre-se</Button>
						<Link to={"/"}>
							Já tem uma conta? <span>Entrar</span>
						</Link>
					</Form>
				</center>
				<ArrowReturnButton />
			</Container>
		</>
	);
}
