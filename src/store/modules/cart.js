const cart = {
  state: {
    cartData: []
  },
  mutations: {
    // updates cart with newly added item
    setCart(state, cartData) {
      console.log(state.cartData);
      state.cartData.push(cartData);
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
      console.log(state.cartData);
    },
    // loads cart from local storage on refresh
    loadCart(state, cartData) {
      state.cartData = cartData;
    },
    clearCart(state) {
      state.cartData = [];
      localStorage.removeItem("cartData");
    },
    deleteCartItem(state, index) {
      console.log(index);
      state.cartData.splice(index, 1);
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
      console.log(state.cartData);
    }
  },
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
      // load cart items from local storage
      var cartData = JSON.parse(localStorage.getItem("cartData"));
      if (cartData) {
        commit("loadCart", cartData);
      } else return;
    }
  },
  getters: {
    getCartData(state) {
      return state.cartData;
    }
  }
};

export default cart;
