(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-1e5db120":"bbad87c2","chunk-2565adec":"c52a2aad","chunk-2687390d":"31a2ac96","chunk-2d207ad9":"038cf6a7","chunk-2d2255d3":"57409b25","chunk-2d22d746":"d6f16eec","chunk-304364dc":"ab4c9c72","chunk-435be06b":"952c5a09","chunk-ac9e53aa":"9bae0e60"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-1e5db120":1,"chunk-2565adec":1,"chunk-2687390d":1,"chunk-304364dc":1,"chunk-435be06b":1,"chunk-ac9e53aa":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1e5db120":"0b13bd1e","chunk-2565adec":"04a878b8","chunk-2687390d":"1c4092a0","chunk-2d207ad9":"31d6cfe0","chunk-2d2255d3":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-304364dc":"dac994e7","chunk-435be06b":"704137ed","chunk-ac9e53aa":"20edb077"}[t]+".css",i=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],p.parentNode.removeChild(p),n(o)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"101f":function(t,e,n){"use strict";n("972b")},"1b4a":function(t,e,n){},"2a90":function(t,e,n){},"445d":function(t,e,n){t.exports=n.p+"img/blurrythis.5d49417e.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"font"},[n("v-app-bar",{attrs:{app:"",color:"primary"}},[n("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.overlay=!t.overlay}}}),t.drawer?t._e():n("v-toolbar-title",{staticClass:"test",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[t._v("Blueberry Hill Outdoor Center")])],1),n("MenuOverlay",{attrs:{active:t.overlay},on:{close:function(e){t.overlay=!1}}}),n("v-main",{on:{click:t.contentClick}},[n("router-view")],1),n("Footer")],1)},i=[],o=(n("9911"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"primary",app:"",inset:"",absolute:""}},[n("v-card",{staticClass:"white--text text-center",attrs:{flat:"",tile:"",color:"primary",width:"100%"}},[n("v-card-text",{staticClass:"white--text  pt-4"},[t._v(" Contact Us ")]),n("v-card-text",{staticClass:"pt-0 mb-0 pb-0"},t._l(t.icons,(function(e){return n("v-btn",{key:e.name,staticClass:"mx-4 white--text",attrs:{icon:"",href:e.link}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.name))])],1)})),1),n("v-divider"),n("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("OC")])])],1)],1)}),c=[],s={data:function(){return{icons:[{name:"mdi-facebook",link:"https://facebook.com/BlueberryHillOutdoorCenter/"},{name:"mdi-instagram",link:"https://instagram.com/blueberryoc/"},{name:"mdi-email",link:"mailto:info@blueberryhillinn.com"}]}}},l=s,u=n("2877"),d=n("6544"),p=n.n(d),m=n("8336"),h=n("b0af"),f=n("99d9"),b=n("ce7e"),v=n("553a"),y=n("132d"),g=Object(u["a"])(l,o,c,!1,null,null,null),k=g.exports;p()(g,{VBtn:m["a"],VCard:h["a"],VCardText:f["a"],VDivider:b["a"],VFooter:v["a"],VIcon:y["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:t.active,"overlay-color":"primary","overlay-opacity":".9"},on:{"click:outside":function(e){return t.$emit("close")}}},[a("v-list",{attrs:{color:"primary",nav:"",tile:"",elevation:"0"}},[a("v-list-item",[a("v-spacer"),a("v-icon",{attrs:{color:"white"},on:{click:function(e){return t.$emit("close")}}},[t._v("mdi-close")])],1),t._l(t.tabs,(function(e){return a("v-list-item",{key:e.name,staticClass:"text-center",attrs:{"active-class":"test"},on:{click:function(n){return t.clickHandler(e)}}},[a("v-list-item-content",[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.icon))]),a("v-list-item-title",{staticClass:"test"},[a("h2",[t._v(t._s(e.name))])]),e.expanded?a("v-list",{attrs:{color:"primary",nav:"",tile:"",elevation:"0"}},t._l(e.options,(function(e){return a("v-list-item",{key:e.name,staticClass:"text-center",on:{click:function(n){return t.clickHandler(e)}}},[a("v-list-item-content",[a("h4",{staticStyle:{color:"white"}},[t._v(t._s(e.name))])])],1)})),1):t._e()],1)],1)})),a("v-list-item",{staticClass:"text-center",attrs:{href:"https://blueberryhillinn.com",target:"_blank","active-class":"test"},on:{click:function(e){return t.$emit("close")}}},[a("v-list-item-content",[a("v-img",{staticClass:"center",attrs:{src:n("97c0"),"max-width":"40",transition:"scale-transition"}}),a("v-list-item-title",{staticClass:"test"},[a("h2",[t._v("Blueberry Hill Inn")])])],1)],1)],2)],1)},_=[],C={data:function(){return{tabs:[{index:0,name:"Home",icon:"mdi-home",link:"/"},{index:1,name:"Trails",icon:"mdi-hiking",expanded:!1,options:[{name:"Conditions",link:"/conditions"},{name:"Descriptions",link:"/trails"}]},{index:2,name:"Activities & Rentals",icon:"mdi-ski-cross-country",link:"/visit"},{index:2,name:"Food & Lodging",icon:"mdi-tent",link:"/lodging"}]}},props:{active:Boolean},methods:{clickHandler:function(t){t.options?(t.expanded=!t.expanded,console.log(t.options)):(this.$router.push(t.link),this.$emit("close"))}}},x=C,O=(n("ef03"),n("169a")),S=n("adda"),V=n("8860"),T=n("da13"),B=n("5d23"),H=n("2fa4"),j=Object(u["a"])(x,w,_,!1,null,"608565e4",null),A=j.exports;p()(j,{VDialog:O["a"],VIcon:y["a"],VImg:S["a"],VList:V["a"],VListItem:T["a"],VListItemContent:B["a"],VListItemTitle:B["b"],VSpacer:H["a"]});var D={name:"App",components:{Footer:k,MenuOverlay:A},data:function(){return{active_tab:0,drawer:!1,overlay:!1,tabs:[{index:0,name:"Home",icon:"mdi-home",link:"/static"},{index:1,name:"Trails",icon:"mdi-hiking",expanded:!1,options:[{name:"Conditions",link:"/conditions"},{name:"Descriptions",link:"/trails"}]},{index:2,name:"Amenities",icon:"mdi-ski-cross-country",expanded:!1,options:[{name:"Lodging & Camping",link:"/lodging"},{name:"Food & Drink",link:"/foodndrink"},{name:"Rentals",link:"/rentals"}]},{index:3,name:"Trail Conditions",icon:"mdi-weather-partly-snowy",link:"/conditions"},{index:4,name:"About",icon:"mdi-information",link:"/about"}]}},methods:{clickHandler:function(t){t.options?t.expanded=!t.expanded:this.nav(t.link)},nav:function(t){this.$router.push(t),this.drawer=!1},contentClick:function(){console.log("content clicked boy")}}},P=D,E=(n("5c1b"),n("7496")),L=n("40dc"),I=n("5bc1"),$=n("f6c4"),M=n("2a7f"),F=Object(u["a"])(P,r,i,!1,null,"5719ea85",null),N=F.exports;p()(F,{VApp:E["a"],VAppBar:L["a"],VAppBarNavIcon:I["a"],VMain:$["a"],VToolbarTitle:M["a"]});n("d3b7");var R=n("8c4f"),U=n("bb51"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"hello"},[t._v("Hello "+t._s(t.name)+" "+t._s(t.$attrs))])])},z=[],G={props:{name:{type:String,default:"Vue!"}}},J=G,W=Object(u["a"])(J,q,z,!1,null,null,null),K=W.exports;function Q(t){return{active_tab:parseInt(t.params.years)}}a["a"].use(R["a"]);var Y=[{path:"/",name:"Home",component:U["default"]},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/conditions",name:"Trail Conditions",component:function(){return n.e("chunk-2d207ad9").then(n.bind(null,"a20b"))}},{path:"/covid_form",name:"COVID-19 Contact Tracing",component:function(){return n.e("chunk-2565adec").then(n.bind(null,"fbd4"))}},{path:"/covid_form",name:"COVID-19 Contact Tracing",component:function(){return n.e("chunk-2565adec").then(n.bind(null,"fbd4"))}},{path:"/covid_safety",name:"COVID-19 Safety Measures",component:function(){return n.e("chunk-435be06b").then(n.bind(null,"2ec5"))}},{path:"/press",name:"Press Release",component:function(){return n.e("chunk-2d2255d3").then(n.bind(null,"e3a0"))}},{path:"/trails",name:"Trails",component:function(){return n.e("chunk-2687390d").then(n.bind(null,"e445"))}},{path:"/foodndrink",name:"Food & Drink",component:function(){return n.e("chunk-ac9e53aa").then(n.bind(null,"31b5"))}},{path:"/lodging",name:"Lodging & Camping",component:function(){return n.e("chunk-304364dc").then(n.bind(null,"13e2"))}},{path:"/visit/:years",name:"Visit / Rentals",component:function(){return n.e("chunk-1e5db120").then(n.bind(null,"2f1e"))},props:Q},{path:"/visit",name:"Visit / Rentals",component:function(){return n.e("chunk-1e5db120").then(n.bind(null,"2f1e"))},props:{active_tab:-1}},{path:"*",name:"404",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/static",component:K,props:{name:"world"}},{path:"/dynamic/:years",component:K,props:Q}],X=new R["a"]({routes:Y,scrollBehavior:function(){return{x:0,y:0}}}),Z=X,tt=n("f309");a["a"].use(tt["a"]);var et=new tt["a"]({theme:{themes:{light:{primary:"#1c1c2c",secondary:"#B22222",anchor:"#B22222",white:"#ffffff"}}}}),nt=et;a["a"].config.productionTip=!1,new a["a"]({router:Z,vuetify:nt,render:function(t){return t(N)}}).$mount("#app")},"5c1b":function(t,e,n){"use strict";n("1b4a")},"7fab":function(t,e,n){t.exports=n.p+"img/this.f542fcf1.webp"},"972b":function(t,e,n){},"97c0":function(t,e,n){t.exports=n.p+"img/bbh_logo.c81eceb7.png"},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-img",{staticClass:"white--text align-end imgsize",staticStyle:{"text-align":"center"},attrs:{src:n("7fab"),"max-height":"425","min-height":"425","lazy-src":n("445d")}},[a("v-overlay",{attrs:{value:"true",absolute:""}},[a("div",{staticClass:"pb-2p3 sm-pb-2p9 font-1p4",staticStyle:{"font-style":"italic"}},[a("h4",[t._v("Welcome to the")])]),a("div",{staticClass:"pb-1p3 sm-pb-2p9 sm-font-1p4 md-font-3p2 lg-font-3p9  "},[a("h3",[t._v("Blueberry Hill Outdoor Center")])]),a("div",{staticClass:"pb-1p3 sm-font-1p1 font-1p4",staticStyle:{"font-style":"italic"}},[a("h4",[t._v("Central Vermont's Four Season Outdoor Center")])]),a("div",{staticClass:"pt-2p1"},[a("v-btn",{staticClass:"elevation-5 mb-5",staticStyle:{align:"center",color:"white"},attrs:{width:"200",href:"trailmap.pdf",target:"_blank",color:"green darken-3"}},[a("h4",[t._v("Trail Map")])])],1)])],1),a("v-sheet",{staticStyle:{"text-align":"center"},attrs:{color:"primary","min-height":"250"}},[a("v-container",[a("h1",{staticStyle:{color:"white"}},[t._v("About")]),a("br"),a("p",{staticStyle:{color:"white"}},[t._v(" Since 1972, the Blueberry Hill Outdoor Center (formerly known as the BBH Ski Center) has been a home base for your adventures in the Moosalamoo National Recreation Area. Located in the heart of the Green Mountain National Forest, the Outdoor Center provides access to the Blueberry Hill network of trails, the Vermont Long Trail, The Catamount Trail, and the Moosalamoo National Forest Trails. ")]),a("p",{staticStyle:{color:"white"}},[t._v(" Our mission at the Outdoor Center is twofold: we aspire to provide access to outdoor recreation for all as well as promote the conservation and sustainable use of our unique natural environment. We are committed to preserving our forests, woods, trails, rivers, streams, and habitats for the future enjoyment of both humans and animals. Blueberry Hill Outdoor Center is a designated non-profit company, 501(c)3 status pending. ")]),a("form",{attrs:{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"}},[a("input",{attrs:{name:"cmd",type:"hidden",value:"_s-xclick"}}),a("p"),a("input",{attrs:{name:"hosted_button_id",type:"hidden",value:"R7TN98D78QSDU"}}),a("input",{attrs:{title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button",name:"submit",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",type:"image"}}),a("img",{attrs:{src:"https://www.paypal.com/en_US/i/scr/pixel.gif",alt:"",width:"1",height:"1",border:"0"}})])])],1),a("v-divider"),a("v-sheet",{staticStyle:{"text-align":"center",width:"100%"},attrs:{color:"primary"}},[a("v-container",{staticStyle:{"max-width":"600px"}},[a("h1",{staticStyle:{color:"white"}},[t._v("Directions")]),a("iframe",{staticStyle:{border:"0",width:"100%"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.348675795381!2d-73.01296704853668!3d43.89004474499787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb547eccf30096f%3A0xff059aa9308d611c!2sBlueberry%20Hill%20Outdoor%20Center!5e0!3m2!1sen!2sus!4v1590616505653!5m2!1sen!2sus",height:"450",width:"200",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})])],1),a("v-sheet",{staticStyle:{"text-align":"center",width:"100%"},attrs:{color:"primary"}},[a("h1",{staticStyle:{color:"white"}},[t._v("Events")]),a("div",{staticClass:"fb-page",staticStyle:{"text-align":"center",width:"100%"},attrs:{"data-href":"https://www.facebook.com/BlueberryHillOutdoorCenter/","data-tabs":"events","data-width":"450","data-height":"600","data-small-header":"true","data-adapt-container-width":"true","data-hide-cover":"true","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/BlueberryHillOutdoorCenter/"}},[a("a",{attrs:{href:"https://www.facebook.com/BlueberryHillOutdoorCenter/"}},[t._v("Blueberry Hill Outdoor Center")])])])])],1)},r=[],i={name:"Home",components:{}},o=i,c=(n("101f"),n("2877")),s=n("6544"),l=n.n(s),u=n("8336"),d=n("a523"),p=n("ce7e"),m=n("adda"),h=n("a797"),f=n("8dd9"),b=Object(c["a"])(o,a,r,!1,null,"690f1214",null);e["default"]=b.exports;l()(b,{VBtn:u["a"],VContainer:d["a"],VDivider:p["a"],VImg:m["a"],VOverlay:h["a"],VSheet:f["a"]})},ef03:function(t,e,n){"use strict";n("2a90")}});
//# sourceMappingURL=app.e72e206a.js.map