import Column from "../../components/column";
import Container from "../../components/conteiner";
import Header from "../../components/header";
import SectionProducts, { Article } from "../../components/sectionProducts";
import Title from "../../components/title";
import { FaTrash } from "react-icons/fa";
import Div from "../../components/div";
import BaseButton from "../../components/baseButton";
import Table from "../../components/table";
import AddCupom from "../../components/addCupom";
import FinishBuysection from "../../components/FinishBuySection";
import { Link } from "react-router-dom";

export default function FinishShoppingPage() {
	const image =
		"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBSRXhpZgAASUkqAAgAAAACAA4BAgAkAAAAJgAAABIBAwABAAAAAQAAAAAAAABCZWF1dGlmdWwgYW5ncnkgZG9tZXN0aWMgY2F0IGF0IGhvbWX/7QBwUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAFQcAlAACUFhcm9uQW1hdBwCeAAkQmVhdXRpZnVsIGFuZ3J5IGRvbWVzdGljIGNhdCBhdCBob21lHAJuABhHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG//4QUoaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcy9pU3RvY2twaG90byIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEw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";
	return (
		<Column>
			<Header />
			<Container>
				<Title>Meu carrinho</Title>
				<SectionProducts maxHeight="440px">
					<section>
						<Article width="95%">
							<img src={image} alt="err" />
							<div>
								<p>comida</p>
								<p>asdfasdf</p>
							</div>
							<div>
								<span>R$10</span>
								<button>Comprar</button>
							</div>
						</Article>
						<FaTrash size={30} color="#223263" />
					</section>
					<section>
						<Article width="95%">
							<img src={image} alt="err" />
							<div>
								<p>comida</p>
								<p>asdfasdf</p>
							</div>
							<div>
								<span>R$10</span>
								<button>Comprar</button>
							</div>
						</Article>
						<FaTrash size={30} color="#223263" />
					</section>
					<section>
						<Article width="95%">
							<img src={image} alt="err" />
							<div>
								<p>comida</p>
								<p>asdfasdf</p>
							</div>
							<div>
								<span>R$10</span>
								<button>Comprar</button>
							</div>
						</Article>
						<FaTrash size={30} color="#223263" />
					</section>
				</SectionProducts>
				<Div gap row height="128px" width="95%">
					<AddCupom row>
						<p>Cupom de desconto</p>
						<BaseButton>Adicionar</BaseButton>
					</AddCupom>
					<Table>
						<thead>
							<tr>
								<th>Header 1</th>
								<td>Content 1</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Header 2</th>
								<td>Content 6</td>
							</tr>
						</tbody>
					</Table>
				</Div>
				<FinishBuysection>
					<Link to="/home">Escolher mais</Link>
					<BaseButton width="190px">Feichar pedido</BaseButton>
				</FinishBuysection>
			</Container>
		</Column>
	);
}
