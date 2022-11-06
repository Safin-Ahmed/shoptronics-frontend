import { Snackbar, Alert } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";


const CustomSnackbar = () => {
    const message = useStoreState(store => store.snackbar.message)
    const msgType = useStoreState(store => store.snackbar.type)

    const [open, setOpen] = useState(false);


    const handleClose = () => setOpen(!open);

    useEffect(() => {
        if (message) {
            handleClose();
        }
    }, [message])




    return (
        <Snackbar
            TransitionComponent={() => <Alert
                severity={msgType}>
                {message}
            </Alert>}
            autoHideDuration={6000}
            open={open}
            onClose={handleClose}
            key={message + msgType}
        />
    )
}
export default CustomSnackbar;