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

instance.interceptors.response.use(
	async (response) => {
		return response;
	},
	async (err) => {
		console.log(err);
		const newReponse = async (resolve, reject) => {
			const originalReq = err.config;
			const retry = originalReq._retry;
			if (err.response.status === 401 && retry !== true) {
				originalReq._retry = true;
				try {
					const oldToken = localStorage.getItem("token").replace(/"/g, "");
					const res = await instance.put(`/user/refresh`, { oldToken });
					const newToken = res.data;
					localStorage.setItem("token", JSON.stringify(newToken));
					originalReq.headers["Authorization"] = `Bearer ${newToken}`;
					const newResponse = await axios(originalReq);
					resolve(newResponse);
				} catch (newErr) {
					err.config._retry = true;
					reject(err);
				}
			} else {
				err.config._retry = true;
				reject(err);
			}
		};

		return new Promise(newReponse);
	}
);
