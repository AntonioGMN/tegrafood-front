import NavStyle from "../../components/nav";
import logoTegrafood from "../../assets/logoTegrafood.png";

export default function Menu() {
	return (
		<NavStyle>
			<img src={logoTegrafood} alt="erro-logo" />
			<div>
				<button>Todos</button>
				<button>Pizza</button>
				<button>Sobremesa</button>
				<button>Pastel</button>
				<button>Açai</button>
				<button>Bebidas</button>
			</div>
		</NavStyle>
	);
}
