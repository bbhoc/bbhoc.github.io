(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e8c3558"],{"0393":function(e,t,n){"use strict";n("0481"),n("4069");var i=n("5530"),a=(n("210b"),n("604c")),o=n("d9bd");t["a"]=a["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(o["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(o["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(i)}}})},"210b":function(e,t,n){},"2f1e":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-sheet",{staticClass:"mx-auto mt-5 mb-5",attrs:{elevation:"8","max-width":"800"}},[n("h1",[e._v("Activities")]),n("v-expansion-panels",{attrs:{value:e.active_tab}},[e._l(e.activities,(function(t){return n("v-expansion-panel",{key:t.title},[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"teal"}},[e._v(e._s(t.icon))])]},proxy:!0}],null,!0)},[n("h2",[e._v(e._s(t.title))])]),n("v-expansion-panel-content",[e._v(e._s(t.description))])],1)})),n("v-expansion-panel",[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"teal"}},[e._v("mdi-tag")])]},proxy:!0}])},[n("h2",[e._v("Rentals")])]),n("v-expansion-panel-content",[n("v-simple-table",{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("Name")]),n("th",{staticClass:"text-left"},[e._v("Cost")])])]),n("tbody",e._l(e.pricing,(function(t){return n("tr",{key:t.name},[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.regularcost))])])})),0)]},proxy:!0}])})],1)],1)],2)],1),n("br"),n("br"),n("br")],1)},a=[],o=(n("a9e3"),{data:function(){return{model:null,activities:[{title:"Skiing",description:"Cross Country skiing has always been at the heart of the Outdoor Center. In a purposeful departure from the busy, manicured trails that have become the norm, the Outdoor Center offers the serenity of quiet, ungroomed, and authentic backcountry adventures, followed by the coziness of home with our hot soup and cookies waiting for you upon your return. Ski rentals (adult sizes only) are available at the Outdoor Center.",icon:"mdi-ski"},{title:"Snowshoeing",description:"Getting out in to the snowy woods on snowshoes is something nearly everyone can enjoy together. All our trails can be used for snowshoeing and it is easy for the more adventurous to go off trail to explore in our open woods! Rental snowshoes are available in the Outdoor Center.",icon:"mdi-snowflake"},{title:"Sledding",description:"We have a small hill for sledding. Kids love it! Bring your own sleds. It is located on the inn side of the road.",icon:"mdi-sled"},{title:"Hiking",description:"The Inn and Outdoor Center sit in the center of nearly endless hiking trails for all abilities. Many of our trails are double wide and grassy; venturing onto Moosalamoo National Recreation Area trails will bring you to rockier single track trails. Check out a few of our favorite trails here, and be sure to download a map before you head out! For hiking, we find that most of our trails can be completed in sturdy sneakers, but boots are never a bad idea, especially if you are heading further afield to the long trail.",icon:"mdi-hiking"},{title:"Biking",description:"The BBH Outdoor Center is located amongst some of the best mountain biking trails and roads in Vermont. The extensive network of dirt Forest Service roads, remote and rarely traveled by motorized vehicles, offer many miles of beginning mountain biking. More experienced bikers can utilize the winding single-track trails that twist and turn throughout the mountains and hills. Chandler Ridge, Leicester Hollow, and Oak Ridge trails, which offer views of Moosalamoo mountain, Lake Dunmore, and Silver Lake, are perennial favorites for many bikers, and have recently undergone extensive maintenance to make for a perfect rugged biking adventure! Green Mountain Bikes in Rochester and Frog Hollow Bikes in Middlebury both offer bike rentals!",icon:"mdi-bike"},{title:"Trail Running",description:"Our network of trails is paradise for trail and mountain runners of all abilities. As the starting point for a number of trail races including the Moosalamoo Ultra, the Endurance Society Infinitus Races, and our own Goshen Gallop 5/10km trail race, the Outdoor Center offers a jumping off point for your training run of any length. Run 50 miles without repeating a single trail! A number of trails cross roads and access points, perfect for a midday gear-drop.",icon:"mdi-run"}],pricing:[{name:"Ski Rentals - Full Day",regularcost:"$25"},{name:"Snowshoe Rentals - Full Day",regularcost:"$18"},{name:"Microspikes - Full Day",regularcost:"$18"}]}},computed:{},props:{active_tab:{type:Number,default:-1}}}),s=o,r=(n("7989"),n("2877")),l=n("6544"),c=n.n(l),d=n("cd55"),u=n("49e2"),h=n("c865"),p=n("0393"),f=n("132d"),v=n("8dd9"),b=n("5530"),m=(n("8b37"),n("80d2")),x=n("7560"),g=n("58df"),y=Object(g["a"])(x["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(b["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(m["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),k=Object(r["a"])(s,i,a,!1,null,"cb2a692e",null);t["default"]=k.exports;c()(k,{VExpansionPanel:d["a"],VExpansionPanelContent:u["a"],VExpansionPanelHeader:h["a"],VExpansionPanels:p["a"],VIcon:f["a"],VSheet:v["a"],VSimpleTable:y})},"49e2":function(e,t,n){"use strict";var i=n("0789"),a=n("9d65"),o=n("a9ad"),s=n("3206"),r=n("80d2"),l=n("58df"),c=Object(l["a"])(a["a"],o["a"],Object(s["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=c.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(i["a"],this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(r["o"])(t))])]})))}})},7989:function(e,t,n){"use strict";n("7f35")},"7f35":function(e,t,n){},"8b37":function(e,t,n){},c865:function(e,t,n){"use strict";var i=n("5530"),a=n("0789"),o=n("9d26"),s=n("a9ad"),r=n("3206"),l=n("5607"),c=n("80d2"),d=n("58df"),u=Object(d["a"])(s["a"],Object(r["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=u.extend().extend({name:"v-expansion-panel-header",directives:{ripple:l["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(c["o"])(this,"actions")||[this.$createElement(o["a"],this.expandIcon)];return this.$createElement(a["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(i["a"])(Object(i["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[Object(c["o"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,n){"use strict";var i=n("5530"),a=n("4e82"),o=n("3206"),s=n("80d2"),r=n("58df");t["a"]=Object(r["a"])(Object(a["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(o["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(i["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(s["o"])(this))}})}}]);
//# sourceMappingURL=chunk-4e8c3558.2c5e2e3d.js.map