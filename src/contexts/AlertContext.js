import { createContext, useContext, useState } from "react";
import Alert from "../components/alert.js";

const AlertContext = createContext();

export default function AlertProvide({ children }) {
	const [message, setMessage] = useState(null);

	function handleClose() {
		setMessage(null);
	}

	return (
		<AlertContext.Provider value={{ message, setMessage, handleClose }}>
			{children}
			<Alert />
		</AlertContext.Provider>
	);
}

export const useAlert = () => useContext(AlertContext);
