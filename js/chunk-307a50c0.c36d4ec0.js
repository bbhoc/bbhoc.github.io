(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-307a50c0"],{"4ec9":function(e,t,n){"use strict";var o=n("6d61"),i=n("6566");e.exports=o("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},"5e9f":function(e,t,n){"use strict";var o=n("dc29"),i=n.n(o);i.a},6566:function(e,t,n){"use strict";var o=n("9bf2").f,i=n("7c73"),r=n("e2cc"),a=n("0366"),s=n("19aa"),l=n("2266"),c=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,h=n("69f3"),m=h.set,g=h.getterFor;e.exports={getConstructor:function(e,t,n,c){var u=e((function(e,o){s(e,u,t),m(e,{type:t,index:i(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=o&&l(o,e[c],e,n)})),h=g(t),v=function(e,t,n){var o,i,r=h(e),a=p(e,t);return a?a.value=n:(r.last=a={index:i=f(t,!0),key:t,value:n,previous:o=r.last,next:void 0,removed:!1},r.first||(r.first=a),o&&(o.next=a),d?r.size++:e.size++,"F"!==i&&(r.index[i]=a)),e},p=function(e,t){var n,o=h(e),i=f(t);if("F"!==i)return o.index[i];for(n=o.first;n;n=n.next)if(n.key==t)return n};return r(u.prototype,{clear:function(){var e=this,t=h(e),n=t.index,o=t.first;while(o)o.removed=!0,o.previous&&(o.previous=o.previous.next=void 0),delete n[o.index],o=o.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,n=h(t),o=p(t,e);if(o){var i=o.next,r=o.previous;delete n.index[o.index],o.removed=!0,r&&(r.next=i),i&&(i.previous=r),n.first==o&&(n.first=i),n.last==o&&(n.last=r),d?n.size--:t.size--}return!!o},forEach:function(e){var t,n=h(this),o=a(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:n.first){o(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!p(this,e)}}),r(u.prototype,n?{get:function(e){var t=p(this,e);return t&&t.value},set:function(e,t){return v(this,0===e?0:e,t)}}:{add:function(e){return v(this,e=0===e?0:e,e)}}),d&&o(u.prototype,"size",{get:function(){return h(this).size}}),u},setStrong:function(e,t,n){var o=t+" Iterator",i=g(t),r=g(o);c(e,t,(function(e,t){m(this,{type:o,target:e,state:i(e),kind:t,last:void 0})}),(function(){var e=r(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(t)}}},"6d61":function(e,t,n){"use strict";var o=n("23e7"),i=n("da84"),r=n("94ca"),a=n("6eeb"),s=n("f183"),l=n("2266"),c=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),h=n("d44e"),m=n("7156");e.exports=function(e,t,n){var g=-1!==e.indexOf("Map"),v=-1!==e.indexOf("Weak"),p=g?"set":"add",k=i[e],b=k&&k.prototype,w=k,y={},x=function(e){var t=b[e];a(b,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!u(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(r(e,"function"!=typeof k||!(v||b.forEach&&!d((function(){(new k).entries().next()})))))w=n.getConstructor(t,e,g,p),s.REQUIRED=!0;else if(r(e,!0)){var S=new w,j=S[p](v?{}:-0,1)!=S,T=d((function(){S.has(1)})),O=f((function(e){new k(e)})),C=!v&&d((function(){var e=new k,t=5;while(t--)e[p](t,t);return!e.has(-0)}));O||(w=t((function(t,n){c(t,w,e);var o=m(new k,t,w);return void 0!=n&&l(n,o[p],o,g),o})),w.prototype=b,b.constructor=w),(T||C)&&(x("delete"),x("has"),g&&x("get")),(C||j)&&x(p),v&&b.clear&&delete b.clear}return y[e]=w,o({global:!0,forced:w!=k},y),h(w,e),v||n.setStrong(w,e,g),w}},dc29:function(e,t,n){},e445:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pb-10 mb-10"},[n("v-sheet",{staticStyle:{"text-align":"center"},attrs:{color:"orange lighten-2","min-height":"155","max-height":"155"}},[n("h1",[e._v("Trails")]),e._l(e.icons,(function(t){return n("span",{key:t,staticStyle:{"white-space":"nowrap"}},[n("v-icon",[e._v(e._s(t.mdi))]),e._v(" - "+e._s(t.name)+" "),n("br")],1)}))],2),n("v-row",{attrs:{dense:""}},e._l(e.cards,(function(t){return n("v-col",{key:t.title,staticClass:"mx-auto",attrs:{"max-width":"344",cols:t.flex}},[n("v-card",[n("v-card-text",[n("h2",[e._v(" "+e._s(t.title)+" "),e._l(t.icons,(function(t){return n("v-icon",{key:t},[e._v(e._s(t))])}))],2),n("div",{staticClass:"text--primary"},[e._v(" "+e._s(t.content)+" ")])])],1)],1)})),1)],1)},i=[],r={data:function(){return{icons:[{mdi:"mdi-bike",name:"Mountain Biking"},{mdi:"mdi-hiking",name:"Hiking"},{mdi:"mdi-horseshoe",name:"Horseback Riding"},{mdi:"mdi-snowflake",name:"Skiing and Snowshoeing"}],cards:[{title:"Beginner’s Loop",content:" isssa a great place to start if conditions permit. Pick your way across the field to the northeast corner and enter the woods at the trail sign. From there the trail is mostly level until just before you reach the Lodge. By that time you’ve gone almost 3 miles (4.7km) and so you’re not a beginner anymore. This trail crosses wetlands and is for winter use only.",flex:10,icons:["mdi-bike","mdi-hiking","mdi-horseshoe","mdi-snowflake"]},{title:"Hogback Trail",content:"is a 4.6 km loop that contours Hogback Mountain. Spur trails lead from the clearing up to the top, and to one of the best views south of the clearing. Look for wild blueberries in the summer. Map #: 1 – 3 – 7 – 21 – 25 – 27 – 29 – 15 – 11 – 7 – 3 – 1",flex:10,icons:["mdi-bike","mdi-hiking","mdi-horseshoe","mdi-snowflake"]},{title:"Beaver Dam Loop",content:" is a nice trail for children. View beaver ponds and bird nesting sites. The main trail passes by the upper pond. Follow 1-5-9 and then take the next right. (A short trail spur on the southern side leads to a lower pond and a Great Blue Heron rookery). The trail loops and rejoins the Stewart Trail. Make a left to return to BBH or a right to reach intersection # 35.",flex:10,icons:["mdi-bike","mdi-hiking","mdi-horseshoe","mdi-snowflake"]},{title:"Stewart Trail",content:"is named for Doc Stewart who owned the land bordering parts of this trail. It’s also part of the Catamount Trail. Stewart Trail slowly gains elevation from #9 to #35. This is a good trail to complete the Sucker Brook loop (8.6 km) and for beginners (as an out and back trip). Continue on to the Horseshoe Trail for access to The Goshen Dam, also called Sugar Hill Reservoir.",flex:10,icons:["mdi-bike","mdi-hiking","mdi-horseshoe","mdi-snowflake"]},{title:"Sucker Brook Trail",content:"makes a nice, 8.6 km loop with the Stewart Trail. If you go counter-clockwise you do most of the more difficult terrain at the beginning while you’re fresh. From #17 to #33 look to your right for views of Romance Mountain and the Breadloaf Wilderness Area. Sucker Brook Trail continues east and connects to the Long Trail and Sucker Brook Shelter. Map #: 1 – 5 – 9 – 35 – 33 – 19 – 17 – 9 – 5 – 1* Please note that bridges are out on the SUCKER BROOK TRAIL between 19-33. Cross with caution.",flex:10,icons:["mdi-bike","mdi-hiking","mdi-horseshoe","mdi-snowflake"]},{title:"Halfdan Kuhnle Trail",content:"(also known as Romance) climbs heartily from the outside of the Hogback Loop and traverses along Romance Mountain for 15 kilometers. If skiing, it is best done from south to north. This is one of Blueberry Hill’s longest trails; it should be started no later than 1 p.m. in the winter to be back before sunset. Notice there is no shortcut back if you tire partway through.",flex:10,icons:["mdi-bike","mdi-hiking","mdi-horseshoe","mdi-snowflake"]},{title:"The Catamount Trail",content:"he BBH trails share sections with the Catamount Trail, a 260 mile journey the length of Vermont. (Section 15 of Catamount Trail) From Rikert or Widows Clearing join the Catamount trail:",flex:10,icons:["mdi-bike","mdi-hiking","mdi-horseshoe","mdi-snowflake"]},{title:"Horseshoe Trail",content:"also part of the Catamount Trail, is named after the horseshoe-shaped ridge that borders it and takes you to the Goshen Dam / Sugar Hill Reservoir. There are some fun hills in this section. The Sucker Brook joins you as you near the dam. When you reach #39 you can follow the trail up along the top of the dam. As you cross, think about the men and horses who built it in the 1920’s.",flex:10,icons:["mdi-bike","mdi-hiking","mdi-horseshoe","mdi-snowflake"]},{title:"Lee Todd Trail",content:"is an absolutely beautiful loop. From #29 to #19 it climbs and ends with some downhill switchbacks. There are two bridges out so cross these areas with caution.",flex:10,icons:["mdi-bike","mdi-hiking","mdi-horseshoe","mdi-snowflake"]},{title:"Moosalamoo Trail",content:"overs nice gradual terrain, and leads to the USFS Moosalamoo Campground. Return the same way. Drive or walk 2.5 miles North on the Goshen-Ripton Road until you see the entrance to Moosalamoo campground. Take a left to the campground. Park in the lot to the right where you’ll find the Moosalamoo Trail Head. The Trail climbs around and over a knoll then crosses the North branch of Voter Brook. (Side trip: From the campground loop continue down the Voter Brook Overlook Road (24B) for another 2 kilometers for one of the best views of the Lake Dunmore Valley.)",flex:10,icons:["mdi-bike","mdi-hiking","mdi-horseshoe","mdi-snowflake"]}]}}},a=r,s=(n("5e9f"),n("2877")),l=n("6544"),c=n.n(l),u=n("b0af"),d=n("99d9"),f=(n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),h=n("5530"),m=(n("4b85"),n("2b0e")),g=n("d9f7"),v=n("80d2"),p=["sm","md","lg","xl"],k=function(){return p.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),b=function(){return p.reduce((function(e,t){return e["offset"+Object(v["r"])(t)]={type:[String,Number],default:null},e}),{})}(),w=function(){return p.reduce((function(e,t){return e["order"+Object(v["r"])(t)]={type:[String,Number],default:null},e}),{})}(),y={col:Object.keys(k),offset:Object.keys(b),order:Object.keys(w)};function x(e,t,n){var o=e;if(null!=n&&!1!==n){if(t){var i=t.replace(e,"");o+="-".concat(i)}return"col"!==e||""!==n&&!0!==n?(o+="-".concat(n),o.toLowerCase()):o.toLowerCase()}}var S=new Map,j=m["a"].extend({name:"v-col",functional:!0,props:Object(h["a"])(Object(h["a"])(Object(h["a"])(Object(h["a"])({cols:{type:[Boolean,String,Number],default:!1}},k),{},{offset:{type:[String,Number],default:null}},b),{},{order:{type:[String,Number],default:null}},w),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,o=t.data,i=t.children,r=(t.parent,"");for(var a in n)r+=String(n[a]);var s=S.get(r);return s||function(){var e,t;for(t in s=[],y)y[t].forEach((function(e){var o=n[e],i=x(t,e,o);i&&s.push(i)}));var o=s.some((function(e){return e.startsWith("col-")}));s.push((e={col:!o||!n.cols},Object(f["a"])(e,"col-".concat(n.cols),n.cols),Object(f["a"])(e,"offset-".concat(n.offset),n.offset),Object(f["a"])(e,"order-".concat(n.order),n.order),Object(f["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),S.set(r,s)}(),e(n.tag,Object(g["a"])(o,{class:s}),i)}}),T=n("a523"),O=n("132d"),C=(n("99af"),n("2532"),["sm","md","lg","xl"]),B=["start","end","center"];function R(e,t){return C.reduce((function(n,o){return n[e+Object(v["r"])(o)]=t(),n}),{})}var _=function(e){return[].concat(B,["baseline","stretch"]).includes(e)},H=R("align",(function(){return{type:String,default:null,validator:_}})),M=function(e){return[].concat(B,["space-between","space-around"]).includes(e)},L=R("justify",(function(){return{type:String,default:null,validator:M}})),V=function(e){return[].concat(B,["space-between","space-around","stretch"]).includes(e)},z=R("alignContent",(function(){return{type:String,default:null,validator:V}})),F={align:Object.keys(H),justify:Object.keys(L),alignContent:Object.keys(z)},N={align:"align",justify:"justify",alignContent:"align-content"};function E(e,t,n){var o=N[e];if(null!=n){if(t){var i=t.replace(e,"");o+="-".concat(i)}return o+="-".concat(n),o.toLowerCase()}}var D=new Map,I=m["a"].extend({name:"v-row",functional:!0,props:Object(h["a"])(Object(h["a"])(Object(h["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},H),{},{justify:{type:String,default:null,validator:M}},L),{},{alignContent:{type:String,default:null,validator:V}},z),render:function(e,t){var n=t.props,o=t.data,i=t.children,r="";for(var a in n)r+=String(n[a]);var s=D.get(r);return s||function(){var e,t;for(t in s=[],F)F[t].forEach((function(e){var o=n[e],i=E(t,e,o);i&&s.push(i)}));s.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(f["a"])(e,"align-".concat(n.align),n.align),Object(f["a"])(e,"justify-".concat(n.justify),n.justify),Object(f["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),D.set(r,s)}(),e(n.tag,Object(g["a"])(o,{staticClass:"row",class:s}),i)}}),G=n("8dd9"),W=Object(s["a"])(a,o,i,!1,null,"24558994",null);t["default"]=W.exports;c()(W,{VCard:u["a"],VCardText:d["a"],VCol:j,VContainer:T["a"],VIcon:O["a"],VRow:I,VSheet:G["a"]})}}]);
//# sourceMappingURL=chunk-307a50c0.c36d4ec0.js.map