import { persist, action } from "easy-peasy";
const authModel = persist(
  {
    isAuthenticated: false,
    login: action((state, payload) => {}),
    logout: action((state, payload) => {}),
    register: action((state, payload) => {}),
  },
  { storage: "localStorage" }
);

export default authModel;
