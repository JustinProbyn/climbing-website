<template>
  <div class="gear__suggester--container">
    <v-card dark :loading="isUpdating">
      <template v-slot:progress>
        <v-progress-linear absolute color="green lighten-3" height="4" indeterminate></v-progress-linear>
      </template>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <!-- type of climbing -->
              <v-autocomplete
                :disabled="isUpdating"
                :items="climbing"
                filled
                chips
                color="blue-grey lighten-2"
                label="What type of climbing do you want to do?"
                item-text="type"
                item-value="type"
                multiple
                v-model="selectedClimbing"
              >
                <template class="gear__dropdown" v-slot:item="data">
                  <template v-if="typeof data.item !== 'object'">
                    <v-list-item-content v-text="data.item.type"></v-list-item-content>
                  </template>
                  <template v-else>
                    <v-list-item-content>
                      <v-list-item-title v-html="data.item.type"></v-list-item-title>
                    </v-list-item-content>
                  </template>
                </template>
              </v-autocomplete>
              <!--  -->
              <!--  -->
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="climbing__btn"
          :loading="isUpdating"
          color="blue-grey darken-3"
          depressed
          @click="productSearch"
        >Search</v-btn>
      </v-card-actions>
    </v-card>
    <div>
      <div class="gear__suggester--output">
        <div>{{searchText}}</div>

        <!--  -->
        <!-- <div class="product__container">
          <v-card v-for="(gear, i) in suggestedGear" :key="i" class="mx-auto card" max-width="250">
            <v-img :src="gear.itemPicture" height="200px"></v-img>
            <div class="gear__name">
              <h3>{{ gear.itemName }}</h3>
            </div>
            <div class="gear__price">
              <h4>
                <strong>
                  R{{
                  gear.itemPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                </strong>
              </h4>
            </div>
            <div class="btn__container">
              <button
                :id="gear.id"
                class="ma-2 btn"
                outlined
                color="#d35400"
                @click="addToCart($event)"
              >Add to cart</button>
            </div>
          </v-card>
        </div>-->
        <v-row class="panels" justify="center">
          <v-expansion-panels accordion>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedShoes.length > 0">
              <v-expansion-panel-header>Shoes</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedShoes" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedChalk.length > 0">
              <v-expansion-panel-header>Chalk</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedChalk" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedChalkBags.length > 0">
              <v-expansion-panel-header>Chalk Bags</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedChalkBags" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedCarabiners.length > 0">
              <v-expansion-panel-header>Carabiners</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedCarabiners" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedQuickdraws.length > 0">
              <v-expansion-panel-header>Quickdraws</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedQuickdraws" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedRopeBags.length > 0">
              <v-expansion-panel-header>Rope Bags</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedRopeBags" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedCrashPads.length > 0">
              <v-expansion-panel-header>Crash Pads</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedCrashPads" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedHelmets.length > 0">
              <v-expansion-panel-header>Helmets</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedHelmets" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedHarnesses.length > 0">
              <v-expansion-panel-header>Harnesses</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedHarnesses" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedRopes.length > 0">
              <v-expansion-panel-header>Ropes</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedRopes" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedRopeBags.length > 0">
              <v-expansion-panel-header>Rope Bags</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedRopeBags" :key="i">{{item}}</v-expansion-panel-content>
            </v-expansion-panel>
            <!--  -->
            <v-expansion-panel v-if="this.suggestedBelayDevices.length > 0">
              <v-expansion-panel-header>Belay Devices</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in suggestedBelayDevices" :key="i">{{item}}</v-expansion-panel-content>
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
    // filterSuggestedGear() {
    //   const array = Object.entries(this.suggestedGear);
    //   return array.forEach(() => {
    //     console.log(array);
    //   });
    // }
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },
  data() {
    return {
      searchText: "",
      isUpdating: false,

      //   OPTIONS
      climbing: [
        { type: "Lead (outside)" },
        { type: "Lead (in gym)" },
        { type: "Toprope" },
        { type: "Bouldering" }
      ],
      //   SELECTED
      selectedClimbing: [],
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
      suggestedCrashPads: []
    };
  },
  methods: {
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

      /********************* */
      /*LEAD*/
      // Needs shoes, rope, ropebag, helment, carabiner, quickdraws, belaydevice, slings, chalk, chalkbag, harness
      if (this.selectedClimbing.includes("Lead (in gym)")) {
        this.searchText = "LEAD IN GYM";

        if (
          this.suggestedShoes.length <= 0 ||
          this.suggestedHarnesses.length <= 0
        ) {
          this.suggestedShoes.push(this.getItemsInStock.shoes);
          this.suggestedHarnesses.push(this.getItemsInStock.harnesses);
        } else return;
      }
      /********************* */
      /*LEAD OUTSIDE*/
      if (this.selectedClimbing.includes("Lead (outside)")) {
        this.searchText = "LEAD OUTSIDE";

        this.suggestedShoes.push(this.getItemsInStock.shoes);
        this.suggestedHarnesses.push(this.getItemsInStock.harnesses);
      }
      /********************* */
      /*BOULDERING*/
      if (this.selectedClimbing.includes("Bouldering")) {
        this.searchText = "What you will need for bouldering:";

        this.suggestedShoes.push(this.getItemsInStock.shoes);
        this.suggestedChalk.push(this.getItemsInStock.chalk);
        this.suggestedChalkBags.push(this.getItemsInStock.chalkBags);
        this.suggestedCrashPads.push(this.getItemsInStock.crashPads);
      }

      /********************* */
      /*TOP ROPE*/
      if (this.selectedClimbing.includes("Toprope")) {
        this.searchText = "TOP ROPE.";

        this.suggestedShoes.push(this.getItemsInStock.shoes);
      }
    }
  }
};
</script>


<style scoped>
.gear__suggester--container {
  position: absolute;
  flex-wrap: wrap;
  width: 35%;
  height: 100%;
  margin-top: 275px;
  margin-left: 20px;
}

/* Gear Form */

.gear__dropdown {
  max-width: 100%;
}

.budget__btn {
  max-width: 100%;
  padding: 0px;
}

.gear__suggester--output {
  margin-top: 10px;
  width: 100%;
}

/* GET CARDS */

.gear__name {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.gear__price {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.btn__container :hover,
.btn__container :active {
  background-color: #d35400;
  color: #fff;
}

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

.v-btn__content {
  width: 100%;
}
.product__container {
  display: flex;
  flex-wrap: wrap;
  padding: 35px;
  width: 100%;
  height: 100%;
}

.card {
  padding: 15px;
  display: flex;
}

.btn__container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 8px;
}

/* PANELS */

.panels {
  margin-top: 10px;
}
</style>