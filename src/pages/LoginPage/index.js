import Container from "../../components/center";
import { Form } from "../../components/form";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import H1 from "../../components/h1";
import Box from "../../components/box";
import FoodPresentationImg from "../../components/apresentationImage";
import GreyText from "../../components/greyText";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import SeparatorLine from "../../components/separatorLine";
import handlerInput from "../../utils";

export default function LoginPage() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	return (
		<>
			<FoodPresentationImg />
			<Container>
				<Box>
					<H1>Bem vindo!</H1>
					<GreyText>faça o login para continuar</GreyText>
					<Form>
						<div>
							<AiOutlineMail size={20} />
							<input
								placeholder="Seu e-mail"
								type="email"
								name="email"
								value={formData.email}
								onChange={(e) => handlerInput(e, formData, setFormData)}
							/>
						</div>
						<div>
							<AiOutlineLock size={20} />
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
