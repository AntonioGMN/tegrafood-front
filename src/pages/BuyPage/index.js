import Column from "../../components/column";
import Container from "../../components/conteiner";
import BuyProducts from "./buyProducts";
import FilterOrSortProduts from "./filterOrSortProduts";
import Menu from "./nav";
import Header from "../../components/header";

export default function BuyPage() {
	return (
		<>
			<Menu />
			<Column>
				<Header />
				<Container padding="12px">
					<FilterOrSortProduts />
					<BuyProducts />
				</Container>
			</Column>
		</>
	);
}
