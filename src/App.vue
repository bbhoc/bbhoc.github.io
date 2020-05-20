<template>
  <v-app class="font">

      <v-navigation-drawer app hide-overlay disable-resize-watcher v-model="drawer" width=225 color="primary">
        <template v-slot:prepend class="mb-6">
          <v-list-item two-line  @click="$router.push('/')" style="cursor:pointer">
            <v-list-item-avatar>
              <v-img class="shrink mr-2" contain src="@/assets/bbh_logo.png" transition="scale-transition"/>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title  class="test">Blueberry Hill <br> Outdoor Center</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

      <v-divider color="white"></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in tabs"
          :key="item.name"
          :to="item.link"
        >
          <v-list-item-icon >
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="test" >{{ item.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
      <v-app-bar-nav-icon @click="overlay = !overlay" color="white"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="!drawer" @click="$router.push('/')" style="cursor:pointer" class="test">Blueberry Hill Outdoor Center</v-toolbar-title>
    </v-app-bar>
    <MenuOverlay :active="overlay" @close="overlay=false"/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'
import MenuOverlay from './views/MenuOverlay.vue'
export default {
  name: 'App',

  components: {
    Footer,
    MenuOverlay
  },

  data: () => ({
    active_tab : 0,
    drawer : false,
    overlay : false,
    tabs: [
        { index: 0, name: 'Home', icon: 'mdi-home' , link: '/'},
        { index: 1, name: 'Trails', icon: 'mdi-hiking', link: '/trails'},
        { index: 2, name: 'Visit / Rentals', icon: 'mdi-ski-cross-country', link: '/visit'},
        { index: 3, name: 'Trail Conditions', icon: 'mdi-weather-partly-snowy', link: '/conditions'},
        { index: 4, name: 'About', icon: 'mdi-information', link: '/about' },
      ],
  }),
};
</script>

<style scoped>
.test {
  color: white;

}
.font {
  font-family: 'Noto Serif', serif !important;
}

</style>
