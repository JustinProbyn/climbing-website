import firebase from "firebase";
const gear = {
  state: {
    itemsInStock: []
  },
  mutations: {
    // Sets ItemsInStock
    increaseCountMutation(state, { id, product }) {
      Object.entries(state.itemsInStock).forEach(el => {
        if (el[0] == product) {
          Object.entries(el[1]).forEach(item => {
            if (item[1].id == id) {
              return item[1].count++;
            }
          });
        }
      });
    },
    decreaseCountMutation(state, { id, product }) {
      Object.entries(state.itemsInStock).forEach(el => {
        if (el[0] == product) {
          Object.entries(el[1]).forEach(item => {
            if (item[1].id == id) {
              return item[1].count--;
            }
          });
        }
      });
    },
    setGearShop(state) {
      firebase
        .firestore()
        .collection("gearShopData")
        .get()
        .then(res => {
          res.docs
            .map(doc => doc.data())
            .forEach(el => {
              state.itemsInStock = el;
            });
          console.log(state.itemsInStock);
        });
    }
  },
  actions: {
    setGearShopItems({ commit }) {
      commit("setGearShop");
    },
    increaseCount({ commit }, { id, product }) {
      commit("increaseCountMutation", { id, product });
    },
    decreaseCount({ commit }, { id, product }) {
      commit("decreaseCountMutation", { id, product });
    }
  },
  getters: {
    getGearshopData(state) {
      return state.itemsInStock;
    }
  }
};

export default gear;
