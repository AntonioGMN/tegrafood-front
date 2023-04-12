import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const ReturnButton = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
	box-shadow: none;
	cursor: pointer;

	position: absolute;
	top: 22px;
	left: 23px;
`;

function ArrowReturnButton() {
	return (
		<Link to="/">
			<ReturnButton>
				<AiOutlineArrowLeft size={24} />
			</ReturnButton>
		</Link>
	);
}

export default ArrowReturnButton;
