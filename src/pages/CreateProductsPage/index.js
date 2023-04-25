import Div from "../../components/div";
import DivInput, { InputImage } from "../../components/divInput";
import NewProduct, { FormNewProduct } from "../../components/newProduct";
import { useRef, useState } from "react";
import BaseButton from "../../components/baseButton";
import handlerInput from "../../utils";
import { Link } from "react-router-dom";
import * as api from "../../service/productsApi";
import { useAlert } from "../../contexts/AlertContext";

export default function CreateProductsPage() {
	const [imgSrc, setImgSrc] = useState(null);
	const fileInputRef = useRef(null);
	const nameInputRef = useRef(null);
	const categoryInputRef = useRef(null);
	const describeInputRef = useRef(null);
	const priceInputRef = useRef(null);
	const { setMessage } = useAlert();
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		description: "",
		price: "",
		image: null,
	});

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setFormData({ ...formData, image: file });
		const imgUrl = URL.createObjectURL(file);
		setImgSrc(imgUrl);
	};

	const handleRemoveImage = () => {
		URL.revokeObjectURL(imgSrc);
		setImgSrc(null);
	};

	const handlerSubmit = async (e) => {
		e.preventDefault();

		const { name, category, description, price, image } = formData;
		console.log(formData);

		try {
			const body = new FormData();
			body.append("name", name);
			body.append("category", category);
			body.append("description", description);
			body.append("price", price);
			body.append("image", image);

			await api.create(body);
			setMessage({ type: "success", text: `${name} foi cadastrado com sucesso` });
			// navegate("/login");
		} catch (err) {
			console.log("entrou no erro");
			console.log(err);
			return setMessage({ type: "error", text: err.response.data });
		}
	};

	return (
		<NewProduct>
			<h1>Novo Item</h1>
			<FormNewProduct onSubmit={handlerSubmit}>
				<Div width="100%" gap="20px">
					<Div row height="262px" width="100%" gap="20px">
						<Div width="100%" gap="20px">
							<Div height="100%" justify="space-between">
								<DivInput onClick={() => nameInputRef.current.focus()}>
									<label>Nome</label>
									<input
										type="text"
										name="name"
										ref={nameInputRef}
										onChange={(e) => handlerInput(e, formData, setFormData)}
									/>
								</DivInput>
								<DivInput onClick={() => categoryInputRef.current.focus()}>
									<label>Categoria</label>
									<input
										type="text"
										name="category"
										ref={categoryInputRef}
										onChange={(e) => handlerInput(e, formData, setFormData)}
									/>
								</DivInput>
								<DivInput
									height="96px"
									onClick={() => describeInputRef.current.focus()}
								>
									<label>Descrição</label>
									<input
										type="text"
										name="description"
										ref={describeInputRef}
										onChange={(e) => handlerInput(e, formData, setFormData)}
									/>
								</DivInput>
							</Div>
						</Div>
						<InputImage>
							<input
								type="file"
								name="image"
								ref={fileInputRef}
								id="fileInput"
								onChange={handleFileChange}
							/>
							{imgSrc && <img src={imgSrc} alt="erro" />}
							{imgSrc ? (
								<p onClick={handleRemoveImage}>Remover image</p>
							) : (
								<p onClick={handleButtonClick}>Adicione uma imagem</p>
							)}
						</InputImage>
					</Div>
					<DivInput width="138px" onClick={() => priceInputRef.current.focus()}>
						<label>Valor</label>
						<input
							type="number"
							ref={priceInputRef}
							name="price"
							onChange={(e) => handlerInput(e, formData, setFormData)}
						/>
					</DivInput>
				</Div>
				<Div row width="100%" justify="end" align="center" gap="24px">
					<Link to="/">
						<span>Cancelar</span>
					</Link>
					<BaseButton type="submit">Cadastra</BaseButton>
				</Div>
			</FormNewProduct>
		</NewProduct>
	);
}
