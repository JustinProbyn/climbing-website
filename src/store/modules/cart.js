/**
 * The cart module. It manages the cart state.
 * This module receives data from the cartMixin (which has an add-to-cart function)
 * and stores it in localstorage (to be loaded when page is refreshed)
 */

const cart = {
  state: {
    cartData: []
  },
  // ///////////////////////////
  // ////////MUTATIONS///////////
  mutations: {
    // updates cart with newly added item
    setCart(state, cartData) {
      state.cartData.forEach(el => {
        console.log(el);

        if (el.product == cartData.product) {
          cartData.count = cartData.count + 1;
          state.cartData.splice(state.cartData.indexOf(el), 1);
        }
      });
      state.cartData.push(cartData);
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    // sets cart from localstorage on refresh
    loadCart(state, cartData) {
      state.cartData = cartData;
    },
    clearCart(state) {
      state.cartData = [];
      localStorage.removeItem("cartData");
    },
    deleteCartItem(state, index) {
      state.cartData.splice(index, 1);
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    }
  },
  // ///////////////////////////
  // ////////ACTIONS///////////
  actions: {
    clearCart({ commit }) {
      commit("clearCart");
    },

    addToCart({ commit }, cartData) {
      commit("setCart", cartData);
    },
    deleteCartItem({ commit }, index) {
      commit("deleteCartItem", index);
    },
    loadCartOnRefresh({ commit }) {
      // load cart items from localstorage
      const cartData = JSON.parse(localStorage.getItem("cartData"));
      if (cartData) {
        commit("loadCart", cartData);
      } else return;
    }
  },
  // ///////////////////////////
  // ////////GETTERS///////////
  getters: {
    getCartData(state) {
      return state.cartData;
    }
  }
};

export default cart;
