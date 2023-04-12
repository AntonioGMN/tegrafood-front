export default function handlerInput(e, obj, setObj) {
	setObj({ ...obj, [e.target.name]: e.target.value });
}
