

  <template>
  <div>
  <v-sheet
    class="mx-auto mt-5 mb-5"
    elevation="8"
    max-width="800"
  >
    <h1>Activities</h1>
    <v-expansion-panels>
      <v-expansion-panel v-for="activity in activities" :key="activity.title">
        <v-expansion-panel-header disable-icon-rotate>
          <h2>{{activity.title}}</h2>
          <template v-slot:actions>
            <v-icon color="teal">{{activity.icon}}</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            {{activity.description}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-sheet>
  <v-divider></v-divider>
  <v-sheet
    class="mx-auto mt-5 mb-5"
    elevation="8"
    max-width="800"
  >
    <v-simple-table dense>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in pricing" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.regularcost }}</td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
  </v-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: null,
       activities : [
        {
            title:"Skiing",
            description:"Cross Country skiing has always been at the heart of the Outdoor Center. In a purposeful departure from the busy, manicured trails that have become the norm, the Outdoor Center offers the serenity of quiet, ungroomed, and authentic backcountry adventures, followed by the coziness of home with our hot soup and cookies waiting for you upon your return. Ski rentals (adult sizes only) are available at the Outdoor Center.",
            icon:"mdi-ski"
        },
        {
            title:"Snowshoeing",
            description:"Getting out in to the snowy woods on showshoes is something  hearly everyone can enjoy together.  Our trails can be used for snowshoeing and it is easy for the more adventurous to go off trail to explore in our open woods!  Snow shoe available in the Outdorr Center.",
            icon:"mdi-snowflake"
        },
        {
            title:"Hiking",
            description:"With direct access to over 50 miles of trails, both wide and single-track, the Outdoor Center is your home base for hiking. Come for a few scenic miles, or park your car and embark on a multi-day adventure; our trails lead to many campsites and shelters. Whatever your hiking speed and experience, our friendly staff is here to recommend the best routes to get you outside!",
            icon:"mdi-hiking"
        },
        {
            title:"Biking",
            description:"The BBH Outdoor Center is located amongst some of the best mountain biking trails in Vermont. The extensive network of dirt Forest Service roads, remote and rarely traveled by motorized vehicles, offer many miles of beginning mountain biking. More experienced bikers can utilize the winding single-track trails that twist and turn throughout the mountains and hills. Chandler Ridge and Leicester Hollow trails, which offer views of Moosalamoo mountain, Lake Dunmore, and Silver Lake, are perennial favorites for many bikers, and have recently undergone extensive maintenance to make for a perfect rugged biking adventure!",
            icon:"mdi-bike"
        },
        {
            title:"Trail Running",
            description:"Our network of trails is paradise for trail and mountain runners of all abilities. As the starting point for a number of trail marathons, ultra-marathons, and adventure races, the Outdoor Center offers a jumping off point for your training run of any length. Run 50 miles without repeating a single trail! A number of trails cross roads and access points, perfect for a midday gear-drop.",
            icon:"mdi-run"
        },
        {
          title:"Camping",
          description:"We are happy to offer camping in our spacious field. Camping includes.. blah blah . and can be booked online at Hipcamp link added here",
          icon:"mdi-tent"
        }
    ],
    pricing: [
          {
            name: 'Ski Rentals - Full Day',
            regularcost: "$25",
          },
          {
            name: 'Snowshoe Rentals - Full Day',
            regularcost: "$18",
          },
          {
            name: 'Camping',
            regularcost: "$25",
          },
        ],
    }),
    computed: {

    }
   
  }
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>