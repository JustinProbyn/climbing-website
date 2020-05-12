/**
 * This is a mixin function that increases or decreases the amount of a product
 * a user adds to the cart.
 * It is used with each item in the gear shop
 */
export const IncreaseDecreaseMixin = {
  methods: {
    increaseProduct(event) {
      const id = event.currentTarget.id;
      for (let i = 0; i < this.getGear.length; i++) {
        if ((this.getGear.id = id)) {
          const product = this.product;
          this.$store.dispatch("increaseCount", { id, product });
          break;
        }
      }
    },
    decreaseProduct(event) {
      const id = event.currentTarget.id;
      for (let i = 0; i < this.getGear.length; i++) {
        if ((this.getGear.id = id)) {
          const product = this.product;
          this.$store.dispatch("decreaseCount", { id, product });
          break;
        }
      }
    }
  }
};
