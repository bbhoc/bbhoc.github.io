// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1c1c2c',
        secondary: '#B22222',
        anchor: '#B22222',
        white: '#ffffff'
      },
    },
  },
})

export default vuetify