import BaseButton from "../../components/baseButton";
import Div from "../../components/div";
import SectionProducts, { Article } from "../../components/sectionProducts";
import { useAuth } from "../../contexts/AuthContext";
import * as api from "../../service/buyApi";

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
	if (user.is_adm) return <BaseButton>Editar</BaseButton>;

	async function buyProduct(productId) {
		try {
			await api.addToBuyCar(productId);
			setGetProducts(true);
		} catch (err) {
			console.log(err);
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
