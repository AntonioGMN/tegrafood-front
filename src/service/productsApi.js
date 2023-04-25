import { instance, headerConfig } from ".";

export async function getAll() {
	return await instance.get("/products", headerConfig());
}

export async function getWithAlphabeticalOrde(filterCategory) {
	return await instance.get(
		`/products/filters?alphabeticalOrder${
			filterCategory ? "&category=" + filterCategory : ""
		}`,
		headerConfig()
	);
}

export async function getWithFilter(category, alphabeticalOrder, start, end) {
	const filterAlphabeticalOrder = alphabeticalOrder ? "alphabeticalOrder" : "";
	const filterCategory = category !== null ? `category=${category}` : "";
	let priceFilter = "";
	if (start !== false && end !== false) {
		priceFilter = `start=${start}&end=${end}`;
	} else if (start !== false) {
		priceFilter = `start=${start}`;
	}

	function addOrNot(before, nest) {
		if (before !== "") return "&" + nest;
		else return nest;
	}

	return await instance.get(
		`/products/filters?${
			filterAlphabeticalOrder +
			addOrNot(filterAlphabeticalOrder, filterCategory) +
			addOrNot(filterCategory, priceFilter)
		}`,
		headerConfig()
	);
}

export async function create(product) {
	await instance.post("/products", product, headerConfig());
}
