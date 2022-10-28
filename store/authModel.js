import { persist, action } from "easy-peasy";
const authModel = persist({
  isAuthenticated: false,
  authUser: {},
  login: action((state, payload) => {
    state.isAuthenticated = true;
    state.authUser = payload;
  }),
  logout: action((state) => {
    state.isAuthenticated = false;
    state.authUser = {};
  }),
  register: action((state, payload) => { }),
});

export default authModel;
