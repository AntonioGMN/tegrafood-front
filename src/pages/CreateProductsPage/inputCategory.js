import DivInput from "../../components/divInput";
import styled from "styled-components";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export default function InputCategory({ formData, setFormData }) {
	const fristCategory =
		formData.category.charAt(0).toUpperCase() +
		formData.category.slice(1).toLowerCase();
	const [category, setCategory] = useState(fristCategory);
	const [show, setShow] = useState(false);

	return (
		<DivInput>
			<label>
				Categoria
				{show ? (
					<AiOutlineClose
						size={15}
						color="#00000080"
						onClick={() => setShow(false)}
					/>
				) : (
					<RiArrowDownSLine
						size={20}
						color="#00000080"
						onClick={() => setShow(true)}
					/>
				)}
			</label>

			{show ? (
				<CategoryOption show={show}>
					<p
						onClick={() => {
							setCategory("Pizza");
							setFormData({ ...formData, category: "pizza" });
							setShow(false);
						}}
					>
						Pizza
					</p>
					<p
						onClick={() => {
							setCategory("Sobremesa");
							setFormData({ ...formData, category: "sobremesa" });
							setShow(false);
						}}
					>
						Sobremesa
					</p>
					<p
						onClick={() => {
							setCategory("Lanche");
							setFormData({ ...formData, category: "lanche" });
							setShow(false);
						}}
					>
						Lanche
					</p>
					<p
						onClick={() => {
							setCategory("Açaí");
							setFormData({ ...formData, category: "açaí" });
							setShow(false);
						}}
					>
						Açaí
					</p>
					<p
						onClick={() => {
							setCategory("Bebidas");
							setFormData({ ...formData, category: "bebidas" });
							setShow(false);
						}}
					>
						Bebidas
					</p>
				</CategoryOption>
			) : (
				<p>{category}</p>
			)}
		</DivInput>
	);
}

const CategoryOption = styled.div`
	width: 100%;
	background: #ffffff;
	display: ${(props) => (props.show ? "flex" : "none")};
	flex-direction: column;
	color: "#0000008";
	z-index: 1;

	p {
		border: 1px solid #00000080;
	}
`;
