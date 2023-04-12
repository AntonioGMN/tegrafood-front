import Column from "../../components/column";
import Container from "../../components/conteiner";
import FilterOrSortProduts from "./filterOrSortProduts";
import Header from "./header";
import Menu from "./nav";

export default function BuyPage() {
	return (
		<>
			<Menu />
			<Column>
				<Header />
				<Container>
					<FilterOrSortProduts />
				</Container>
			</Column>
		</>
	);
}
