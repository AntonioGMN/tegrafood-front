import { useNavigate } from "react-router-dom";
import BaseButton from "../../components/baseButton";
import Div from "../../components/div";
import SectionProducts, { Article } from "../../components/sectionProducts";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ProductsContext";
import * as api from "../../service/buyApi";
import { useAlert } from "../../contexts/AlertContext";

export default function ShowProducts({
	products,
	setShowAlert,
	setGetProducts,
}) {
	if (products == null) {
		return <SectionProducts>Carregando</SectionProducts>;
	}

	return (
		<SectionProducts>
			{products.map((product) => {
				const image = process.env.REACT_APP_API_URL + "uploads/" + product.image;
				return (
					<Article key={product.id}>
						<img src={image} alt="err" />
						<Div glow>
							<p>{product.name}</p>
							{product.description !== null ? <p>({product.description})</p> : <p></p>}
						</Div>
						<Div>
							<span>R${product.price.toString().replace(".", ",")}</span>
							<TypeButton
								product={product}
								setShowAlert={setShowAlert}
								setGetProducts={setGetProducts}
							/>
						</Div>
					</Article>
				);
			})}
		</SectionProducts>
	);
}

function TypeButton({ product, setShowAlert, setGetProducts }) {
	const { user } = useAuth();
	const { setMessage } = useAlert();
	const navegate = useNavigate();
	const { saveProductForEdite } = useProducts();

	const goToEditePage = () => {
		saveProductForEdite(product);
		navegate("/produtos/editar");
	};

	if (user.is_adm)
		return <BaseButton onClick={goToEditePage}>Editar</BaseButton>;

	async function buyProduct(productId) {
		try {
			await api.addToBuyCar(productId);
			setGetProducts(true);
		} catch (err) {
			return setMessage({ type: "error", text: err.response.data });
		}
	}

	async function cancelShopping(shoppingId) {
		try {
			await api.deleteById(shoppingId);
			setGetProducts(true);
		} catch (err) {
			console.log(err);
		}
	}

	if (product.shopping_id)
		return (
			<BaseButton
				shopping
				onClick={() => {
					cancelShopping(product.shopping_id);
				}}
			>
				Cancelar compra
			</BaseButton>
		);

	return (
		<BaseButton
			onClick={() => {
				setShowAlert(true);
				buyProduct(product.id);
			}}
		>
			Comprar
		</BaseButton>
	);
}
