import Div from "../../components/div";
import DivInput, { InputImage } from "../../components/divInput";
import NewProduct, { FormNewProduct } from "../../components/newProduct";
import { useRef, useState } from "react";
import BaseButton from "../../components/baseButton";
import handlerInput from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import * as api from "../../service/productsApi";
import { useAlert } from "../../contexts/AlertContext";
import InputCategory from "./inputCategory";

export default function CreateProductsPage() {
	const [imgSrc, setImgSrc] = useState(null);
	const fileInputRef = useRef(null);
	const nameInputRef = useRef(null);
	const describeInputRef = useRef(null);
	const priceInputRef = useRef(null);
	const { setMessage } = useAlert();
	const navegate = useNavigate();
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

		try {
			const body = new FormData();
			body.append("name", name);
			body.append("category", category);
			body.append("description", description);
			body.append("price", price);
			body.append("image", image);

			console.log(formData);
			await api.create(body);
			setMessage({ type: "success", text: `${name} foi cadastrado com sucesso` });
			navegate("/");
		} catch (err) {
			return setMessage({ type: "error", text: err.response.data });
		}
	};

	return (
		<NewProduct>
			<h1>Novo Item</h1>
			<FormNewProduct enctype="multipart/form-data" onSubmit={handlerSubmit}>
				<Div width="100%" gap="20px">
					<Div row width="100%" gap="20px">
						<Div width="100%" gap="20px">
							<Div height="262px" justify="space-between">
								<DivInput onClick={() => nameInputRef.current.focus()}>
									<label>Nome</label>
									<input
										type="text"
										name="name"
										required
										ref={nameInputRef}
										onChange={(e) => handlerInput(e, formData, setFormData)}
									/>
								</DivInput>
								<InputCategory formData={formData} setFormData={setFormData} />
								<DivInput
									height="96px"
									onClick={() => describeInputRef.current.focus()}
								>
									<label>Descrição</label>
									<input
										type="text"
										name="description"
										required
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
								required
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
							required
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
