import SectionProducts, { Article } from "../../components/sectionProducts";
import foodPresentation from "../../assets/foodPresentation.png";

export default function BuyProducts() {
	return (
		<SectionProducts>
			<Article>
				<img src={foodPresentation} alt="err" />
				<div>
					<p>Açaí com frutas </p>
					<p>(Açaí, banana, morango, uva, leite ninho em pó e leite condensado)</p>
				</div>
				<div>
					<span>R$18,00</span>
					<button>Comprar</button>
				</div>
			</Article>
			<Article>
				<img src={foodPresentation} alt="err" />
				<div>
					<p>Açaí com frutas </p>
					<p>(Açaí, banana, morango, uva, leite ninho em pó e leite condensado)</p>
				</div>
				<div>
					<span>R$18,00</span>
					<button>Comprar</button>
				</div>
			</Article>
			<Article>
				<img src={foodPresentation} alt="err" />
				<div>
					<p>Açaí com frutas </p>
					<p>(Açaí, banana, morango, uva, leite ninho em pó e leite condensado)</p>
				</div>
				<div>
					<span>R$18,00</span>
					<button>Comprar</button>
				</div>
			</Article>
			<Article>
				<img src={foodPresentation} alt="err" />
				<div>
					<p>Açaí com frutas </p>
					<p>(Açaí, banana, morango, uva, leite ninho em pó e leite condensado)</p>
				</div>
				<div>
					<span>R$18,00</span>
					<button>Comprar</button>
				</div>
			</Article>
		</SectionProducts>
	);
}
