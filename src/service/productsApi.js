import { instance } from ".";

export async function getAll() {
	return await instance.get("/products");
}

export async function getWithAlphabeticalOrde(filterCategory) {
	return await instance.get(
		`/products/filters?alphabeticalOrder${
			filterCategory ? "&category=" + filterCategory : ""
		}`
	);
}

export async function getByCategory(category, alphabeticalOrder) {
	return await instance.get(
		`/products/filters?category=${category}${
			alphabeticalOrder ? "&alphabeticalOrder" : ""
		}`
	);
}

export async function getByPrice(
	value1,
	value2,
	alphabeticalOrder,
	filterCategory
) {
	return await instance.get(
		`/products/filters?start=${value1}&end=${value2}${
			alphabeticalOrder ? "&alphabeticalOrder" : ""
		}${filterCategory ? "&category=" + filterCategory : ""}`
	);
}

export async function getByPriceBiggerThen(
	value,
	alphabeticalOrder,
	filterCategory
) {
	return await instance.get(
		`/products/filters?biggerThen=${value}${
			alphabeticalOrder ? "&alphabeticalOrder" : ""
		}${filterCategory ? "&category=" + filterCategory : ""}`
	);
}
