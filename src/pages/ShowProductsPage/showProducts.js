import BaseButton from "../../components/baseButton";
import Div from "../../components/div";
import SectionProducts, { Article } from "../../components/sectionProducts";
import * as api from "../../service/buyApi";

export default function ShowProducts({ products, setProducts, setShowAlert }) {
	if (products == null) {
		return <SectionProducts>Carregando</SectionProducts>;
	}

	async function buyProduct(productId) {
		try {
			await api.addToBuyCar(productId);
			const index = products.findIndex((p) => p.id === productId);
			products[index].sold = true;
			setProducts(products);
		} catch (err) {
			console.log(err);
		}
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
							{"sold" in product ? (
								<BaseButton>Cancelar compra</BaseButton>
							) : (
								<BaseButton
									onClick={() => {
										setShowAlert(true);
										buyProduct(product.id);
									}}
								>
									Comprar
								</BaseButton>
							)}
						</Div>
					</Article>
				);
			})}
		</SectionProducts>
	);
}
