import HeadStyle from "../../components/header";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillBell } from "react-icons/ai";
import foodPresentation from "../../assets/foodPresentation.png";

export default function Header() {
	return (
		<HeadStyle>
			<HiShoppingCart size={40} color="white" />
			<AiFillBell size={40} color="white" />
			<img src={foodPresentation} alt="erro" />
		</HeadStyle>
	);
}
