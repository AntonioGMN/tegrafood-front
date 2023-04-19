import NavStyle, { SelectedButton } from "../../components/nav";
import logoTegrafood from "../../assets/logoTegrafood.png";

export default function Menu({
	showMenu,
	setShowMenu,
	filterCategory,
	setFilterCategory,
}) {
	return (
		<NavStyle show={showMenu}>
			<img src={logoTegrafood} alt="erro-logo" />
			<div>
				<SelectedButton
					selected={filterCategory === null}
					onClick={() => {
						setShowMenu(false);
						setFilterCategory(null);
					}}
				>
					Todos
				</SelectedButton>
				<SelectedButton
					selected={filterCategory === "pizza"}
					onClick={() => {
						setShowMenu(false);
						setFilterCategory("pizza");
					}}
				>
					Pizza
				</SelectedButton>
				<SelectedButton
					selected={filterCategory === "sobremesa"}
					onClick={() => {
						setShowMenu(false);
						setFilterCategory("sobremesa");
					}}
				>
					Sobremesa
				</SelectedButton>
				<SelectedButton
					selected={filterCategory === "lanche"}
					onClick={() => {
						setShowMenu(false);
						setFilterCategory("lanche");
					}}
				>
					Lanche
				</SelectedButton>
				<SelectedButton
					selected={filterCategory === "açaí"}
					onClick={() => {
						setShowMenu(false);
						setFilterCategory("açaí");
					}}
				>
					Açai
				</SelectedButton>
				<SelectedButton
					selected={filterCategory === "bebidas"}
					onClick={() => {
						setShowMenu(false);
						setFilterCategory("bebidas");
					}}
				>
					Bebidas
				</SelectedButton>
			</div>
		</NavStyle>
	);
}
