export const isObjEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export const objDeepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

export const objSetToStorage = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
};

export const objGetFromStorage = (key) => {
    const item = localStorage.getItem(key);
    if (!item || isObjEmpty(JSON.parse(item))) {
        return null;
    }
    return JSON.parse(item);
};

export const objClearFromStorage = (key) => {
    localStorage.removeItem(key);
};