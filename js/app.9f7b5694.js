(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);m&&m(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-09303757":"9e04a9ed","chunk-2d207ad9":"a2853e21","chunk-2d22d746":"1edef91a","chunk-368dd9cc":"816b1b74","chunk-4e8c3558":"eee56405","chunk-671b07ac":"cf99ebdd","chunk-ac9e53aa":"6073d54e","chunk-e8f74382":"cb9af4c5","chunk-eb413024":"205fbecb"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-09303757":1,"chunk-368dd9cc":1,"chunk-4e8c3558":1,"chunk-671b07ac":1,"chunk-ac9e53aa":1,"chunk-e8f74382":1,"chunk-eb413024":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-09303757":"3283ee2e","chunk-2d207ad9":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-368dd9cc":"9fb5add6","chunk-4e8c3558":"44380330","chunk-671b07ac":"dac994e7","chunk-ac9e53aa":"20edb077","chunk-e8f74382":"acca8c6f","chunk-eb413024":"1c4092a0"}[t]+".css",r=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===r))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===a||d===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],m.parentNode.removeChild(m),n(o)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1b4a":function(t,e,n){},"3b69":function(t,e,n){"use strict";n("4ee5")},"445d":function(t,e,n){t.exports=n.p+"img/blurrythis.5d49417e.jpg"},"4ee5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"font"},[n("v-app-bar",{attrs:{app:"",color:"primary"}},[n("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.overlay=!t.overlay}}}),t.drawer?t._e():n("v-toolbar-title",{staticClass:"test",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[t._v("Blueberry Hill Outdoor Center")])],1),n("MenuOverlay",{attrs:{active:t.overlay},on:{close:function(e){t.overlay=!1}}}),n("v-main",{on:{click:t.contentClick}},[n("router-view")],1),n("Footer")],1)},r=[],o=(n("9911"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"primary",app:"",inset:"",absolute:""}},[n("v-card",{staticClass:"white--text text-center",attrs:{flat:"",tile:"",color:"primary",width:"100%"}},[n("div",[n("link",{attrs:{href:"//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css",rel:"stylesheet",type:"text/css"}}),n("div",{attrs:{id:"mc_embed_signup"}},[n("form",{staticClass:"validate",attrs:{action:"https://blueberryhilltrails.us7.list-manage.com/subscribe/post?u=63ef5c54f00c0c8e96990d81c&id=a19d308b59",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[n("div",{attrs:{id:"mc_embed_signup_scroll"}},[n("label",{attrs:{for:"mce-EMAIL"}},[t._v("Join our Mailing List!")]),n("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"email address",required:""}}),n("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[n("input",{attrs:{type:"text",name:"b_63ef5c54f00c0c8e96990d81c_a19d308b59",tabindex:"-1",value:""}})]),n("div",{staticClass:"clear"},[n("input",{staticClass:"button",attrs:{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe"}})])])])])]),n("v-card-text",{staticClass:"white--text  pt-4"},[t._v(" Contact Us ")]),n("v-card-text",{staticClass:"pt-0 mb-0 pb-0"},t._l(t.icons,(function(e){return n("v-btn",{key:e.name,staticClass:"mx-4 white--text",attrs:{icon:"",href:e.link}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.name))])],1)})),1),n("v-divider"),n("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("OC")])])],1)],1)}),c=[],s={data:function(){return{icons:[{name:"mdi-facebook",link:"https://facebook.com/BlueberryHillOutdoorCenter/"},{name:"mdi-instagram",link:"https://instagram.com/blueberryoc/"},{name:"mdi-email",link:"mailto:info@blueberryhillinn.com"}]}}},l=s,d=n("2877"),u=n("6544"),m=n.n(u),p=n("8336"),h=n("b0af"),f=n("99d9"),b=n("ce7e"),v=n("553a"),y=n("132d"),g=Object(d["a"])(l,o,c,!1,null,null,null),k=g.exports;m()(g,{VBtn:p["a"],VCard:h["a"],VCardText:f["a"],VDivider:b["a"],VFooter:v["a"],VIcon:y["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:t.active,"overlay-color":"primary","overlay-opacity":".9"},on:{"click:outside":function(e){return t.$emit("close")}}},[a("v-list",{attrs:{color:"primary",nav:"",tile:"",elevation:"0"}},[a("v-list-item",[a("v-spacer"),a("v-icon",{attrs:{color:"white"},on:{click:function(e){return t.$emit("close")}}},[t._v("mdi-close")])],1),t._l(t.tabs,(function(e){return a("v-list-item",{key:e.name,staticClass:"text-center",attrs:{"active-class":"test"},on:{click:function(n){return t.clickHandler(e)}}},[a("v-list-item-content",[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.icon))]),a("v-list-item-title",{staticClass:"test"},[a("h2",[t._v(t._s(e.name))])]),e.expanded?a("v-list",{attrs:{color:"primary",nav:"",tile:"",elevation:"0"}},t._l(e.options,(function(e){return a("v-list-item",{key:e.name,staticClass:"text-center",on:{click:function(n){return t.clickHandler(e)}}},[a("v-list-item-content",[a("h4",{staticStyle:{color:"white"}},[t._v(t._s(e.name))])])],1)})),1):t._e()],1)],1)})),a("v-list-item",{staticClass:"text-center",attrs:{href:"https://blueberryhillinn.com",target:"_blank","active-class":"test"},on:{click:function(e){return t.$emit("close")}}},[a("v-list-item-content",[a("v-img",{staticClass:"center",attrs:{src:n("97c0"),"max-width":"40",transition:"scale-transition"}}),a("v-list-item-title",{staticClass:"test"},[a("h2",[t._v("Blueberry Hill Inn")])])],1)],1)],2)],1)},_=[],C={data:function(){return{tabs:[{index:0,name:"Home",icon:"mdi-home",link:"/"},{index:1,name:"COVID-19",icon:"mdi-alert",expanded:!1,options:[{name:"Safety Details",link:"/covid_safety"},{name:"Contact Tracing Form",link:"/covid_form"}]},{index:2,name:"Trails",icon:"mdi-hiking",expanded:!1,options:[{name:"Conditions",link:"/conditions"},{name:"Descriptions",link:"/trails"}]},{index:3,name:"Activities & Rentals",icon:"mdi-ski-cross-country",link:"/visit"},{index:4,name:"Food & Lodging",icon:"mdi-tent",link:"/lodging"}]}},props:{active:Boolean},methods:{clickHandler:function(t){t.options?(t.expanded=!t.expanded,console.log(t.options)):(this.$router.push(t.link),this.$emit("close"))}}},x=C,O=(n("ee28"),n("169a")),S=n("adda"),V=n("8860"),B=n("da13"),T=n("5d23"),H=n("2fa4"),I=Object(d["a"])(x,w,_,!1,null,"0bb84dac",null),L=I.exports;m()(I,{VDialog:O["a"],VIcon:y["a"],VImg:S["a"],VList:V["a"],VListItem:B["a"],VListItemContent:T["a"],VListItemTitle:T["b"],VSpacer:H["a"]});var D={name:"App",components:{Footer:k,MenuOverlay:L},data:function(){return{active_tab:0,drawer:!1,overlay:!1,tabs:[{index:0,name:"Home",icon:"mdi-home",link:"/static"},{index:1,name:"Trails",icon:"mdi-hiking",expanded:!1,options:[{name:"Conditions",link:"/conditions"},{name:"Descriptions",link:"/trails"}]},{index:2,name:"Amenities",icon:"mdi-ski-cross-country",expanded:!1,options:[{name:"Lodging & Camping",link:"/lodging"},{name:"Food & Drink",link:"/foodndrink"},{name:"Rentals",link:"/rentals"}]},{index:3,name:"Trail Conditions",icon:"mdi-weather-partly-snowy",link:"/conditions"},{index:4,name:"About",icon:"mdi-information",link:"/about"}]}},methods:{clickHandler:function(t){t.options?t.expanded=!t.expanded:this.nav(t.link)},nav:function(t){this.$router.push(t),this.drawer=!1},contentClick:function(){console.log("content clicked boy")}}},j=D,A=(n("5c1b"),n("7496")),E=n("40dc"),P=n("5bc1"),M=n("f6c4"),F=n("2a7f"),$=Object(d["a"])(j,i,r,!1,null,"5719ea85",null),N=$.exports;m()($,{VApp:A["a"],VAppBar:E["a"],VAppBarNavIcon:P["a"],VMain:M["a"],VToolbarTitle:F["a"]});n("d3b7");var R=n("8c4f"),q=n("bb51"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"hello"},[t._v("Hello "+t._s(t.name)+" "+t._s(t.$attrs))])])},z=[],J={props:{name:{type:String,default:"Vue!"}}},K=J,W=Object(d["a"])(K,U,z,!1,null,null,null),G=W.exports;function Q(t){return{active_tab:parseInt(t.params.years)}}a["a"].use(R["a"]);var Y=[{path:"/",name:"Home",component:q["default"]},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/conditions",name:"Trail Conditions",component:function(){return n.e("chunk-2d207ad9").then(n.bind(null,"a20b"))}},{path:"/covid_form",name:"COVID-19 Contact Tracing",component:function(){return n.e("chunk-09303757").then(n.bind(null,"fbd4"))}},{path:"/covid_form",name:"COVID-19 Contact Tracing",component:function(){return n.e("chunk-09303757").then(n.bind(null,"fbd4"))}},{path:"/covid_safety",name:"COVID-19 Safety Measures",component:function(){return n.e("chunk-368dd9cc").then(n.bind(null,"2ec5"))}},{path:"/press",name:"Press Release",component:function(){return n.e("chunk-e8f74382").then(n.bind(null,"e3a0"))}},{path:"/trails",name:"Trails",component:function(){return n.e("chunk-eb413024").then(n.bind(null,"e445"))}},{path:"/foodndrink",name:"Food & Drink",component:function(){return n.e("chunk-ac9e53aa").then(n.bind(null,"31b5"))}},{path:"/lodging",name:"Lodging & Camping",component:function(){return n.e("chunk-671b07ac").then(n.bind(null,"13e2"))}},{path:"/visit/:years",name:"Visit / Rentals",component:function(){return n.e("chunk-4e8c3558").then(n.bind(null,"2f1e"))},props:Q},{path:"/visit",name:"Visit / Rentals",component:function(){return n.e("chunk-4e8c3558").then(n.bind(null,"2f1e"))},props:{active_tab:-1}},{path:"*",name:"404",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/static",component:G,props:{name:"world"}},{path:"/dynamic/:years",component:G,props:Q}],Z=new R["a"]({routes:Y,scrollBehavior:function(){return{x:0,y:0}}}),X=Z,tt=n("f309");a["a"].use(tt["a"]);var et=new tt["a"]({theme:{themes:{light:{primary:"#1c1c2c",secondary:"#B22222",anchor:"#B22222",white:"#ffffff"}}}}),nt=et;a["a"].config.productionTip=!1,new a["a"]({router:X,vuetify:nt,render:function(t){return t(N)}}).$mount("#app")},"5c1b":function(t,e,n){"use strict";n("1b4a")},"82b3":function(t,e,n){},"97c0":function(t,e,n){t.exports=n.p+"img/bbh_logo.c81eceb7.png"},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{attrs:{to:"/covid_safety"}},[a("v-banner",{staticClass:"green",attrs:{"single-line":"",to:"/covid_safety"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[t._v(" COVID POLICIES ")])],1)],1),a("v-img",{staticClass:"white--text align-end imgsize",staticStyle:{"text-align":"center"},attrs:{src:n("d833"),"max-height":"475","min-height":"450","lazy-src":n("445d")}},[a("v-overlay",{attrs:{value:"true",absolute:""}},[a("div",{staticClass:"pb-2p3 sm-pb-2p9 font-1p4",staticStyle:{"font-style":"italic"}},[a("h4",[t._v("Welcome to the")])]),a("div",{staticClass:"pb-1p3 sm-pb-2p9 sm-font-1p4 md-font-3p2 lg-font-3p9  "},[a("h3",[t._v("Blueberry Hill Outdoor Center")])]),a("div",{staticClass:"pb-1p3 sm-font-1p1 font-1p4",staticStyle:{"font-style":"italic"}},[a("h4",[t._v("Central Vermont's Four Season Outdoor Center")])]),a("div",{staticClass:"pt-2p1"},[a("v-btn",{staticClass:"elevation-5 mb-5",staticStyle:{align:"center",color:"white"},attrs:{width:"200",href:"trailmap.pdf",target:"_blank",color:"green darken-3"}},[a("h4",[t._v("Trail Map")])])],1),a("div",{staticClass:"pt-2p1"},[a("v-btn",{staticClass:"elevation-5 mb-5",staticStyle:{align:"center",color:"white"},attrs:{width:"200",to:"/conditions",target:"_self",color:"green darken-3"}},[a("h4",[t._v("Trail Conditions")])])],1),a("div",{staticClass:"pt-2p1"},[a("v-btn",{staticClass:"elevation-5 mb-5",staticStyle:{align:"center",color:"white"},attrs:{width:"275",to:"/press",target:"_self",color:"blue darken-10"}},[a("h4",[t._v("Update - December 2020")])])],1),a("div",{staticClass:"pt-2p1"},[a("v-btn",{staticClass:"elevation-5 mb-5",staticStyle:{align:"center",color:"white"},attrs:{width:"250",to:"/covid_form",target:"_self",color:"blue darken-10"}},[a("h4",[t._v("COVID Reservation Form")])])],1)])],1),a("v-sheet",{staticStyle:{"text-align":"center"},attrs:{color:"primary","min-height":"250"}},[a("v-container",[a("h1",{staticStyle:{color:"white"}},[t._v("About")]),a("br"),a("p",{staticStyle:{color:"white"}},[t._v(" Since 1972, the Blueberry Hill Outdoor Center (formerly known as the BBH Ski Center) has been a home base for your adventures in the Moosalamoo National Recreation Area. Located in the heart of the Green Mountain National Forest, the Outdoor Center provides access to the Blueberry Hill network of trails, the Vermont Long Trail, The Catamount Trail, and the Moosalamoo National Forest Trails. ")]),a("p",{staticStyle:{color:"white"}},[t._v(" Our mission at the Outdoor Center is twofold: we aspire to provide access to outdoor recreation for all as well as promote the conservation and sustainable use of our unique natural environment. We are committed to preserving our forests, woods, trails, rivers, streams, and habitats for the future enjoyment of both humans and animals. Blueberry Hill Outdoor Center is a designated 501(c)(3) non-profit company. ")]),a("div",[a("form",{staticStyle:{"text-align":"center"},attrs:{action:"https://www.paypal.com/donate",method:"post",target:"_top"}},[a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"ZHFHQKLLKDP2W"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])])])],1),a("v-divider"),a("v-sheet",{staticStyle:{"text-align":"center",width:"100%"},attrs:{color:"primary"}},[a("v-container",{staticStyle:{"max-width":"600px"}},[a("h1",{staticStyle:{color:"white"}},[t._v("Directions")]),a("iframe",{staticStyle:{border:"0",width:"100%"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.348675795381!2d-73.01296704853668!3d43.89004474499787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb547eccf30096f%3A0xff059aa9308d611c!2sBlueberry%20Hill%20Outdoor%20Center!5e0!3m2!1sen!2sus!4v1590616505653!5m2!1sen!2sus",height:"450",width:"200",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})])],1),a("v-sheet",{staticStyle:{"text-align":"center",width:"100%"},attrs:{color:"primary"}},[a("h1",{staticStyle:{color:"white"}},[t._v("Events")]),a("div",{staticClass:"fb-page",staticStyle:{"text-align":"center",width:"100%"},attrs:{"data-href":"https://www.facebook.com/BlueberryHillOutdoorCenter/","data-tabs":"events","data-width":"450","data-height":"600","data-small-header":"true","data-adapt-container-width":"true","data-hide-cover":"true","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/BlueberryHillOutdoorCenter/"}},[a("a",{attrs:{href:"https://www.facebook.com/BlueberryHillOutdoorCenter/"}},[t._v("Blueberry Hill Outdoor Center")])])]),a("br"),a("br"),a("br"),a("br")])],1)},i=[],r={name:"Home",components:{}},o=r,c=(n("3b69"),n("2877")),s=n("6544"),l=n.n(s),d=n("e4e5"),u=n("8336"),m=n("a523"),p=n("ce7e"),h=n("adda"),f=n("a797"),b=n("0fd9"),v=n("8dd9"),y=Object(c["a"])(o,a,i,!1,null,"65c3985c",null);e["default"]=y.exports;l()(y,{VBanner:d["a"],VBtn:u["a"],VContainer:m["a"],VDivider:p["a"],VImg:h["a"],VOverlay:f["a"],VRow:b["a"],VSheet:v["a"]})},d833:function(t,e,n){t.exports=n.p+"img/BBHOC.2ee9b163.png"},ee28:function(t,e,n){"use strict";n("82b3")}});
//# sourceMappingURL=app.9f7b5694.js.map