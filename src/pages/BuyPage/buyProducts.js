import SectionProducts, { Article } from "../../components/sectionProducts";

export default function BuyProducts({ products }) {
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
						<div>
							<p>{product.name}</p>
							<p>({product.description})</p>
						</div>
						<div>
							<span>R${product.price}</span>
							<button>Comprar</button>
						</div>
					</Article>
				);
			})}
		</SectionProducts>
	);
}
