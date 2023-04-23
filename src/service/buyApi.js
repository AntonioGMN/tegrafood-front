import { instance, headerConfig } from ".";

export async function addToBuyCar(productId) {
	return await instance.post(
		"/shopping",
		{ productId: productId },
		headerConfig()
	);
}

export async function get() {
	return await instance.get("/shopping/user", headerConfig());
}

export async function updateQuantity(newQuantity, shoppingId) {
	return await instance.patch(
		"/shopping/quantity",
		{ newQuantity, shoppingId },
		headerConfig()
	);
}

export async function deleteById(shoppingId) {
	return await instance.delete("/shopping", {
		data: { shoppingId },
		headers: headerConfig(),
	});
}

export async function finishShopping(shoppingId) {
	return await instance.patch(
		"/shopping/finish",
		{ shoppingId },
		headerConfig()
	);
}
