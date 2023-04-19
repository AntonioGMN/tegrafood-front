import { instance, headerConfig } from ".";

export async function addToBuyCar(productId) {
	console.log(productId);
	return await instance.post(
		"/shopping",
		{ productId: productId },
		headerConfig()
	);
}
