import {  action } from "easy-peasy";


const snackbarModel = {
    message: null,
    type: null,
    setMessage: action((state, payload) => {
        state.message = payload.message
        state.type = payload.type
    }),
    clearMessage: action((state) => {
        state.message = null
        state.type = null
    }),
};
export default snackbarModel;
