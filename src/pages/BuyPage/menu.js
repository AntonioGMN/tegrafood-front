import NavStyle, { SelectedButton } from "../../components/nav";
import logoTegrafood from "../../assets/logoTegrafood.png";

export default function Menu({ filterCategory, setFilterCategory }) {
	return (
		<NavStyle>
			<img src={logoTegrafood} alt="erro-logo" />
			<div>
				<SelectedButton
					selected={filterCategory === null}
					onClick={() => setFilterCategory(null)}
				>
					Todos
				</SelectedButton>
				<SelectedButton
					selected={filterCategory === "pizza"}
					onClick={() => setFilterCategory("pizza")}
				>
					Pizza
				</SelectedButton>
				<SelectedButton
					selected={filterCategory === "sobremesa"}
					onClick={() => setFilterCategory("sobremesa")}
				>
					Sobremesa
				</SelectedButton>
				<SelectedButton
					selected={filterCategory === "lanche"}
					onClick={() => setFilterCategory("lanche")}
				>
					Lanche
				</SelectedButton>
				<SelectedButton
					selected={filterCategory === "açaí"}
					onClick={() => setFilterCategory("açaí")}
				>
					Açai
				</SelectedButton>
				<SelectedButton
					selected={filterCategory === "bebidas"}
					onClick={() => setFilterCategory("bebidas")}
				>
					Bebidas
				</SelectedButton>
			</div>
		</NavStyle>
	);
}
