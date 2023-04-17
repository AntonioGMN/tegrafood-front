import { instance } from ".";

export async function getAll() {
	return await instance.get("/products");
}

export async function getWithAlphabeticalOrde() {
	return await instance.get("/products/filters/onAlphabeticalOrde");
}

export async function getByPrice(value1, value2, alphabeticalOrder) {
	return await instance.get(
		`/products/filters/byPrice?start=${value1}&end=${value2}${
			alphabeticalOrder ? "&alphabeticalOrder" : ""
		}`
	);
}

export async function getByPriceBiggerThen(value, alphabeticalOrder) {
	return await instance.get(
		`/products/filters/byPrice?biggerThen=${value}${
			alphabeticalOrder ? "&alphabeticalOrder" : ""
		}`
	);
}
