import { instance } from ".";

export async function findImage(filePath) {
	return await instance.get(`/image/:${filePath}`);
}
