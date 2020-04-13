export const cartMixin = {
  methods: {
    addToCart(event) {
      const id = event.currentTarget.id;
      for (let i = 0; i < this.items.length; i++) {
        if ((this.items.id = id)) {
          const productId = id - 1;

          const cartData = {
            cost: this.items[productId].itemPrice,
            product: this.items[productId].itemName
          };
          this.$store.dispatch("addToCart", cartData);
          break;
        }
      }
    }
  }
};
