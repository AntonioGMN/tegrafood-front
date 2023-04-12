import foodPresentation from "../assets/foodPresentation.png";
import styled from "styled-components";

const FoodPresentationImg = styled.img`
	height: 100vh;
	width: 480px;

	background-image: url(${foodPresentation});

	@media (max-width: 700px) {
		display: none;
	}
`;

export default FoodPresentationImg;
