(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(7),i=n.n(c),s=n(2),u=n(9),j=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],j=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),j(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){j(e.target.value)}})})},o=n(10),d=n(6),f=n.n(d),l=n(8),b=function(){var e=Object(l.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=5&q=".concat(encodeURI(t),"&api_key=TwBhzMjVvM5r9xn8YfiEVEMPTcU5GVmZ"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("p",{children:t}),Object(a.jsx)("img",{src:n,alt:t})]})},p=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){b(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(a.jsx)(m,Object(o.a)({},e),e.id)}))})]})},h=function(e){var t=Object(r.useState)(["Queen's gambit"]),n=Object(s.a)(t,2),c=n[0],i=n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Gif Expert App"}),Object(a.jsx)(j,{setCategories:i}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:c.map((function(e){return Object(a.jsx)(p,{category:e},e)}))})]})};n(17);i.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.998643a9.chunk.js.map