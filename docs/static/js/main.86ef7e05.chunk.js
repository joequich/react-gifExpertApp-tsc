(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(8),c=a.n(r),i=a(2),s=a(7),l=a(0),u=function(e){var t=e.setCategories,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],u=r[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("form",{role:"search","aria-label":"Search a gif",onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return e.find((function(e){return e===c}))?Object(s.a)(e):[c].concat(Object(s.a)(e))})),u(""))},children:Object(l.jsx)("input",{type:"text","aria-label":"Search",placeholder:"Search",value:c,onChange:function(e){u(e.target.value)}})})})},o=a(11),d=a(6),j=a.n(d),p=a(9),b=function(){var e=Object(p.a)(j.a.mark((function e(t){var a,n,r,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=43NQ4ZWRj9t2xCXUDMX3HKGQHYpm7Uzp&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,a=e.url;return Object(l.jsxs)("div",{role:"listitem",className:"card animate__animated animate__fadeInUp",children:[Object(l.jsx)("img",{src:a,alt:t}),Object(l.jsx)("p",{children:t})]})};f.defaultProps={id:""};var h=a(10),m=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){b(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=a.data,c=a.loading;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{role:"region","aria-labelledby":"title",children:[Object(l.jsx)("h3",{id:"title",className:"category-title",children:t}),c&&Object(l.jsx)("p",{className:"animate__pulse",children:"Loading..."}),Object(l.jsx)("div",{role:"list",className:"card-grid animate__slideInUp",children:r.map((function(e){return Object(l.jsx)(f,Object(o.a)({},e),e.id)}))})]})})};m.propType={category:a.n(h).a.string.isRequired};var O=function(e){var t=e.defaultCategories,a=void 0===t?[]:t,r=Object(n.useState)(a),c=Object(i.a)(r,2),s=c[0],o=c[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"title",children:Object(l.jsx)("span",{className:"title-text",children:"GifExpertApp"})}),Object(l.jsx)(u,{setCategories:o}),Object(l.jsx)("hr",{}),s.map((function(e){return Object(l.jsx)(m,{category:e},e)}))]})};a(20);c.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.86ef7e05.chunk.js.map