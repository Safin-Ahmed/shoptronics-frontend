import store from '../store'
import { format } from 'date-fns';


export const getUserNameFirstLetter = () => {
    try {
        return store?.getState()?.auth?.user?.username?.charAt(0)?.toUpperCase();
    } catch (error) {
        return "U";
    }
}


export const dateTime = (date = null, type = 1) => {
    if (new Date(date).toString() === 'Invalid Date') {
        return null;
    }
    try {
        if (type === 1) {
            return format(new Date(date), 'MMM dd, yyyy kk:mm aaa');
        }
        if (type === 2) {
            return format(new Date(date), 'MMM dd, yyyy');
        }
        if (type === 3) {
            return format(new Date(date), 'kk:mm aaa');
        }
        if (type === 4) {
            return format(new Date(date), 'yyyy');
        }
        return date;
    } catch (_e) {
        return null;
    }
};
