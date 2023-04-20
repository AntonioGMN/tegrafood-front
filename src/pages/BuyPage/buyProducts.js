import SectionProducts, { Article } from "../../components/sectionProducts";
import * as api from "../../service/buyApi";

export default function BuyProducts({ products, setShowAlert }) {
	if (products == null) {
		return <SectionProducts>Carregando</SectionProducts>;
	}

	async function buyProduct(productId) {
		try {
			await api.addToBuyCar(productId);
			console.log("adicionado");
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
						<div>
							<p>{product.name}</p>
							{product.description !== null ? <p>({product.description})</p> : <p></p>}
						</div>
						<div>
							<span>R${product.price.toString().replace(".", ",")}</span>
							<button
								onClick={() => {
									setShowAlert(true);
									buyProduct(product.id);
								}}
							>
								Comprar
							</button>
						</div>
					</Article>
				);
			})}
		</SectionProducts>
	);
}
