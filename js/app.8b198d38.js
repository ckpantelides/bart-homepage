(function(t){function a(a){for(var e,l,r=a[0],c=a[1],o=a[2],p=0,f=[];p<r.length;p++)l=r[p],i[l]&&f.push(i[l][0]),i[l]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(a);while(f.length)f.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(e=!1)}e&&(n.splice(a--,1),t=l(l.s=s[0]))}return t}var e={},i={app:0},n=[];function l(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=e,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(s,e,function(a){return t[a]}.bind(null,e));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/bart-homepage/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var o=0;o<r.length;o++)a(r[o]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var e=s("64a9"),i=s.n(e);i.a},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("HeroImage"),s("About"),s("Contact"),s("Footer")],1)},n=[],l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hero"},[s("section",{staticClass:"hero is-link is-fullheight",attrs:{id:"home"}},[s("div",{staticClass:"hero-body"},[s("NavBar"),t._m(0)],1)])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("p",{staticClass:"is-pulled-left",staticStyle:{clear:"both"}},[t._v("Hi, I'm")]),s("h1",{staticClass:"title is-1 is-pulled-left",staticStyle:{clear:"both"}},[t._v("\n          Bart Palica\n        ")]),s("h2",{staticClass:"subtitle is-3 is-pulled-left",staticStyle:{clear:"both"}},[t._v("\n          qualified electrician\n        ")])])}],c=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"navbar"},[s("nav",{staticClass:"navbar is-link is-fixed-top is-transparent"},[s("div",{staticClass:"navbar-brand"},[s("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarExampleTransparentExample"}},[s("span"),s("span"),s("span")])]),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarExampleTransparentExample"}},[s("div",{staticClass:"navbar-end"},[s("a",{staticClass:"navbar-item",attrs:{href:"#about"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-info",staticStyle:{color:"black"}})]),s("span",{staticStyle:{color:"black"}},[t._v("About")])]),s("a",{staticClass:"navbar-item",attrs:{href:"#contact"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-envelope",staticStyle:{color:"black"}})]),s("span",{staticStyle:{color:"black"}},[t._v("Contact")])]),s("a",{staticClass:"navbar-item",attrs:{href:"#home"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-home",staticStyle:{color:"black"}})]),s("span",{staticStyle:{color:"black"}},[t._v("Home")])])])])])])}],u={name:"NavBar",props:{}},p=u,f=(s("7a1b"),s("2877")),v=Object(f["a"])(p,c,o,!1,null,"01f616e4",null),d=v.exports,b={name:"HeroImage",components:{NavBar:d},props:{}},C=b,m=(s("c734"),Object(f["a"])(C,l,r,!1,null,"0783a4b9",null)),h=m.exports,_=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",{staticClass:"section",attrs:{id:"about"}},[s("div",{staticClass:"section-heading"},[s("h3",{staticClass:"title is-2"},[t._v("About Me")]),s("h4",{staticClass:"subtitle is-5"},[t._v("Qualified electrician")]),s("div",{staticClass:"container"},[s("p",[s("strong",[t._v("3 years")]),t._v(" of experience. Available for work across\n          London and Kent.\n        ")])])]),s("br"),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"}),s("div",{staticClass:"column"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:"https://source.unsplash.com/random/1280x960",alt:"Placeholder image"}})])]),s("div",{staticClass:"column"})])])])}],y={name:"About",props:{}},x=y,E=Object(f["a"])(x,_,g,!1,null,"46d2ccae",null),O=E.exports,S=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",{staticClass:"section",attrs:{id:"contact"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-heading"},[s("h3",{staticClass:"title is-2"},[t._v("Contact")]),s("h4",{staticClass:"subtitle is-5"},[t._v("Get in touch")])]),s("br"),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6 is-offset-3"},[s("div",{staticClass:"box"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Name")]),s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Text input"}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email")]),s("div",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input",attrs:{type:"email",placeholder:"Email input",value:""}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Message")]),s("div",{staticClass:"control"},[s("textarea",{staticClass:"textarea",attrs:{placeholder:"Textarea"}})])]),s("div",{staticClass:"field is-grouped has-text-centered"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-link is-large"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-envelope"})]),s("span",[t._v("Submit")])])])])])])])])])])}],k={name:"Contact",props:{}},$=k,w=Object(f["a"])($,S,j,!1,null,"5384899d",null),P=w.exports,T=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("footer",{staticClass:"footer"},[s("div",{staticClass:"section-heading"},[s("p",[s("strong",[t._v("Built by  ")]),s("a",{attrs:{href:"https://christos.online"}},[t._v("Christos Pantelides")])])])])])}],M={name:"Footer",props:{}},B=M,H=Object(f["a"])(B,T,A,!1,null,"614acc76",null),I=H.exports,N={name:"app",components:{HeroImage:h,About:O,Contact:P,Footer:I}},F=N,J=(s("034f"),Object(f["a"])(F,i,n,!1,null,null,null)),q=J.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(q)}}).$mount("#app")},"64a9":function(t,a,s){},"7a1b":function(t,a,s){"use strict";var e=s("96bc"),i=s.n(e);i.a},"96bc":function(t,a,s){},"9e3a":function(t,a,s){},c734:function(t,a,s){"use strict";var e=s("9e3a"),i=s.n(e);i.a}});
//# sourceMappingURL=app.8b198d38.js.map