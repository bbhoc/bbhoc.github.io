<template>
<div>

<v-card width="100%">
  <v-img
      class="white--text align-end"
      height="200px"
      src="@/assets/cool-background.png"
    >
      <v-card-title style="font-size: 45px" class="justify-center">Welcome to Blueberry Hill Outdoor Center </v-card-title>
      <p  style="font-size: 25px">Central Vermont's Four Season Outdoor Center - Backcountry Trails for Running, Biking, Hiking, XC Skiing & Snowshoeing</p>
    </v-img>
</v-card>
<v-sheet color="primary" style="text-align:center" min-height=250>
  <v-container>
  <h1>About</h1>
  <br>
  <p>
    Since 1972, the Blueberry Hill Outdoor Center (formerly known as the BBH Ski Center) has been a home base for your adventures in the Moosalamoo National Recreation Area. Located in the heart of the Green Mountain National Forest, the Outdoor Center  provides access to the Blueberry Hill network of trails, the Vermont Long Trail, The Catamount Trail, and the Moosalamoo National Forest Trails. 
  </p>
  <p>
    Our mission at the Outdoor Center is twofold: we aspire to provide access to outdoor recreation for all as well as promote the conservation and sustainable use of our unique natural environment. We are committed to preserving our forests, woods, trails, rivers, streams, and habitats for the future enjoyment of , both human and animals.  At present, Blueberry Hill Outdoor Center is designated at a Lo-profit entity. We are working toward non-profit status, which will allow us to secure further funding for our work. 
  </p>
  <v-btn>Donate</v-btn>
  </v-container>
</v-sheet>
  <v-divider></v-divider>
<v-sheet color="primary" style="text-align:center" min-height=250>
  <v-container>
  <h1>Bridge Building</h1>
  <br>
  <p>
  In cooperation with the Moosalamoo Association, Blueberry Hill Inn, colunteer donation and a federal grant we have raised money to complete the first of the three bridges on the trail system lost in Hurricane Irene in 2009.  The additional two bridges are scheduled to be repaired in summer of 2020.
  </p>
   <p>
  The Outdoor Center and Blueberry Hill trails will continue to be funded primarily through Blueberry Hill Inn, donations from visitors for day use, ski rentals and soup! We are thankful to the Moosalamoo Association, which provided fiscal sponsorship and support for the Building Bridges Project, to all that come through to ski, snowshoe and hike, to the USFS, and to our donors as we work through this transition.
  </p>
  <p>
  Blueberry Hill Trails, in Vermont’s Moosalamoo National Recreation Area of almost 16,000 acres, is a treasure in the heart of the Green Mountain National Forest. The Blueberry Hill Inn , the Moosalamoo Association and the US Forest Service are working together to assure that these trails remain open for years to come.
  </p>
  <v-btn>Donate</v-btn>
  </v-container>
</v-sheet>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
h1 {
  color: white;
}
p {
  color: white;
  text-align:center;
	margin:0 auto;
}
.container {
  max-width: 600px;
}
.subt {
  color:white !important;
  text-align:center !important;
}
.titletest {
  font-size: 45px;
}
</style>
