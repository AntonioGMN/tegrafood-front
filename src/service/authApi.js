import { instance, headerConfig } from ".";

export async function signUp(user) {
	return await instance.post("/signUp", user);
}

export async function login(user) {
	const response = await instance.post("login", user);
	return response;
}

export async function logout() {
	const response = await instance.delete("logout", headerConfig());
	return response;
}
