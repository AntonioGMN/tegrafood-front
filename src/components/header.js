import styled from "styled-components";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillBell } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const HeaderStyle = styled.header`
	height: 40px;
	width: 100%;
	background: #dc9000;

	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 30px;

	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;

	img {
		height: 40px;
		width: 40px;
		border-radius: 50px;
		margin-right: 12px;
		cursor: pointer;
	}
`;

const HideButton = styled.button`
	display: ${(props) => (props.hide ? "none" : "block")};

	height: 20px;
	width: 60px;
	background: #dc9000;
	border-radius: 5px;
	box-shadow: 0px 4px 4px 0px #00000040;
	cursor: pointer;
	border: none;

	text-align: center;
	color: white;

	position: absolute;
	top: 75px;
	right: 10px;
	z-index: 4;
`;

export default function Header() {
	const [hide, setHide] = useState(true);
	const { logout, user } = useAuth();
	const path = process.env.REACT_APP_API_URL + "uploads/" + user.image;

	return (
		<HeaderStyle>
			<HiShoppingCart size={40} color="white" />
			<AiFillBell size={40} color="white" />
			<img
				onClick={() => {
					setHide(!hide);
				}}
				src={path}
				alt="erro"
			/>
			<HideButton
				onClick={() => {
					logout();
				}}
				hide={hide}
			>
				Logout
			</HideButton>
		</HeaderStyle>
	);
}
