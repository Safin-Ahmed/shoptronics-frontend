import { Snackbar, Alert } from "@mui/material";
import { action, useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";



const MESSAGE_TIMEOUT = 3000;


const CustomSnackbar = () => {
    const message = useStoreState(store => store.snackbar.message)
    const msgType = useStoreState(store => store.snackbar.type)


    const snackbarAction = useStoreActions(actions => actions.snackbar)

    const [open, setOpen] = useState(false);


    const handleClose = () => setOpen(!open);

    useEffect(() => {
        if (message) {
            handleClose();

            // clear message 
            setTimeout(() => {
                snackbarAction.clearMessage();
            }, MESSAGE_TIMEOUT)
        }
    }, [message])



    if(!message){
        return null;
    }

    return (
        <Snackbar
            TransitionComponent={() => <Alert
                severity={msgType}>
                {message}
            </Alert>}
            autoHideDuration={MESSAGE_TIMEOUT}
            open={open}
            onClose={handleClose}
            key={message + msgType}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        />
    )
}
export default CustomSnackbar;