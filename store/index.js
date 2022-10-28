import { createStore } from "easy-peasy";
import authModel from "./authModel";
import cartModel from "./cartModel";
import errorModel from "./errorModel";


const store = createStore({
  auth: authModel,
  cart: cartModel,
  error: errorModel,
});

export default store;
