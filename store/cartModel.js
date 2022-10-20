import { action } from "easy-peasy";
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
      const product = state.cart.find((item) => item.id === payload.id);

      if (product) {
        product.quantity++;
      } else {
        state.cart.push({
          id: payload.id,
          variantId: payload.variantId ? payload.variantId : null,
          price: payload.price,
          discountPrice: payload.discountPrice,
          quantity: payload.quantity,
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
  },
  { localStorage: true }
);

export default cartModel;
