"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var c,r,a=e(439),o=e(689),u=e(983),i=e(791),f=e(168),s=e(444),h=s.ZP.ul(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  gap: 20px;\n"]))),p=s.ZP.li(r||(r=(0,f.Z)(["\n  flex: 0 0 200px;\n"]))),l=e(184),d=function(){var n=(0,i.useState)(),t=(0,a.Z)(n,2),e=t[0],c=t[1],r=(0,o.UO)().movieId;return(0,i.useEffect)((function(){(0,u.Kd)(r).then((function(n){var t=n.cast;return c(t)})).catch((function(n){return console.error(n)}))}),[r]),(0,l.jsx)(h,{children:e&&e.map((function(n){var t=n.id,e=n.profile_path,c=n.name,r=n.character;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(p,{children:[e?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w92".concat(e),alt:"".concat(c,"'s profile")}):(0,l.jsx)("img",{src:"https://via.placeholder.com/92",alt:""}),(0,l.jsx)("p",{children:c}),(0,l.jsxs)("p",{children:["Character: ",r]})]},t)})}))})}},983:function(n,t,e){e.d(t,{Hx:function(){return f},Kd:function(){return i},Y5:function(){return u},Zn:function(){return a},bI:function(){return o}});var c="https://api.themoviedb.org/3/",r="a8e8f1f6f05f8bbeb94fac813dcc486c";function a(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(r)).then((function(n){return n.json()}))}function o(n){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&query=").concat(n,"&language=en-US&page=1&include_adult=false")).then((function(n){return n.json()}))}function u(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(r)).then((function(n){return n.json()}))}function i(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.json()}))}function f(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=387.c5d9c190.chunk.js.map