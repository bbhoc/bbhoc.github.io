<template>
<v-container class="pb-10 mb-10">
    <v-sheet color="orange lighten-2" style="text-align:center" min-height=155 max-height=155>
        <h1>Trails</h1>
        <span style="white-space:nowrap;" v-for="icon in icons" :key="icon">
        <v-icon>{{icon.mdi}}</v-icon> - {{icon.name}} <br>
        </span> 
    </v-sheet>
    <v-row dense>
    <v-col    class="mx-auto"
        max-width="344"
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
    >
    <v-card>

    <v-card-text>
      <h2>
        {{card.title}}
        <v-icon v-for="icon in card.icons" :key="icon">{{icon}}</v-icon>
      </h2>
      <div class="text--primary">
        {{card.content}}
      </div>
    </v-card-text>
          </v-card>
    </v-col>
      </v-row>
</v-container >
</template>
<script>
  export default {
    data: () => ({
      icons : [{mdi:'mdi-bike', name:'Mountain Biking'}, {mdi:'mdi-hiking',name:'Hiking'}, {mdi:'mdi-horseshoe',name:'Horseback Riding'}, {mdi:'mdi-snowflake', name:'Skiing and Snowshoeing'}] ,
      cards: [
        {
          title: 'Beginner’s Loop',
          content: ' is a great place to start if conditions permit. Pick your way across the field to the northeast corner and enter the woods at the trail sign. From there the trail is mostly level until just before you reach the Lodge. By that time you’ve gone almost 3 miles (4.7km) and so you’re not a beginner anymore. This trail crosses wetlands and is for winter use only.',
          flex: 10,
          icons: ['mdi-bike', 'mdi-hiking', 'mdi-horseshoe', 'mdi-snowflake'] 
        },
        { 
          title: 'Hogback Trail',
          content: 'is a 4.6 km loop that contours Hogback Mountain. Spur trails lead from the clearing up to the top, and to one of the best views south of the clearing. Look for wild blueberries in the summer. Map #: 1 – 3 – 7 – 21 – 25 – 27 – 29 – 15 – 11 – 7 – 3 – 1',
          flex: 10,
          icons: ['mdi-bike', 'mdi-hiking', 'mdi-horseshoe', 'mdi-snowflake'] 
        },
        { 
          title: 'Beaver Dam Loop', 
          content: ' is a nice trail for children. View beaver ponds and bird nesting sites. The main trail passes by the upper pond. Follow 1-5-9 and then take the next right. (A short trail spur on the southern side leads to a lower pond and a Great Blue Heron rookery). The trail loops and rejoins the Stewart Trail. Make a left to return to BBH or a right to reach intersection # 35.',
          flex: 10,
          icons: ['mdi-bike', 'mdi-hiking', 'mdi-horseshoe', 'mdi-snowflake'] 
        },
        { 
          title: 'Stewart Trail',
          content: 'is named for Doc Stewart who owned the land bordering parts of this trail. It’s also part of the Catamount Trail. Stewart Trail slowly gains elevation from #9 to #35. This is a good trail to complete the Sucker Brook loop (8.6 km) and for beginners (as an out and back trip). Continue on to the Horseshoe Trail for access to The Goshen Dam, also called Sugar Hill Reservoir.',
          flex: 10,
          icons: ['mdi-bike', 'mdi-hiking', 'mdi-horseshoe', 'mdi-snowflake'] 
        },
        { 
          title: 'Sucker Brook Trail',
          content: 'makes a nice, 8.6 km loop with the Stewart Trail. If you go counter-clockwise you do most of the more difficult terrain at the beginning while you’re fresh. From #17 to #33 look to your right for views of Romance Mountain and the Breadloaf Wilderness Area. Sucker Brook Trail continues east and connects to the Long Trail and Sucker Brook Shelter. Map #: 1 – 5 – 9 – 35 – 33 – 19 – 17 – 9 – 5 – 1* Please note that bridges are out on the SUCKER BROOK TRAIL between 19-33. Cross with caution.',
          flex: 10,
          icons: ['mdi-bike', 'mdi-hiking', 'mdi-horseshoe', 'mdi-snowflake']
        },
        { 
          title: 'Halfdan Kuhnle Trail',
          content: '(also known as Romance) climbs heartily from the outside of the Hogback Loop and traverses along Romance Mountain for 15 kilometers. If skiing, it is best done from south to north. This is one of Blueberry Hill’s longest trails; it should be started no later than 1 p.m. in the winter to be back before sunset. Notice there is no shortcut back if you tire partway through.',
          flex: 10,
          icons: ['mdi-bike', 'mdi-hiking', 'mdi-horseshoe', 'mdi-snowflake'] 
        },
        { 
          title: 'The Catamount Trail',
          content: 'he BBH trails share sections with the Catamount Trail, a 260 mile journey the length of Vermont. (Section 15 of Catamount Trail) From Rikert or Widows Clearing join the Catamount trail:',
          flex: 10,
          icons: ['mdi-bike', 'mdi-hiking', 'mdi-horseshoe', 'mdi-snowflake'] 
        },
        { 
          title: 'Horseshoe Trail',
          content: 'also part of the Catamount Trail, is named after the horseshoe-shaped ridge that borders it and takes you to the Goshen Dam / Sugar Hill Reservoir. There are some fun hills in this section. The Sucker Brook joins you as you near the dam. When you reach #39 you can follow the trail up along the top of the dam. As you cross, think about the men and horses who built it in the 1920’s.',
          flex: 10,
          icons: ['mdi-bike', 'mdi-hiking', 'mdi-horseshoe', 'mdi-snowflake'] 
        },
        { 
          title: 'Lee Todd Trail',
          content: 'is an absolutely beautiful loop. From #29 to #19 it climbs and ends with some downhill switchbacks. There are two bridges out so cross these areas with caution.',
          flex: 10,
          icons: ['mdi-bike', 'mdi-hiking', 'mdi-horseshoe', 'mdi-snowflake'] 
        },
        { 
          title: 'Moosalamoo Trail',
          content: 'overs nice gradual terrain, and leads to the USFS Moosalamoo Campground. Return the same way. Drive or walk 2.5 miles North on the Goshen-Ripton Road until you see the entrance to Moosalamoo campground. Take a left to the campground. Park in the lot to the right where you’ll find the Moosalamoo Trail Head. The Trail climbs around and over a knoll then crosses the North branch of Voter Brook. (Side trip: From the campground loop continue down the Voter Brook Overlook Road (24B) for another 2 kilometers for one of the best views of the Lake Dunmore Valley.)',
          flex: 10,
          icons: ['mdi-bike', 'mdi-hiking', 'mdi-horseshoe', 'mdi-snowflake'] 
        },
      ]
    }),
  }
</script>

<style scoped>
h1 {
  text-align:center;
}
</style>