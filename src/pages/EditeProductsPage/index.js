import Div from "../../components/div";
import DivInput, { InputImage } from "../../components/divInput";
import NewProduct, { FormNewProduct } from "../../components/newProduct";
import { useRef, useState } from "react";
import BaseButton from "../../components/baseButton";
import handlerInput from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import * as api from "../../service/productsApi";
import { useAlert } from "../../contexts/AlertContext";
import { useProducts } from "../../contexts/ProductsContext";

export default function EditeProductsPage() {
	const fileInputRef = useRef(null);
	const nameInputRef = useRef(null);
	const categoryInputRef = useRef(null);
	const describeInputRef = useRef(null);
	const priceInputRef = useRef(null);

	const { setMessage } = useAlert();
	const { productForEdite } = useProducts();
	const origImagePath =
		process.env.REACT_APP_API_URL + "uploads/" + productForEdite.image;
	const navegate = useNavigate();
	const [formData, setFormData] = useState({
		id: productForEdite.id,
		name: productForEdite.name,
		category: productForEdite.category,
		description: productForEdite.description,
		price: productForEdite.price,
		image: origImagePath,
	});
	const [imgSrc, setImgSrc] = useState(formData.image);

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

		const { id, name, category, description, price, image } = formData;

		try {
			const body = new FormData();
			body.append("id", id);
			body.append("name", name);
			body.append("category", category);
			body.append("description", description);
			body.append("price", price);

			const imageWasChange = image !== origImagePath;
			if (imageWasChange) {
				body.append("image", image);
				await api.editeAll(body);
			} else {
				await api.edite({ id, name, category, description, price });
			}

			setMessage({ type: "success", text: `${name} foi editado com sucesso` });
			navegate("/produtos/editar");
		} catch (err) {
			return setMessage({ type: "error", text: err.response.data });
		}
	};

	return (
		<NewProduct>
			<h1>Editar Item</h1>
			<FormNewProduct enctype="multipart/form-data" onSubmit={handlerSubmit}>
				<Div width="100%" gap="20px">
					<Div row width="100%" gap="20px">
						<Div width="100%">
							<Div height="100%" justify="space-between">
								<DivInput onClick={() => nameInputRef.current.focus()}>
									<label>Nome</label>
									<input
										type="text"
										name="name"
										value={formData.name}
										ref={nameInputRef}
										onChange={(e) => handlerInput(e, formData, setFormData)}
									/>
								</DivInput>
								<DivInput onClick={() => categoryInputRef.current.focus()}>
									<label>Categoria</label>
									<input
										type="text"
										name="category"
										value={formData.category}
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
										value={formData.description}
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
							value={formData.price}
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
