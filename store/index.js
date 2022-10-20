import { createStore } from "easy-peasy";
import authModel from "./authModel";
import cartModel from "./cartModel";
const store = createStore({
  auth: authModel,
  cart: cartModel,
});

export default store;
