"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[689],{983:function(n,t,e){e.d(t,{Hx:function(){return s},Kd:function(){return i},Y5:function(){return u},Zn:function(){return c},bI:function(){return a}});var r="https://api.themoviedb.org/3/",o="a8e8f1f6f05f8bbeb94fac813dcc486c";function c(){return fetch("".concat(r,"trending/movie/day?api_key=").concat(o)).then((function(n){return n.json()}))}function a(n){return fetch("".concat(r,"search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false")).then((function(n){return n.json()}))}function u(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(o)).then((function(n){return n.json()}))}function i(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.json()}))}function s(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){return n.json()}))}},810:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,o,c,a,u=e(439),i=e(87),s=e(791),l=e(983),f=e(168),d=e(444),h=d.ZP.input(r||(r=(0,f.Z)(["\n  border: 1px solid black;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: all 500ms;\n  margin-right: 10px;\n  cursor: pointer;\n  &:hover {\n    border: 1px solid orange;\n  }\n"]))),p=d.ZP.button(o||(o=(0,f.Z)(["\n  border: 1px solid orange;\n  border-radius: 10px;\n  padding: 2px 15px;\n  transition: background-color 700ms;\n  &:hover {\n    background-color: orange;\n  }\n"]))),g=d.ZP.li(c||(c=(0,f.Z)(["\n  transition: color 700ms;\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n  &:hover {\n    color: orange;\n  }\n"]))),m=d.ZP.ul(a||(a=(0,f.Z)(["\n  margin-top: 40px;\n"]))),v=e(689),b=e(184),x=function(n){var t=n.searchResults,e=(0,v.TH)();return console.log(e),(0,b.jsx)(m,{children:t.map((function(n,t){var r=n.id,o=n.title;return(0,b.jsx)(g,{children:(0,b.jsxs)(i.rU,{to:"/movies/".concat(r),state:{from:e},children:[t+1,")",o]})},r)}))})},k=function(){var n,t=(0,i.lr)(""),e=(0,u.Z)(t,2),r=e[0],o=e[1],c=(0,s.useState)((function(){var n;return null!==(n=JSON.parse(localStorage.getItem("searchResults")))&&void 0!==n?n:[]})),a=(0,u.Z)(c,2),f=a[0],d=a[1],g=null!==(n=r.get("filmId"))&&void 0!==n?n:"";(0,s.useEffect)((function(){localStorage.setItem("searchResults",JSON.stringify(f))}),[f]);return(0,b.jsxs)("form",{onSubmit:function(n){n.preventDefault(),(0,l.bI)(g).then((function(n){var t=n.results;return d(t)})).catch((function(n){return console.error(n)}))},children:[(0,b.jsx)(h,{type:"text",value:g,onChange:function(n){if(""===n.target.value)return o({});o({filmId:n.target.value})}}),(0,b.jsx)(p,{type:"submit",children:"Search"}),(0,b.jsx)(x,{searchResults:f})]})}}}]);
//# sourceMappingURL=689.733cb996.chunk.js.map