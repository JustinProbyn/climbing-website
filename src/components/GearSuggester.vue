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

              <!-- Customer budget -->
              <v-col class="d-flex budget__btn" cols="12" sm="6">
                <v-select
                  v-model="selectedBudget"
                  :items="budget"
                  label="What's your budget?"
                  outlined
                ></v-select>
              </v-col>

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
          :disabled="autoUpdate"
          :loading="isUpdating"
          color="blue-grey darken-3"
          depressed
          @click="productSearch"
        >Search</v-btn>
      </v-card-actions>
    </v-card>
    <div class="gear__suggester--output">
      <v-btn @click="test">TEST</v-btn>
    </div>
  </div>

  <!--  -->
</template>


<script>
export default {
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },
  data() {
    return {
      isUpdating: false,

      //   OPTIONS
      climbing: [
        { type: "Lead" },
        { type: "Toprope" },
        { type: "Trad" },
        { type: "Bouldering" }
      ],
      budget: [
        "R2,000 - R2,999",
        "R3,000 - R3,999",
        "R4,000 - R4,999",
        "R5,000 - R5,999",
        "Unlimited!"
      ],

      //   SELECTED
      selectedClimbing: [],
      selectedBudget: []
    };
  },
  methods: {
    test() {
      console.log(this.getItemsInStock);
    },
    productSearch() {
      this.isUpdating = true;
      //   selecting budget
      if (this.selectedBudget == "R2,000 - R2,999") {
        this.selectedBudget = 2999;
      }
      if (this.selectedBudget == "R3,000 - R3,999") {
        this.selectedBudget = 3999;
      }
      if (this.selectedBudget == "R4,000 - R4,999") {
        this.selectedBudget = 4999;
      }
      if (this.selectedBudget == "R5,000 - R5,999") {
        this.selectedBudget = 5999;
      }
      if (this.selectedBudget == "Unlimited!") {
        this.selectedBudget = 999999999;
      }

      // selecting climbing
    }
  },
  computed: {
    getItemsInStock() {
      return this.$store.getters.getGearshopData;
    }
  }
};
</script>


<style scoped>
.gear__suggester--container {
  position: absolute;
  width: 35%;
  height: 500px;
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
  width: 100;
  border: 1px solid black;
  height: 100%;
}
</style>