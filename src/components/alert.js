import { Alert as MUIAlert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useAlert } from "../contexts/AlertContext";

export default function Alert() {
	const { message, handleClose } = useAlert();

	return (
		<Snackbar
			open={!!message}
			autoHideDuration={6000}
			onClose={handleClose}
			TransitionComponent="SlideTransition"
		>
			<MUIAlert
				variant="filled"
				onClose={handleClose}
				severity={message?.type || "error"}
				sx={{ width: "100%" }}
			>
				{message?.text}
			</MUIAlert>
		</Snackbar>
	);
}
