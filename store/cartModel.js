import { PlaylistAddOutlined, Splitscreen } from "@mui/icons-material";
import { action, persist } from "easy-peasy";
const cartModel = persist(
  {
    cart: [],
    updateItem: action((state, payload) => {
      const product = state.cart.find((item) => item.id === payload.id);

      if (!product) {
        return;
      }

      if (payload.quantity > 0) {
        product.quantity = payload.quantity;
      } else {
        state.cart.filter((item) => item.id !== payload.id);
      }
    }),
    addItem: action((state, payload) => {
      const product = state.cart.find(
        (item) =>
          (item.id === payload.id && item.variantId === payload.variantId) ||
          (item.id === payload.id && item.variantId === null)
      );

      if (product) {
        if (payload.quantity) {
          product.quantity += payload.quantity;
        } else {
          product.quantity++;
        }
      } else {
        state.cart.push({
          id: payload.id,
          title: payload.title,
          imgUrl: payload.imgUrl,
          variantId: payload.variantId || null,
          price: payload.price,
          discountPrice: payload.discountPrice || null,
          quantity: payload.quantity || 1,
        });
      }
    }),
    removeItem: action((state, payload) => {
      const product = state.cart.find((item) => item.id === payload.id);
      if (!product) return;

      if (product.quantity > 1) {
        product.quantity--;
      } else {
        state.cart.find((item) => item.id !== payload.id);
      }
    }),
    deleteItem: action((state, payload) => {
      // const newCart = [...state.cart];
      const productIndex = state.cart.findIndex(
        (item) => item.id === payload.id
      );
      state.cart.splice(productIndex, 1);
    }),

    clear: action((state, payload) => {
      state.cart = [];
    }),
  },
  { storage: "localStorage" }
);

export default cartModel;
