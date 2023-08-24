(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(37),r=(c(47),c(48),c(12)),a=c(3),s=c(11),i=c(38),l=c(13),o=c.n(l),j=c(1),u=function(e){var t=e.isActive,c=void 0!==t&&t;return o()("navbar-item",{"has-background-grey-lighter":c})},d=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(r.c,{to:"/",className:u,children:"Home"}),Object(j.jsx)(r.c,{"aria-current":"page",to:"/people",className:u,children:"People"})]})})})},b=(c(50),function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(a.b,{})})})]})}),h=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},x=c(10),O=c(4),p=c(6),m=c(0),f=function(e){return e.Man="m",e.Woman="f",e}({}),v=Object(s.withDefault)(s.ArrayParam,[]),g=function(){var e=Object(s.useQueryParams)({sex:s.StringParam,century:v,query:s.StringParam}),t=Object(O.a)(e,2),c=t[0],n=t[1],r=c.century,a=c.sex,i=c.query,l=function(e){return function(t){t.preventDefault(),e?r.includes(e)?n({century:r.filter((function(t){return t!==e}))}):n({century:[].concat(Object(x.a)(r),[e])}):n({century:void 0})}},u=function(e){return function(t){t.preventDefault(),n(e?{sex:e}:{sex:void 0})}};return Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(j.jsx)("a",{className:o()({"is-active":!a}),href:"#/people",onClick:u(null),children:"All"}),Object(j.jsx)("a",{href:"#/people?sex=m",onClick:u(f.Man),className:o()({"is-active":a===f.Man}),children:"Male"}),Object(j.jsx)("a",{className:o()({"is-active":a===f.Woman}),href:"#/people?sex=f",onClick:u(f.Woman),children:"Female"})]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left",children:[Object(j.jsx)("input",{onChange:function(e){var t=e.target.value.toLowerCase().replace(/(?:[\0-\x08\x0E-\x1F!-@\[-`\{-\x9F\xA1-\u03FF\u0500-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,"");n({query:t||null})},value:i||"","data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search"}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(j.jsx)("div",{className:"level-left",children:[16,17,18,19,20].map(String).map((function(e){return Object(j.jsx)("a",{"data-cy":"century",className:o()("button mr-1",{"is-info":r.includes(e)}),href:"#/people?centuries=".concat(e),onClick:l(e),children:e},e)}))}),Object(j.jsx)("div",{className:"level-right ml-4",children:Object(j.jsx)("a",{"data-cy":"centuryALL",className:o()("button is-success",{"is-outlined":0!==r.length}),href:"#/people",onClick:l(null),children:"All"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)("a",{className:"button is-link is-outlined is-fullwidth",href:"#/people",children:"Reset all filters"})})]})},N=(c(51),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),y=function(e){var t=e.text,c=void 0===t?"":t,n=e.highlight,r=void 0===n?"":n;if(!c)return Object(j.jsx)("span",{children:"-"});var a=null===c||void 0===c?void 0:c.toLowerCase();if(r&&a.includes(r)){var s=c.split(new RegExp("(".concat(r,")"),"gi"));return Object(j.jsx)("span",{children:s.map((function(e,t){return Object(j.jsx)("span",{className:o()({highlighted:e.toLowerCase()===r.toLowerCase()}),children:e},"".concat(t))}))})}return Object(j.jsx)("span",{children:c})},F=function(e){return e.Query="query",e}({}),w=function(e){var t=e.person,c=t.name,n=t.slug,a=t.sex,s=Object(r.d)(),i=Object(O.a)(s,1)[0],l=i.get(F.Query);return Object(j.jsx)(r.b,{to:{pathname:"/people/".concat(n),search:i.toString()},className:o()({"has-text-danger":a===f.Woman}),children:Object(j.jsx)(y,{text:c,highlight:l})})},k=function(e){var t=e.person,c=t.sex,n=t.born,s=t.died,i=t.motherName,l=t.fatherName,u=t.mother,d=t.father,b=Object(r.d)(),h=Object(O.a)(b,1)[0].get(F.Query),x=Object(a.r)().slug;return Object(j.jsxs)("tr",{"data-cy":"person",className:o()({"has-background-warning":x===t.slug}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(w,{person:t})}),Object(j.jsx)("td",{children:c}),Object(j.jsx)("td",{children:n}),Object(j.jsx)("td",{children:s}),Object(j.jsx)("td",{children:u?Object(j.jsx)(w,{person:u}):Object(j.jsx)(y,{text:i,highlight:h})}),Object(j.jsx)("td",{children:d?Object(j.jsx)(w,{person:d}):Object(j.jsx)(y,{text:l,highlight:h})})]})},D=function(e){var t=e.sortBy,c=Object(s.useQueryParams)({sort:s.StringParam,order:s.StringParam}),n=Object(O.a)(c,1)[0],r=n.sort===t,a="desc"===n.order;return r&&!a?Object(j.jsx)("i",{className:"fas fa-sort-up"}):r&&a?Object(j.jsx)("i",{className:"fas fa-sort-down"}):Object(j.jsx)("i",{className:"fas fa-sort"})},C=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),P=function(e){var t=e.people,c=Object(s.useQueryParams)({sort:s.StringParam,order:s.StringParam}),n=Object(O.a)(c,2),r=n[0],a=n[1],i=function(e){return function(t){t.preventDefault(),e?r.sort===e?r.order?r.order&&a({order:null,sort:null}):a({order:"desc"}):a({sort:e,order:null}):a({sort:null,order:null})}};return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(j.jsx)("a",{href:"#/people?sort=name",onClick:i(C.Name),children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)(D,{sortBy:C.Name})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(j.jsx)("a",{href:"#/people?sort=sex",onClick:i(C.Sex),children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)(D,{sortBy:C.Sex})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(j.jsx)("a",{href:"#/people?sort=born&order=desc",onClick:i(C.Born),children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)(D,{sortBy:C.Born})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(j.jsx)("a",{href:"#/people?sort=died",onClick:i(C.Died),children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)(D,{sortBy:C.Died})})})]})}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(k,{person:e},e.slug)}))})]})},S=c(5),B=c(8),E="https://mate-academy.github.io/react_people-table/api/people.json";function L(e){return new Promise((function(t){return setTimeout(t,e)}))}function A(){return(A=Object(B.a)(Object(S.a)().mark((function e(){return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(500).then((function(){return fetch(E)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(){var e=Object(m.useState)(!0),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(m.useState)(!1),s=Object(O.a)(a,2),i=s[0],l=s[1],o=Object(m.useState)([]),u=Object(O.a)(o,2),d=u[0],b=u[1],h=Object(r.d)(),f=Object(O.a)(h,1)[0];Object(m.useEffect)((function(){(function(){return A.apply(this,arguments)})().then((function(e){b(function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.fatherName}));return Object(p.a)(Object(p.a)({},t),{},{mother:c,father:n})}))}(e))})).catch((function(){l(!0)})).finally((function(){return n(!1)}))}),[]);var v=Object(m.useMemo)((function(){var e,t=Object(x.a)(d);if(f.get("sex")&&(t=t.filter((function(e){return e.sex===f.get("sex")}))),f.get("query")&&(t=t.filter((e=f.get("query"),function(t){return!!e&&"".concat(t.name," ").concat(t.motherName," ").concat(t.fatherName).toLowerCase().includes(e)}))),f.get("century")){var c=f.getAll("century").map(Number);t=t.filter((function(e){return c.includes((t=e.born,Math.ceil(t/100)));var t}))}if(f.get("sort"))switch(f.get("sort")){case C.Name:t=t.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case C.Sex:t=t.sort((function(e,t){return e.sex.localeCompare(t.sex)}));break;case C.Born:t=t.sort((function(e,t){return e.born-t.born}));break;case C.Died:t=t.sort((function(e,t){return e.died-t.died}))}return"desc"===f.get("order")&&t.reverse(),t}),[f,d]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[!!d.length&&Object(j.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(j.jsx)(g,{})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"box table-container",children:[c&&Object(j.jsx)(N,{}),i&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),!d.length&&!c&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!c&&!v.length&&Object(j.jsx)("p",{children:"There are no people matching the current search criteria"}),!c&&!!v.length&&Object(j.jsx)(P,{people:v})]})})]})})]})},Q=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},q=function(){return Object(j.jsx)(r.a,{children:Object(j.jsx)(s.QueryParamProvider,{adapter:i.a,children:Object(j.jsxs)(a.e,{children:[Object(j.jsx)(a.c,{path:"/home",element:Object(j.jsx)(a.a,{to:"/",replace:!0})}),Object(j.jsxs)(a.c,{path:"/",element:Object(j.jsx)(b,{}),children:[Object(j.jsx)(a.c,{index:!0,element:Object(j.jsx)(h,{})}),Object(j.jsx)(a.c,{path:"people",children:Object(j.jsx)(a.c,{path:":slug?",element:Object(j.jsx)(M,{})})}),Object(j.jsx)(a.c,{path:"*",element:Object(j.jsx)(Q,{})})]})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(q,{}))}},[[52,1,2]]]);
//# sourceMappingURL=main.1f28f66e.chunk.js.map