<template>
  <v-footer
    color="primary"
    app
    inset
    absolute
  > 
    <v-card
      flat
      tile
      color="primary"
      class="white--text text-center"
      width="100%"
    >
      <v-card-text class="white--text  pt-4">
        Contact Us
      </v-card-text>
      <v-card-text class="pt-0 mb-0 pb-0">
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4 white--text"
          icon
          :href="icon.link"
        >
          <v-icon size="24px">{{ icon.name }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>OC</strong>
      </v-card-text>
    </v-card>
  </v-footer>

</template>

<script>
  export default {
    data: () => ({
      icons: [
        {
          name : 'mdi-facebook',
          link : 'https://facebook.com/BlueberryHillOutdoorCenter/',
        },
        {
          name : 'mdi-instagram',
          link : 'https://instagram.com/blueberryoc/',
        },
        {
          name : 'mdi-email',
          link : 'mailto:info@blueberryhillinn.com',
        },
      ],
    }),
  }
</script>