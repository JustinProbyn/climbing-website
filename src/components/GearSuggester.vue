<template>
  <div class="gear__suggester--container">
    <v-card class="selecter__panel">
      <v-container class="selector__container" fluid>
        <v-row align="center">
          <v-col style="width: 100%">
            <v-select
              :disabled="isUpdating"
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
      <v-btn @click="test">TEST</v-btn>
      <v-btn @click="test2">TEST2</v-btn>

      <v-card-text slider__container>
        <v-slider
          thumb-label="always"
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
      <v-btn
        class="btn"
        :loading="isUpdating"
        :disabled="disableButton"
        depressed
        @click="productSearch"
      >Search</v-btn>
    </v-card-actions>

    <div>
      <div class="gear__suggester--output">
        <div>{{searchText}}</div>
        <div v-if="showIconsKey">
          <div v-if="boulderingSelected">
            Bouldering:
            <v-icon class="boulderingIcon" color="#c0392b">mdi-alpha-b-box</v-icon>
          </div>

          <div v-if="topropeSelected">
            Toprope:
            <v-icon class="topropeIcon" color="#27ae60">mdi-alpha-t-box</v-icon>
          </div>

          <div v-if="leadOutsideSelected">
            Lead Outside:
            <v-icon class="leadOutsideIcon" color="#d35400">mdi-alpha-o-box</v-icon>
          </div>

          <div v-if="leadInGymSelected">
            Lead in Gym:
            <v-icon class="leadGymIcon" color="#2980b9">mdi-alpha-g-box</v-icon>
          </div>
        </div>

        <!--  -->
        <v-row class="panels" justify="center">
          <v-expansion-panels accordion>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedShoes.length > 0">
              <v-expansion-panel-header :class="{usedForBouldering: boulderingTrue}">
                Shoes
                <div class="climbingIcons">
                  <v-icon
                    v-if="boulderingSelected"
                    class="boulderingIcon"
                    color="#c0392b"
                  >mdi-alpha-b-box</v-icon>
                  <v-icon
                    v-if="leadOutsideSelected"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                  <v-icon
                    v-if="leadInGymSelected"
                    class="leadGymIcon"
                    color="#2980b9"
                  >mdi-alpha-g-box</v-icon>
                  <v-icon v-if="topropeSelected" class="topropeIcon" color="#27ae60">mdi-alpha-t-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedShoes"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedChalk.length > 0">
              <v-expansion-panel-header>
                Chalk
                <div class="climbingIcons">
                  <v-icon
                    v-if="boulderingSelected"
                    class="boulderingIcon"
                    color="#c0392b"
                  >mdi-alpha-b-box</v-icon>
                  <v-icon
                    v-if="leadOutsideSelected"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                  <v-icon
                    v-if="leadInGymSelected"
                    class="leadGymIcon"
                    color="#2980b9"
                  >mdi-alpha-g-box</v-icon>
                  <v-icon v-if="topropeSelected" class="topropeIcon" color="#27ae60">mdi-alpha-t-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedChalk"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedChalkBags.length > 0">
              <v-expansion-panel-header>
                Chalk Bags
                <div class="climbingIcons">
                  <v-icon
                    v-if="boulderingSelected"
                    class="boulderingIcon"
                    color="#c0392b"
                  >mdi-alpha-b-box</v-icon>
                  <v-icon
                    v-if="leadOutsideSelected"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                  <v-icon
                    v-if="leadInGymSelected"
                    class="leadGymIcon"
                    color="#2980b9"
                  >mdi-alpha-g-box</v-icon>
                  <v-icon v-if="topropeSelected" class="topropeIcon" color="#27ae60">mdi-alpha-t-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedChalkBags"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedCarabiners.length > 0">
              <v-expansion-panel-header>
                Carabiners
                <div class="climbingIcons">
                  <v-icon
                    v-if="leadOutsideSelected"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                  <v-icon
                    v-if="leadInGymSelected"
                    class="leadGymIcon"
                    color="#2980b9"
                  >mdi-alpha-g-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedCarabiners"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedQuickdraws.length > 0">
              <v-expansion-panel-header>
                Quickdraws
                <div class="climbingIcons">
                  <v-icon
                    v-if="leadOutsideSelected"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedQuickdraws"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedRopeBags.length > 0">
              <v-expansion-panel-header>
                Rope Bags
                <div class="climbingIcons">
                  <v-icon
                    v-if="leadOutsideSelected"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                  <v-icon
                    v-if="leadInGymSelected"
                    class="leadGymIcon"
                    color="#2980b9"
                  >mdi-alpha-g-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedRopeBags"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedCrashPads.length > 0">
              <v-expansion-panel-header>
                Crash Pads
                <div class="climbingIcons">
                  <v-icon v-if="boulderingSelected" color="#c0392b">mdi-alpha-b-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedCrashPads"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedHelmets.length > 0">
              <v-expansion-panel-header>
                Helmets
                <div class="climbingIcons">
                  <v-icon
                    v-if="leadOutsideSelected"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedHelmets"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedHarnesses.length > 0">
              <v-expansion-panel-header>
                Harnesses
                <div class="climbingIcons">
                  <v-icon
                    v-if="leadInGymSelected"
                    class="leadGymIcon"
                    color="#2980b9"
                  >mdi-alpha-g-box</v-icon>
                  <v-icon
                    v-if="leadOutsideSelected"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                  <v-icon v-if="topropeSelected" class="topropeIcon" color="#27ae60">mdi-alpha-t-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedHarnesses"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedRopes.length > 0">
              <v-expansion-panel-header>
                Ropes
                <div class="climbingIcons">
                  <v-icon
                    v-if="leadInGymSelected"
                    class="leadGymIcon"
                    color="#2980b9"
                  >mdi-alpha-g-box</v-icon>
                  <v-icon
                    v-if="leadOutsideSelected"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedRopes"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <!--  -->
            <v-expansion-panel v-if="this.suggestedBelayDevices.length > 0">
              <v-expansion-panel-header>
                Belay Devices
                <div class="climbingIcons">
                  <v-icon
                    v-if="leadInGymSelected"
                    class="leadGymIcon"
                    color="#2980b9"
                  >mdi-alpha-g-box</v-icon>
                  <v-icon
                    v-if="leadOutsideSelected"
                    class="leadOutsideIcon"
                    color="#d35400"
                  >mdi-alpha-o-box</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(item,i) in suggestedBelayDevices"
                :key="i"
              >{{item.itemName}} : R{{item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
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
  computed: {
    getItemsInStock() {
      return this.$store.getters.getGearshopData;
    }

    //
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
    selectedClimbing() {
      if (this.selectedClimbing.length >= 0) {
        this.disableButton = false;
      }
      if (this.selectedClimbing.length <= 0) {
        this.disableButton = true;
      }
    }
  },
  data() {
    return {
      // reloads dropdowns
      refresh: 1,
      //
      searchText: "",
      isUpdating: false,
      boulderingTrue: false,
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
      suggestedShoes: [],
      suggestedRopes: [],
      suggestedChalk: [],
      suggestedChalkBags: [],
      suggestedSnCs: [],
      suggestedBelayDevices: [],
      suggestedRopeBags: [],
      suggestedHelmets: [],
      suggestedHarnesses: [],
      suggestedQuickdraws: [],
      suggestedCarabiners: [],
      suggestedCrashPads: [],

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
  methods: {
    test() {
      for (let i = 0; i < Object.entries(this.getItemsInStock).length; i++) {
        Object.entries(this.getItemsInStock).forEach(items => {
          items[1].forEach(el => {
            if (el.itemPrice > this.tickValue) {
              const index = items[1].indexOf(el);
              items[1] = items[1].splice(index, 1);
              // .slice()
              // .filter(value => Object.keys(value).length !== 0);
            }
          });
        });
      }
    },
    test2() {
      console.log(this.getItemsInStock);
    },
    // Contained Add to cart Method
    addToCart(event) {
      const id = event.currentTarget.id;
      for (let i = 0; i < this.suggestedGear.length; i++) {
        if ((this.suggestedGear.id = id)) {
          const productId = id - 1;

          const cartData = {
            cost: this.suggestedGear[productId].itemPrice,
            product: this.suggestedGear[productId].itemName
          };
          this.$store.dispatch("addToCart", cartData);
          break;
        }
      }
      /* GEAR SUGGESTOR LOGIC */
    },
    productSearch() {
      this.isUpdating = true;
      this.refresh += 1;

      // if (this.refresh >= 3) {
      //       items[1]
      //         .splice(index, 1, removedItems.shift())
      //         .slice()
      //         .filter(value => Object.keys(value).length !== 0);
      //     }

      /*****SETTING BUDGET*****/

      for (let i = 0; i < Object.entries(this.getItemsInStock).length; i++) {
        Object.entries(this.getItemsInStock).forEach(items => {
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
      if (this.suggestedCrashPads.length > 1) {
        this.suggestedCrashPads = [];
      }
      if (this.suggestedShoes.length > 1) {
        this.suggestedShoes = [];
      }
      if (this.suggestedRopes.length > 1) {
        this.suggestedRopes = [];
      }
      if (this.suggestedChalk.length > 1) {
        this.suggestedChalk = [];
      }
      if (this.suggestedChalkBags.length > 1) {
        this.suggestedChalkBags = [];
      }
      if (this.suggestedSnCs.length > 1) {
        this.suggestedSnCs = [];
      }
      if (this.suggestedRopeBags.length > 1) {
        this.suggestedRopeBags = [];
      }
      if (this.suggestedBelayDevices.length > 1) {
        this.suggestedBelayDevices = [];
      }
      if (this.suggestedHelmets.length > 1) {
        this.suggestedHelmets = [];
      }
      if (this.suggestedQuickdraws.length > 1) {
        this.suggestedQuickdraws = [];
      }
      if (this.suggestedCarabiners.length > 1) {
        this.suggestedCarabiners = [];
      }
      if (this.suggestedHarnesses.length > 1) {
        this.suggestedHarnesses = [];
      }
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
          "Below is the gear you will need. We have highlighted items that are shared between your chosen disciplines.";
      } else this.searchText = "Below is the gear you will need.";

      /**********DISPLAYING OPTIONS************/

      /*LEAD IN GYM*/

      if (this.selectedClimbing.includes("Lead (in gym)")) {
        if (
          this.selectedClimbing.length <= 1 &&
          this.selectedClimbing.includes("Lead (in gym)")
        ) {
          this.leadInGymSelected = false;
        } else this.leadInGymSelected = true;

        if (this.suggestedShoes.length <= 0) {
          this.suggestedShoes = this.getItemsInStock.shoes;
        }

        if (this.suggestedHarnesses.length <= 0) {
          this.suggestedHarnesses = this.getItemsInStock.harnesses;
        }

        if (this.suggestedRopes.length <= 0) {
          this.suggestedRopes = this.getItemsInStock.ropes;
        }

        if (this.suggestedRopeBags.length <= 0) {
          this.suggestedRopeBags = this.getItemsInStock.ropeBags;
        }

        if (this.suggestedCarabiners.length <= 0) {
          this.suggestedCarabiners = this.getItemsInStock.carabiners;
        }

        if (this.suggestedBelayDevices.length <= 0) {
          this.suggestedBelayDevices = this.getItemsInStock.belayDevices;
        }

        if (this.suggestedChalk.length <= 0) {
          this.suggestedChalk = this.getItemsInStock.chalk;
        }

        if (this.suggestedChalkBags.length <= 0) {
          this.suggestedChalkBags = this.getItemsInStock.chalkBags;
        }
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

        if (this.suggestedShoes.length <= 0) {
          this.suggestedShoes = this.getItemsInStock.shoes;
        }

        if (this.suggestedHarnesses.length <= 0) {
          this.suggestedHarnesses = this.getItemsInStock.harnesses;
        }

        if (this.suggestedRopes.length <= 0) {
          this.suggestedRopes = this.getItemsInStock.ropes;
        }

        if (this.suggestedRopeBags.length <= 0) {
          this.suggestedRopeBags = this.getItemsInStock.ropeBags;
        }

        if (this.suggestedCarabiners.length <= 0) {
          this.suggestedCarabiners = this.getItemsInStock.carabiners;
        }

        if (this.suggestedBelayDevices.length <= 0) {
          this.suggestedBelayDevices = this.getItemsInStock.belayDevices;
        }

        if (this.suggestedHelmets.length <= 0) {
          this.suggestedHelmets = this.getItemsInStock.helmets;
        }

        if (this.suggestedChalk.length <= 0) {
          this.suggestedChalk = this.getItemsInStock.chalk;
        }

        if (this.suggestedChalkBags.length <= 0) {
          this.suggestedChalkBags = this.getItemsInStock.chalkBags;
        }
        if (this.suggestedQuickdraws.length <= 0) {
          this.suggestedQuickdraws = this.getItemsInStock.quickdraws;
        }
        if (this.suggestedSnCs.length <= 0) {
          this.suggestedSnCs = this.getItemsInStock.SnCs;
        }
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

        if (this.suggestedShoes.length <= 0) {
          this.suggestedShoes = this.getItemsInStock.shoes;
        }

        if (this.suggestedCrashPads.length <= 0) {
          this.suggestedCrashPads = this.getItemsInStock.crashPads;
        }

        if (this.suggestedChalk.length <= 0) {
          this.suggestedChalk = this.getItemsInStock.chalk;
        }

        if (this.suggestedChalkBags.length <= 0) {
          this.suggestedChalkBags = this.getItemsInStock.chalkBags;
        }
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

        if (this.suggestedShoes.length <= 0) {
          this.suggestedShoes = this.getItemsInStock.shoes;
        }

        if (this.suggestedHarnesses.length <= 0) {
          this.suggestedHarnesses = this.getItemsInStock.harnesses;
        }

        if (this.suggestedChalk.length <= 0) {
          this.suggestedChalk = this.getItemsInStock.chalk;
        }

        if (this.suggestedChalkBags.length <= 0) {
          this.suggestedChalkBags = this.getItemsInStock.chalkBags;
        }
      }

      // Pop back in here
      //  const index = items[1].indexOf(el);

      // let removed = items[1]
      //   .splice(index, 1)
      //   .slice()
      //   .filter(value => Object.keys(value).length !== 0);
      // setTimeout(() => {
      //   items[1]
      //     .splice(index, 1, removed.shift())
      //     .slice()
      //     .filter(value => Object.keys(value).length !== 0);
      // }, 1000);

      // function ends here
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

/* Climbing type icons */

.climbingIcons {
  margin-left: 10px;
}

/* selector */
.selecter__panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.selector__container {
  height: 100px;
}
/* slider */

.slider__container {
}

.slider {
  font-size: 80%;
}
</style>