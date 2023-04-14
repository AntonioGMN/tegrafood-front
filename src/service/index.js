import axios from "axios";

const Base_URL = "http://localhost:5000";

export const instance = axios.create({
	baseURL: Base_URL,
});

export function headerConfig() {
	const token = JSON.parse(localStorage.getItem("token"));
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}
