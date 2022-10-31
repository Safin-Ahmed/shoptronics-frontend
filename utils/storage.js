export const setStorage = (key, value) => {
    if (key && value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}


export const getStorage = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : undefined;
}