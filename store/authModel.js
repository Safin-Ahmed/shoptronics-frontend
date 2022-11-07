import { persist, action } from "easy-peasy";
import { removeStorage } from "../utils/storage";



const authModel = persist({
  isAuthenticated: false,
  token: null,
  user: {},
  setLogin: action((state, payload) => {
    state.isAuthenticated = true;
    state.token = payload.token;
    state.user = payload.user;
  }),
  logout: action((state) => {
    state.isAuthenticated = false;
    state.token = null;
    state.user = {};

    removeStorage('authInfo');
  }),
});

export default authModel;
