import { instance, headerConfig } from ".";

export async function addToBuyCar(productId) {
	console.log(productId);
	return await instance.post(
		"/shopping",
		{ productId: productId },
		headerConfig()
	);
}

export async function get() {
	return await instance.get("/shopping/user", headerConfig());
}
