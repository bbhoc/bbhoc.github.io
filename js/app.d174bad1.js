(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},r={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1a9f20e3":"aea4f681","chunk-2d207ad9":"f06effb5","chunk-2d22d746":"42720b9e","chunk-30b266ba":"814c08bc","chunk-5bf69c15":"e701ed58","chunk-74aa7406":"32ba7e38"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1a9f20e3":1,"chunk-30b266ba":1,"chunk-5bf69c15":1,"chunk-74aa7406":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1a9f20e3":"dac994e7","chunk-2d207ad9":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-30b266ba":"e5e63321","chunk-5bf69c15":"bc503f07","chunk-74aa7406":"20edb077"}[t]+".css",r=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],m.parentNode.removeChild(m),n(o)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1c00":function(t,e,n){"use strict";var a=n("478c"),i=n.n(a);i.a},"40ec":function(t,e,n){},"478c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"font"},[a("v-navigation-drawer",{attrs:{app:"","hide-overlay":"","disable-resize-watcher":"",width:"260",color:"primary"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-list-item",{staticStyle:{cursor:"pointer"},attrs:{"two-line":""},on:{click:function(e){return t.nav("/")}}},[a("v-list-item-avatar",[a("v-img",{staticClass:"shrink mr-2",attrs:{contain:"",src:n("97c0"),transition:"scale-transition"}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"test"},[a("h3",[t._v("Blueberry Hill "),a("br"),t._v("Outdoor Center ")])])],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-divider",{attrs:{color:"white"}}),a("v-list",{attrs:{dense:""}},[t._l(t.tabs,(function(e){return a("v-list-item",{key:e.name,on:{click:function(n){return t.clickHandler(e)}}},[a("v-list-item-icon",{staticClass:"pb-1"},[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"test pb-1"},[a("h2",[t._v(t._s(e.name))])]),e.expanded?a("v-list",{attrs:{color:"primary",nav:"",tile:"",elevation:"0"}},t._l(e.options,(function(e){return a("v-list-item",{key:e.name,staticClass:"text-left",on:{click:function(n){return t.clickHandler(e)}}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"pb-1",staticStyle:{color:"white"}},[a("h3",[t._v(t._s(e.name))])])],1)],1)})),1):t._e()],1)],1)})),a("v-list-item",{staticClass:"text-center ",attrs:{href:"https://blueberryhillinn.com",target:"_blank","active-class":"test"},on:{click:function(e){return t.$emit("close")}}},[a("v-list-item-icon",{staticClass:"pb-1"},[a("v-img",{staticClass:"center ",attrs:{src:n("97c0"),width:"25",transition:"scale-transition"}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"test text-left pb-1"},[a("h2",[t._v("Blueberry Hill Inn")])])],1)],1)],2)],1),a("v-app-bar",{attrs:{app:"",color:"primary"}},[a("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.drawer=!t.drawer}}}),a("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.overlay=!t.overlay}}}),t.drawer?t._e():a("v-toolbar-title",{staticClass:"test",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[t._v("Blueberry Hill Outdoor Center")])],1),a("MenuOverlay",{attrs:{active:t.overlay},on:{close:function(e){t.overlay=!1}}}),a("v-content",{on:{click:t.contentClick}},[a("router-view")],1),a("Footer")],1)},r=[],o=(n("9911"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"primary",app:"",inset:"",absolute:""}},[n("v-card",{staticClass:"white--text text-center",attrs:{flat:"",tile:"",color:"primary",width:"100%"}},[n("v-card-text",{staticClass:"white--text  pt-4"},[t._v(" Contact Us ")]),n("v-card-text",{staticClass:"pt-0 mb-0 pb-0"},t._l(t.icons,(function(e){return n("v-btn",{key:e.name,staticClass:"mx-4 white--text",attrs:{icon:"",href:e.link}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.name))])],1)})),1),n("v-divider"),n("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("OC")])])],1)],1)}),s=[],c={data:function(){return{icons:[{name:"mdi-facebook",link:"https://facebook.com/BlueberryHillOutdoorCenter/"},{name:"mdi-instagram",link:"https://instagram.com/blueberryoc/"},{name:"mdi-email",link:"mailto:info@blueberryhillinn.com"}]}}},l=c,u=n("2877"),d=n("6544"),m=n.n(d),p=n("8336"),h=n("b0af"),f=n("99d9"),v=n("ce7e"),b=n("553a"),y=n("132d"),k=Object(u["a"])(l,o,s,!1,null,null,null),g=k.exports;m()(k,{VBtn:p["a"],VCard:h["a"],VCardText:f["a"],VDivider:v["a"],VFooter:b["a"],VIcon:y["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:t.active,"overlay-color":"primary","overlay-opacity":".9"}},[a("v-list",{attrs:{color:"primary",nav:"",tile:"",elevation:"0"}},[t._l(t.tabs,(function(e){return a("v-list-item",{key:e.name,staticClass:"text-center",attrs:{"active-class":"test"},on:{click:function(n){return t.clickHandler(e)}}},[a("v-list-item-content",[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.icon))]),a("v-list-item-title",{staticClass:"test"},[a("h2",[t._v(t._s(e.name))])]),e.expanded?a("v-list",{attrs:{color:"primary",nav:"",tile:"",elevation:"0"}},t._l(e.options,(function(e){return a("v-list-item",{key:e.name,staticClass:"text-center",on:{click:function(n){return t.clickHandler(e)}}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticStyle:{color:"white"}},[t._v(t._s(e.name))])],1)],1)})),1):t._e()],1)],1)})),a("v-list-item",{staticClass:"text-center",attrs:{href:"https://blueberryhillinn.com",target:"_blank","active-class":"test"},on:{click:function(e){return t.$emit("close")}}},[a("v-list-item-content",[a("v-img",{staticClass:"center",attrs:{src:n("97c0"),"max-width":"40",transition:"scale-transition"}}),a("v-list-item-title",{staticClass:"test"},[a("h2",[t._v("Blueberry Hill Inn")])])],1)],1)],2)],1)},C=[],x={data:function(){return{tabs:[{index:0,name:"Home",icon:"mdi-home",link:"/"},{index:1,name:"Trails",icon:"mdi-hiking",expanded:!1,options:[{name:"Conditions",link:"/conditions"},{name:"Descriptions",link:"/trails"}]},{index:2,name:"Visit / Rentals",icon:"mdi-ski-cross-country",link:"/visit"},{index:3,name:"Trail Conditions",icon:"mdi-weather-partly-snowy",link:"/conditions"},{index:4,name:"About",icon:"mdi-information",link:"/about"}]}},props:{active:Boolean},methods:{clickHandler:function(t){t.options?(t.expanded=!t.expanded,console.log(t.options)):(this.$router.push(t.link),this.$emit("close"))}}},_=x,V=(n("a9a9"),n("169a")),O=n("adda"),S=n("8860"),B=n("da13"),H=n("5d23"),T=Object(u["a"])(_,w,C,!1,null,"04c5c767",null),L=T.exports;m()(T,{VDialog:V["a"],VIcon:y["a"],VImg:O["a"],VList:S["a"],VListItem:B["a"],VListItemContent:H["a"],VListItemSubtitle:H["b"],VListItemTitle:H["c"]});var I={name:"App",components:{Footer:g,MenuOverlay:L},data:function(){return{active_tab:0,drawer:!1,overlay:!1,tabs:[{index:0,name:"Home",icon:"mdi-home",link:"/"},{index:1,name:"Trails",icon:"mdi-hiking",expanded:!1,options:[{name:"Conditions",link:"/conditions"},{name:"Descriptions",link:"/trails"}]},{index:2,name:"Amenities",icon:"mdi-ski-cross-country",expanded:!1,options:[{name:"Lodging & Camping",link:"/lodging"},{name:"Food & Drink",link:"/foodndrink"},{name:"Rentals",link:"/rentals"}]},{index:3,name:"Trail Conditions",icon:"mdi-weather-partly-snowy",link:"/conditions"},{index:4,name:"About",icon:"mdi-information",link:"/about"}]}},methods:{clickHandler:function(t){t.options?t.expanded=!t.expanded:this.nav(t.link)},nav:function(t){this.$router.push(t),this.drawer=!1},contentClick:function(){console.log("content clicked boy")}}},A=I,j=(n("6c94"),n("7496")),D=n("40dc"),E=n("5bc1"),$=n("a75b"),F=n("8270"),M=n("34c3"),N=n("f774"),P=n("2a7f"),q=Object(u["a"])(A,i,r,!1,null,"42940d98",null),R=q.exports;m()(q,{VApp:j["a"],VAppBar:D["a"],VAppBarNavIcon:E["a"],VContent:$["a"],VDivider:v["a"],VIcon:y["a"],VImg:O["a"],VList:S["a"],VListItem:B["a"],VListItemAvatar:F["a"],VListItemContent:H["a"],VListItemIcon:M["a"],VListItemSubtitle:H["b"],VListItemTitle:H["c"],VNavigationDrawer:N["a"],VToolbarTitle:P["a"]});n("d3b7");var z=n("8c4f"),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-img",{staticClass:"white--text align-end imgsize",staticStyle:{"text-align":"center"},attrs:{src:n("f598"),"min-height":"350","max-height":"400"}},[a("v-overlay",{attrs:{value:"true",absolute:""}},[a("div",{staticClass:"pb-2p3 sm-pb-2p9 font-1p4",staticStyle:{"font-style":"italic"}},[a("h4",[t._v("Welcome to the")])]),a("div",{staticClass:"pb-1p3 sm-pb-2p9 sm-font-1p4 md-font-3p2 lg-font-3p9  "},[a("h3",[t._v("Blueberry Hill Outdoor Center")])]),a("div",{staticClass:"pb-1p3 sm-font-1p1 font-1p4",staticStyle:{"font-style":"italic"}},[a("h4",[t._v("Central Vermont's Four Season Outdoor Center")])]),a("div",{staticClass:"pt-2p1"},[a("v-btn",{staticClass:"elevation-5 mb-5",staticStyle:{align:"center",color:"white"},attrs:{width:"200",href:"https://ultrasignup.com/register.aspx?did=70005",target:"_blank",color:"green darken-3"}},[a("h4",[t._v("Trail Map")])])],1)])],1),a("v-sheet",{staticStyle:{"text-align":"center"},attrs:{color:"primary","min-height":"250"}},[a("v-container",[a("h1",{staticStyle:{color:"white"}},[t._v("About")]),a("br"),a("p",{staticStyle:{color:"white"}},[t._v(" Since 1972, the Blueberry Hill Outdoor Center (formerly known as the BBH Ski Center) has been a home base for your adventures in the Moosalamoo National Recreation Area. Located in the heart of the Green Mountain National Forest, the Outdoor Center provides access to the Blueberry Hill network of trails, the Vermont Long Trail, The Catamount Trail, and the Moosalamoo National Forest Trails. ")]),a("p",{staticStyle:{color:"white"}},[t._v(" Our mission at the Outdoor Center is twofold: we aspire to provide access to outdoor recreation for all as well as promote the conservation and sustainable use of our unique natural environment. We are committed to preserving our forests, woods, trails, rivers, streams, and habitats for the future enjoyment of , both human and animals. At present, Blueberry Hill Outdoor Center is designated at a Lo-profit entity. We are working toward non-profit status, which will allow us to secure further funding for our work. ")]),a("v-btn",[t._v("Donate")])],1)],1),a("v-divider"),a("v-sheet",{staticStyle:{"text-align":"center",width:"100%"},attrs:{color:"primary"}},[a("v-container",{staticStyle:{"max-width":"600px"}},[a("h1",{staticStyle:{color:"white"}},[t._v("Directions")]),a("iframe",{staticStyle:{border:"0",width:"100%"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.348675795381!2d-73.01296704853668!3d43.89004474499787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb547eccf30096f%3A0xff059aa9308d611c!2sBlueberry%20Hill%20Outdoor%20Center!5e0!3m2!1sen!2sus!4v1590616505653!5m2!1sen!2sus",height:"450",width:"200",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})])],1),a("v-sheet",{staticStyle:{"text-align":"center",width:"100%"},attrs:{color:"primary"}},[a("h1",{staticStyle:{color:"white"}},[t._v("Events")]),a("div",{staticClass:"fb-page",staticStyle:{"text-align":"center",width:"100%"},attrs:{"data-href":"https://www.facebook.com/BlueberryHillOutdoorCenter/","data-tabs":"events","data-width":"450","data-height":"600","data-small-header":"true","data-adapt-container-width":"true","data-hide-cover":"true","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/BlueberryHillOutdoorCenter/"}},[a("a",{attrs:{href:"https://www.facebook.com/BlueberryHillOutdoorCenter/"}},[t._v("Blueberry Hill Outdoor Center")])])])])],1)},J=[],U={name:"Home",components:{}},G=U,K=(n("1c00"),n("a523")),Y=n("a797"),Q=n("8dd9"),X=Object(u["a"])(G,W,J,!1,null,"3d258a8b",null),Z=X.exports;m()(X,{VBtn:p["a"],VContainer:K["a"],VDivider:v["a"],VImg:O["a"],VOverlay:Y["a"],VSheet:Q["a"]}),a["a"].use(z["a"]);var tt=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/conditions",name:"Trail Conditions",component:function(){return n.e("chunk-2d207ad9").then(n.bind(null,"a20b"))}},{path:"/trails",name:"Trails",component:function(){return n.e("chunk-5bf69c15").then(n.bind(null,"e445"))}},{path:"/foodndrink",name:"Food & Drink",component:function(){return n.e("chunk-74aa7406").then(n.bind(null,"31b5"))}},{path:"/lodging",name:"Lodging & Camping",component:function(){return n.e("chunk-1a9f20e3").then(n.bind(null,"13e2"))}},{path:"/visit",name:"Visit / Rentals",component:function(){return n.e("chunk-30b266ba").then(n.bind(null,"2f1e"))}}],et=new z["a"]({routes:tt}),nt=et,at=n("f309");a["a"].use(at["a"]);var it=new at["a"]({theme:{themes:{light:{primary:"#1c1c2c",secondary:"#B22222",anchor:"#B22222",white:"#ffffff"}}}}),rt=it;a["a"].config.productionTip=!1,new a["a"]({router:nt,vuetify:rt,render:function(t){return t(R)}}).$mount("#app")},"69f2":function(t,e,n){},"6c94":function(t,e,n){"use strict";var a=n("40ec"),i=n.n(a);i.a},"97c0":function(t,e,n){t.exports=n.p+"img/bbh_logo.c81eceb7.png"},a9a9:function(t,e,n){"use strict";var a=n("69f2"),i=n.n(a);i.a},f598:function(t,e,n){t.exports=n.p+"img/this.d11bd92a.png"}});
//# sourceMappingURL=app.d174bad1.js.map