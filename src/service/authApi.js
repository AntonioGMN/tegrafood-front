import { instance, headerConfig } from ".";

export async function signUp(user) {
	try {
		return await instance.post("/signUp", user);
	} catch (err) {
		console.log(err);
	}
}

export async function login(user) {
	const r = await instance.post("login", user);
	console.log(r);
	return r;
}

export async function logout() {
	return await instance.delete("logout", headerConfig());
}
