(function(t){function n(n){for(var i,r,o=n[0],c=n[1],l=n[2],u=0,f=[];u<o.length;u++)r=o[u],a[r]&&f.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(n);while(f.length)f.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,r=1;r<e.length;r++){var c=e[r];0!==a[c]&&(i=!1)}i&&(s.splice(n--,1),t=o(o.s=e[0]))}return t}var i={},a={app:0},s=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-1f9fa828":"231cb22d","chunk-303ff444":"bae852ac"}[t]+".js"}function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var n=[],e=a[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise(function(n,i){e=a[t]=[n,i]});n.push(e[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t),s=function(n){c.onerror=c.onload=null,clearTimeout(l);var e=a[t];if(0!==e){if(e){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+s+")");r.type=i,r.request=s,e[1](r)}a[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(n)},o.m=t,o.c=i,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var d=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("64a9"),a=e.n(i);a.a},1441:function(t,n,e){},"2c9b":function(t,n,e){"use strict";var i=e("1441"),a=e.n(i);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"head-navbar"},[e("div",{staticClass:"head-n-item",on:{click:t.min}},[e("i",{staticClass:"icon-dash1"})]),e("div",{staticClass:"head-n-item",on:{click:t.max}},[e("i",{class:1==this.isMaxIcon?"icon-fullscreen1":"icon-fullscreen-exit1"})]),e("div",{staticClass:"head-n-item",on:{click:t.close}},[e("i",{staticClass:"icon-x1"})])]),"/"==this.$route.path?e("div",[e("div",{staticClass:"navbar"},[e("a",{staticClass:"nav-link",on:{click:function(n){t.pages=t.nav.id}}},[e("img",{staticClass:"nav-userimage",attrs:{src:t.user.image}})]),e("ul",{staticClass:"navbar-nav"},t._l(t.navs,function(n,i){return e("li",{key:i,staticClass:"nav-item",class:t.pages==n.id?"nav-this":""},[e("a",{staticClass:"nav-link",on:{click:function(e){t.pages=n.id}}},[e("i",{class:n.icon}),e("p",[t._v(t._s(n.text))])])])}),0),e("ul",{staticClass:"navbar-nav",staticStyle:{position:"absolute",bottom:"31px"}},[e("router-link",{staticClass:"nav-link",attrs:{target:"_blank",to:"/schedule"}},[e("li",{staticClass:"nav-item"},[e("i",{staticClass:"icon-calendar-check-fill1"}),e("p",[t._v("日程")])])]),e("router-link",{staticClass:"nav-link",attrs:{target:"_blank",to:"/setup"}},[e("li",{staticClass:"nav-item"},[e("i",{staticClass:"icon-gear-fill"}),e("p",[t._v("设置")])])])],1)]),e("div",{staticClass:"content"},[1==t.pages?e("news"):t._e()],1)]):t._e(),e("router-view")],1)},s=[],r={name:"app",data:function(){return{isMaxIcon:!0,pages:1,user:{name:"laizq",image:"http://q1.qlogo.cn/g?b=qq&nk=123632704&s=640"},navs:[{icon:"icon-chat-fill1",text:"消息",id:1},{text:"通讯录",icon:"icon-people-fill1",id:2},{icon:"icon-folder-fill1",text:"文档",id:3},{icon:"icon-grid-1x2-fill",text:"工作",id:4}]}},methods:{min:function(){remote.getCurrentWindow().minimize()},max:function(){remote.getCurrentWindow().isMaximized()?(remote.getCurrentWindow().restore(),this.isMaxIcon=!0):(remote.getCurrentWindow().maximize(),this.isMaxIcon=!1)},close:function(){remote.getCurrentWindow().close()}}},o=r,c=(e("034f"),e("2877")),l=Object(c["a"])(o,a,s,!1,null,null,null),u=l.exports,d=e("3f11");i["a"].use(d["a"]);var f=[{path:"/schedule",name:"schedule",component:function(){return e.e("chunk-303ff444").then(e.bind(null,"e3b1"))}},{path:"/setup",name:"Setup",component:function(){return e.e("chunk-1f9fa828").then(e.bind(null,"4db5"))}}],p=new d["a"]({routes:f}),v=p,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"newNav"},[e("div",{staticClass:"newNav-search"}),e("div",{staticClass:"newsBox"},t._l(t.news,function(n,i){return e("div",{key:i,staticClass:"news",on:{click:function(e){return t.newto(n.id)}}},[e("div",{staticClass:"news-image",style:"background-image:url("+n.image+")"}),e("div",{staticClass:"news-box"},[e("div",{staticClass:"news-title"},[t._v(t._s(n.title))]),e("div",{staticClass:"news-content"},[t._v(t._s(n.content))])])])}),0)]),t.newid?t._e():e("div",{staticClass:"newBox"})])},h=[],g={data:function(){return{newid:"",news:[{id:"1",image:"http://p.qlogo.cn/gh/1079943856/1079943856/640/",title:"源码星球中心",content:"csszy：哈哈/funny"}]}},methods:{newto:function(t){alert(t)}}},b=g,w=(e("2c9b"),Object(c["a"])(b,m,h,!1,null,null,null)),C=w.exports;i["a"].use(d["a"]),i["a"].config.productionTip=!1,i["a"].component("news",C),new i["a"]({router:v,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,n,e){}});
//# sourceMappingURL=app.53b71579.js.map