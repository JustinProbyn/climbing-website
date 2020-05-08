<template>
  <div class="gear__suggester--container">
    <h2 style="color: #d35400; font-size: 115%">Let us suggest some gear for you</h2>
    <h2
      style="font-size: 100%"
    >Select what type of climbing you would like to do and your budget for each item.</h2>
    <v-card class="selecter__panel">
      <v-container class="selector__container" fluid>
        <v-row align="center">
          <v-col style="width: 100%">
            <v-select
              :items="climbing"
              filled
              chips
              deletable-chips
              color="blue-grey lighten-2"
              label="Type of Climbing"
              item-text="type"
              item-value="type"
              multiple
              v-model="selectedClimbing"
              outlined
            >
              <v-avatar class="accent white--text" left v-text="selectedClimbing"></v-avatar>
            </v-select>
          </v-col>
        </v-row>
      </v-container>

      <v-card-text slider__container>
        <v-slider
          class="slider"
          track-color="grey"
          color="orange darken-3"
          v-model="tickValue"
          step="500"
          max="5500"
          min="500"
          ticks="always"
          :tick-labels="tickLabels"
        ></v-slider>
      </v-card-text>
    </v-card>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="btn" :disabled="disableButton" depressed @click="productSearch">Search</v-btn>
    </v-card-actions>

    <div>
      <div class="gear__suggester--output">
        <div class="search__text">{{ searchText }}</div>
        <v-row class="panels" justify="center">
          <v-expansion-panels v-for="(product, i) in this.products" :key="i" accordion>
            <v-expansion-panel v-if="product.length > 0">
              <v-expansion-panel-header style="color: #d35400">
                {{i.replace(/^\w/, c => c.toUpperCase()).replace(/([A-Z])/g," $1")}}
                <div class="climbingIcons">
                  <v-icon
                    v-if="boulderingSelected && boulderingGear.includes(i)"
                    class="boulderingIcon"
                    color="#c0392b"
                  >mdi-alpha-b-box</v-icon>
                  <v-icon
                    v-if="leadOutsideSelected && leadOutSideGear.includes(i)"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                  <v-icon
                    v-if="leadInGymSelected && leadInGymGear.includes(i)"
                    class="leadGymIcon"
                    color="#2980b9"
                  >mdi-alpha-g-box</v-icon>
                  <v-icon
                    v-if="topropeSelected && topropeGear.includes(i)"
                    class="topropeIcon"
                    color="#27ae60"
                  >mdi-alpha-t-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item, i) in product" :key="i">
                {{ item.itemName }} : R{{
                item.itemPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
                <v-btn
                  outlined
                  class="addToCartBtn"
                  :id="item.itemName"
                  @click="addToCart($event)"
                >Add to cart</v-btn>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </div>

      <!--  -->
    </div>
  </div>

  <!--  -->
</template>

<script>
export default {
  data() {
    return {
      //
      addedToCartAlert: false,
      searchText: "",
      disableButton: true,

      // Display icons
      leadInGymSelected: false,
      leadOutsideSelected: false,
      boulderingSelected: false,
      topropeSelected: false,
      showIconsKey: false,

      //   OPTIONS
      climbing: [
        { type: "Lead (outside)" },
        { type: "Lead (in gym)" },
        { type: "Toprope" },
        { type: "Bouldering" }
      ],
      //   SELECTED
      selectedBudget: "",
      selectedClimbing: [],
      //
      leadOutSideGear: [
        "climbingShoes",
        "carabiners",
        "ropes",
        "ropeBags",
        "chalk",
        "chalkBags",
        "quickdraws",
        "SnCs",
        "belayDevices",
        "harnesses"
      ],
      leadInGymGear: [
        "climbingShoes",
        "carabiners",
        "ropes",
        "ropeBags",
        "chalk",
        "chalkBags",
        "belayDevices",
        "harnesses"
      ],
      boulderingGear: ["climbingShoes", "chalk", "chalkBags", "crashPads"],
      topropeGear: ["climbingShoes", "chalk", "chalkBags", "harnesses"],
      //
      products: {
        climbingShoes: [],
        ropes: [],
        chalk: [],
        chalkBags: [],
        SnCs: [],
        belayDevices: [],
        ropeBags: [],
        helmets: [],
        harnesses: [],
        quickdraws: [],
        carabiners: [],
        crashPads: []
      },

      // slider
      tickValue: "",
      tickLabels: [
        "R500",
        "R1,000",
        "R1,500",
        "R2,000",
        "R2,500",
        "R3,000",
        "R3,500",
        "R4,000",
        "R4,500",
        "R5,000",
        "R5,500"
      ]
    };
  },
  computed: {
    getItemsInStock() {
      return this.$store.getters.getGearshopData;
    }
  },
  watch: {
    selectedClimbing() {
      if (this.selectedClimbing.length >= 0) {
        this.disableButton = false;
      }
      if (this.selectedClimbing.length <= 0) {
        this.disableButton = true;
      }
    }
  },
  methods: {
    test() {},
    // Contained Add to cart Method
    addToCart(event) {
      const id = event.currentTarget.id;
      for (let i = 0; i < Object.entries(this.getItemsInStock).length; i++) {
        Object.entries(this.getItemsInStock)[i].forEach(product => {
          for (let i = 0; i < product.length; i++)
            if (product[i].itemName == id) {
              const cartData = {
                count: 1,
                img: product[i].itemPicture,
                cost: product[i].itemPrice,
                product: product[i].itemName
              };
              this.$store.dispatch("addToCart", cartData);
              break;
            }
        });
      }
    },

    /* GEAR SUGGESTOR LOGIC */
    productSearch() {
      /*****SETTING BUDGET*****/

      const clonedGetItemsinStock = JSON.parse(
        JSON.stringify(this.getItemsInStock)
      );

      for (let i = 0; i < Object.entries(clonedGetItemsinStock).length; i++) {
        Object.entries(clonedGetItemsinStock).forEach(items => {
          items[1].forEach(el => {
            if (el.itemPrice > this.tickValue) {
              const index = items[1].indexOf(el);
              items[1] = items[1]
                .splice(index, 1)
                .slice()
                .filter(value => Object.keys(value).length !== 0);
            }
          });
        });
      }

      /**********CLEARING OPTIONS************/

      Object.entries(this.products).forEach(el => {
        if (el[1].length >= 1) {
          this.products[el[0]] = [];
        }
      });

      /*****CLEARING ICONS*****/

      if (!this.selectedClimbing.includes("Lead (in gym)")) {
        this.leadInGymSelected = false;
      }
      if (!this.selectedClimbing.includes("Lead (outside)")) {
        this.leadOutsideSelected = false;
      }
      if (!this.selectedClimbing.includes("Bouldering")) {
        this.boulderingSelected = false;
      }
      if (!this.selectedClimbing.includes("Toprope")) {
        this.topropeSelected = false;
      }

      /**********SETTING TEXT************/
      if (this.selectedClimbing.length > 1) {
        this.showIconsKey = true;
        this.searchText =
          "We have highlighted items that are shared between your chosen disciplines.";
      } else this.searchText = "";

      /**********DISPLAYING OPTIONS************/

      /*LEAD IN GYM*/

      if (this.selectedClimbing.includes("Lead (in gym)")) {
        if (
          this.selectedClimbing.length <= 1 &&
          this.selectedClimbing.includes("Lead (in gym)")
        ) {
          this.leadInGymSelected = false;
        } else this.leadInGymSelected = true;

        Object.entries(this.products).forEach(el => {
          if (el[1].length <= 0) {
            Object.entries(clonedGetItemsinStock).forEach(item => {
              if (
                el[0].toString() == item[0].toString() &&
                this.leadInGymGear.includes(el[0].toString())
              ) {
                this.products[el[0]] = item[1];
              }
            });
          }
        });
      }
      /********************* */
      /*LEAD OUTSIDE*/
      if (this.selectedClimbing.includes("Lead (outside)")) {
        if (
          this.selectedClimbing.length <= 1 &&
          this.selectedClimbing.includes("Lead (outside)")
        ) {
          this.leadOutsideSelected = false;
        } else this.leadOutsideSelected = true;

        Object.entries(this.products).forEach(el => {
          if (el[1].length <= 0) {
            Object.entries(clonedGetItemsinStock).forEach(item => {
              if (
                el[0].toString() == item[0].toString() &&
                this.leadOutSideGear.includes(el[0].toString())
              ) {
                this.products[el[0]] = item[1];
              }
            });
          }
        });
      }
      /********************* */
      /*BOULDERING*/
      if (this.selectedClimbing.includes("Bouldering")) {
        if (
          this.selectedClimbing.length <= 1 &&
          this.selectedClimbing.includes("Bouldering")
        ) {
          this.boulderingSelected = false;
        } else this.boulderingSelected = true;

        Object.entries(this.products).forEach(el => {
          if (el[1].length <= 0) {
            Object.entries(clonedGetItemsinStock).forEach(item => {
              if (
                el[0].toString() == item[0].toString() &&
                this.boulderingGear.includes(el[0].toString())
              ) {
                this.products[el[0]] = item[1];
              }
            });
          }
        });
      }

      /********************* */
      /*TOP ROPE*/
      if (this.selectedClimbing.includes("Toprope")) {
        if (
          this.selectedClimbing.length <= 1 &&
          this.selectedClimbing.includes("Toprope")
        ) {
          this.topropeSelected = false;
        } else this.topropeSelected = true;

        Object.entries(this.products).forEach(el => {
          if (el[1].length <= 0) {
            Object.entries(clonedGetItemsinStock).forEach(item => {
              if (
                el[0].toString() == item[0].toString() &&
                this.topropeGear.includes(el[0].toString())
              ) {
                this.products[el[0]] = item[1];
              }
            });
          }
        });
      }
    }
  }
};
</script>

<style scoped>
/* layout */
.gear__suggester--container {
  position: absolute;
  flex-wrap: wrap;
  width: 35%;
  margin-top: 275px;
  margin-left: 20px;
}

/* h2 header */

h2 {
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 110%;
  padding: 5px;
  color: rgb(94, 94, 94);
  background-color: rgb(243, 243, 243);
  padding: 5px;
  border-radius: 3px;
}

/* Gear Form */

.gear__suggester--output {
  margin-top: 10px;
  width: 100%;
}

/* Button */

.btn :hover {
  color: #fff;
}

.btn {
  width: 100%;
  border: 1px solid #d35400;
  color: #d35400;
  text-transform: uppercase;
  padding: 5px;
  font-size: 90%;
  font-weight: 600;
  transition: color 0.3s;
  transition: background-color 0.3s;
}

.addToCartBtn {
  margin-left: 40px;
  font-size: 60%;
}

.addToCartBtn:link,
.addToCartBtn:visited {
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(219, 219, 219);
  transition: color 0.3s;

  word-spacing: 2px;
}

.addToCartBtn:hover,
.addToCartBtn:active {
  color: #d35400;
}

/* Climbing type icons */

.climbingIcons {
  margin-left: 10px;
}

/* selector */
.selecter__panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
}

.selector__container {
  height: 100px;
}
/* slider */

.slider {
  font-size: 80%;
}

/* Dropdown panels */

.panels {
  margin-top: 15px;
  margin-left: 5px;
  width: 100%;
}

.addToCartAlert {
  display: flex;
  justify-content: center;
  width: 100px;
  color: #d35400;
  border: 1px solid #d35400;
  height: 20px;
}

/* Search text */

.search__text {
  padding: 5px;
}
</style>
