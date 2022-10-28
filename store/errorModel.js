import { persist, action } from "easy-peasy";


const errorModel = {
    message: null,
    type: null,
    setError: action((state, payload) => {
        state.message = payload.message
        state.type = payload.type
    }),
    clearError: action((state, payload) => {
        state.message = null
        state.type = null
    }),
};
export default errorModel;
