export const IncreaseDecreaseMixin = {
  methods: {
    increaseProduct(event) {
      const id = event.currentTarget.id;
      for (let i = 0; i < this.getGear.length; i++) {
        if ((this.getGear.id = id)) {
          const product = "belayDevices";
          this.$store.dispatch("increaseCount", { id, product });
          break;
        }
      }
    },
    decreaseProduct(event) {
      const id = event.currentTarget.id;
      for (let i = 0; i < this.getGear.length; i++) {
        if ((this.getGear.id = id)) {
          const product = "belayDevices";
          this.$store.dispatch("decreaseCount", { id, product });
          break;
        }
      }
    }
  }
};
