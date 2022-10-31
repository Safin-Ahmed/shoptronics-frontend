import { createStore } from "easy-peasy";
import authModel from "./authModel";
import cartModel from "./cartModel";
import snackbarModel from "./snackbarModel";


const store = createStore({
  auth: authModel,
  cart: cartModel,
  snackbar: snackbarModel,
});

export default store;
