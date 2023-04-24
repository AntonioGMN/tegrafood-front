import { MdConveyorBelt } from "react-icons/md";
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

	console.log(category, alphabeticalOrder, start, end);

	function addOrNot(before, nest) {
		if (before !== "") return "&" + nest;
		else return nest;
	}

	console.log(
		`/products/filters?${
			filterAlphabeticalOrder +
			addOrNot(filterAlphabeticalOrder, filterCategory) +
			addOrNot(filterCategory, priceFilter)
		}`
	);

	return await instance.get(
		`/products/filters?${
			filterAlphabeticalOrder +
			addOrNot(filterAlphabeticalOrder, filterCategory) +
			addOrNot(filterCategory, priceFilter)
		}`,
		headerConfig()
	);
}

export async function getByCategory(category, alphabeticalOrder) {
	return await instance.get(
		`/products/filters?category=${category}${
			alphabeticalOrder ? "&alphabeticalOrder" : ""
		}`,
		headerConfig()
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
		}${filterCategory ? "&category=" + filterCategory : ""}`,
		headerConfig()
	);
}

export async function getByPriceBiggerThen(
	value,
	alphabeticalOrder,
	filterCategory
) {
	return await instance.get(
		`/products/filters?start=${value}${
			alphabeticalOrder ? "&alphabeticalOrder" : ""
		}${filterCategory ? "&category=" + filterCategory : ""}`,
		headerConfig()
	);
}
