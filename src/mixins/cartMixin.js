export const cartMixin = {
  methods: {
    addToCart(event) {
      const id = event.currentTarget.id;
      for (let i = 0; i < this.getGear.length; i++) {
        if ((this.getGear.id = id)) {
          const productId = id - 1;

          const cartData = {
            count: this.getGear[productId].count,
            img: this.getGear[productId].itemPicture,
            cost: this.getGear[productId].itemPrice,
            product: this.getGear[productId].itemName
          };
          event.currentTarget.innerHTML = "Item added!";
          this.$store.dispatch("addToCart", cartData);
          break;
        }
      }
    }
  }
};
