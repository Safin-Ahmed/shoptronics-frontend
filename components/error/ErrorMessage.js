import { Snackbar, Alert } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";


const ErrorMessage = () => {
    const errorMessage = useStoreState(store => store.error.message)
    const errorType = useStoreState(store => store.error.type)

    const [open, setOpen] = useState(false);


    const handleClose = () => setOpen(!open);

    useEffect(() => {
        if(errorMessage){
            handleClose();
        }
    }, [errorMessage])




    return (
        <Snackbar
            TransitionComponent={() => <Alert
                severity={errorType}>
                {errorMessage}
            </Alert>}
            autoHideDuration={6000}
            open={open}
            onClose={handleClose}
            key={errorMessage + errorType}
        />
    )
}
export default ErrorMessage;