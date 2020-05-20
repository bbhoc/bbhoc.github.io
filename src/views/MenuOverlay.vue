<template>
  <v-dialog :value="active" overlay-color="primary" overlay-opacity=".9">
            <v-list color="primary"  nav tile elevation=0  >
              <v-list-item
                @click="$emit('close')"
                active-class="test"
                class="text-center"
              >
              <v-list-item-content>
                  <v-icon> <v-img class="text-center" src="@/assets/bbh_logo.png" max-width=40 transition="scale-transition"/> </v-icon>
                 <v-list-item-title class="test">fb</v-list-item-title>
              </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-for="item in tabs"
                :key="item.name"
                :to="item.link"
                @click="$emit('close')"
                active-class="test"
                class="text-center"
              >
                <v-list-item-content>
                   <v-icon color="white">{{ item.icon }}</v-icon>
                  <v-list-item-title class="test">{{ item.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      { 
        index: 0,
        name: "Home", 
        icon: "mdi-home", 
        link: "/" 
      },
      { 
        index: 1, 
        name: "Trails", 
        icon: "mdi-hiking", 
        link: "/trails" 
      },
      {
        index: 2,
        name: "Visit / Rentals",
        icon: "mdi-ski-cross-country",
        link: "/visit"
      },
      {
        index: 3,
        name: "Trail Conditions",
        icon: "mdi-weather-partly-snowy",
        link: "/conditions"
      },
      { 
        index: 4, 
        name: "About",
        icon: "mdi-information",
        link: "/about" 
      }
    ]
  }),
  props: {
    active: Boolean
  }
};
</script>

<style scoped>
.test {
  color: white;
}
</style>
