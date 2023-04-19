// import { Link } from "react-router-dom";
// import BuyProductAlert from "../../components/buyProductAlert";
import SectionProducts, { Article } from "../../components/sectionProducts";
import * as api from "../../service/buyApi";
// import { useState } from "react";

export default function BuyProducts({ products }) {
	// const [open, setOpen] = useState(false);
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
							<span>R${product.price}</span>
							<button onClick={() => buyProduct(product.id)}>Comprar</button>
						</div>
					</Article>
				);
			})}
			{/* <BuyProductAlert>
				<p>ítem adicionado ao carrinho</p>
				<Link to="/">ir para o carrinho</Link>
			</BuyProductAlert> */}
		</SectionProducts>
	);
}
