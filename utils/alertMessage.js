import store from '../store';

const alertMessage = (message, type = 'success') => {
    if (!message) return;

    store.getActions().snackbar.setMessage({
        message,
        type
    })
}
export default alertMessage;