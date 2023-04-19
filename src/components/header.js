import styled from "styled-components";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillBell } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { BiMenu } from "react-icons/bi";

const HeaderStyle = styled.header`
	min-height: 80px;
	width: 100%;
	background: #dc9000;
	padding: 0 12px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	justify-content: flex-end;
	gap: 30px;

	div {
		display: flex;
		gap: 30px;

		:first-of-type {
			display: none;
		}
	}

	img {
		height: 40px;
		width: 40px;
		border-radius: 50px;
		margin-right: 12px;
		cursor: pointer;
	}

	@media (max-width: 900px) {
		justify-content: space-between;

		div:first-child {
			display: block;
		}
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
	top: 85px;
	right: 10px;
	z-index: 4;
`;

export default function Header({ showMenu }) {
	const [hide, setHide] = useState(true);
	const { logout, user } = useAuth();
	let path;
	if (user !== null) {
		path = process.env.REACT_APP_API_URL + "uploads/" + user.image;
	}

	console.log(hide);

	return (
		<HeaderStyle>
			<div>
				<BiMenu
					size={40}
					color="white"
					onClick={() => {
						showMenu(true);
					}}
				/>
			</div>
			<div>
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
			</div>
		</HeaderStyle>
	);
}
