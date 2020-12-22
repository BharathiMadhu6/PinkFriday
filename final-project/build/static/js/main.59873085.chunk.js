(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(18),i=n.n(a),j=(n(25),n(11)),o=n(2),l=(n(16),n(5)),d=n(3),u={"username-required":"Please enter a username","bad-characters":"Special characters are not allowed to be a part of username","session-invalid":"Please login","session-required":"Please login to use the application","not-enough":"Please enter appropriate values in all the fields","login needed":"You must login to access this information","network error":"There seems to be a network issue, Try again later"},b=function(e){var t=e.onLogin,n=Object(s.useState)(""),r=Object(o.a)(n,2),a=r[0],i=r[1],j=Object(s.useState)(!0),l=Object(o.a)(j,2),b=l[0],h=l[1],O=Object(s.useState)(!1),x=Object(o.a)(O,2),m=x[0],f=x[1],g=Object(s.useState)(""),p=Object(o.a)(g,2),v=p[0],N=p[1],E=Object(d.f)();return Object(c.jsxs)("div",{className:"login-box",children:[Object(c.jsx)("h2",{children:" LOGIN TO ADD NEW DEALS "}),Object(c.jsx)("span",{children:Object(c.jsx)("label",{className:"username-label",children:" USERNAME "})}),Object(c.jsx)("span",{children:Object(c.jsx)("input",{className:"username",disabled:m,onChange:function(e){i(e.target.value),h(!e.target.value)},value:a})}),Object(c.jsx)("span",{children:Object(c.jsxs)("button",{className:"login-button",onClick:function(){f(!0),function(e){var t=e.username;return fetch("/session",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({username:t})}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}({username:a}).then((function(e){f(!1),t({username:e}),E.push("/")})).catch((function(e){N(u[e.error]),f(!1)}))},disabled:b||m,children:[" ",m?"...":"LOGIN"," "]})}),v&&Object(c.jsxs)("div",{className:"status",children:[" ",v," "]})]})},h=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];Object(s.useEffect)((function(){fetch("/deals",{method:"GET"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){r(e)}))}),[]);var a="";return a=null===n||void 0===n?"":Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"title",children:" BEST DEALS FOR YOU "}),Object(c.jsx)("ul",{className:"deals-list",children:n.map((function(e){return Object(c.jsx)("div",{className:"individual-deal",children:Object(c.jsxs)("li",{className:"item","data-index":e.id,children:[Object(c.jsx)("img",{className:"product-image",src:e.image,alt:"Product"}),Object(c.jsxs)(l.b,{to:"/viewDetails/".concat(e.id),children:[" ",e.itemName," "]},e.id),Object(c.jsx)("br",{}),e.price," ",Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"exp-date",children:[" Expires on ",e.expirationDate," "]})]},e.id)})}))})]}),Object(c.jsx)("div",{className:"deals",children:a})},O=function(e){var t=e.username,n=Object(s.useState)(""),r=Object(o.a)(n,2),a=r[0],i=r[1],j=Object(s.useState)(""),l=Object(o.a)(j,2),b=l[0],h=l[1],O=Object(s.useState)(""),x=Object(o.a)(O,2),m=x[0],f=x[1],g=Object(s.useState)(""),p=Object(o.a)(g,2),v=p[0],N=p[1],E=Object(s.useState)(""),P=Object(o.a)(E,2),D=P[0],A=P[1],S=Object(s.useState)("kitchen"),k=Object(o.a)(S,2),T=k[0],L=k[1],w=Object(s.useState)(""),C=Object(o.a)(w,2),I=(C[0],C[1]),y=Object(s.useState)(""),R=Object(o.a)(y,2),U=R[0],Y=R[1],G=Object(d.f)(),F=new Date("2021-12-24"),M=new Date("2020-12-13");var H;return H=void 0===t?Object(c.jsx)("h3",{children:" You need to login to add products to PINK FRIDAY "}):Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"ADD A NEW DEAL "})}),Object(c.jsxs)("div",{className:"new-deal",children:[Object(c.jsx)("label",{children:" Product name "}),Object(c.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},value:a})," ",Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" Website link "}),Object(c.jsxs)("span",{className:"link-format",children:[Object(c.jsx)("textarea",{onChange:function(e){t=e.target.value,new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)?(Y(""),h(e.target.value)):(Y("Please enter a valid URL"),h(""));var t},value:b,rows:"3",cols:"40"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tip",children:" You can only PASTE a link into this field"})]}),Object(c.jsx)("label",{children:" Price "}),Object(c.jsx)("input",{type:"number",min:"5",max:"5000",onChange:function(e){f(e.target.value)},value:m})," ",Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" Description "}),Object(c.jsx)("textarea",{onChange:function(e){N(e.target.value)},value:v,rows:"5",cols:"40"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" Expiration Date "}),Object(c.jsx)("input",{type:"date",onChange:function(e){var t=e.target.value;(t=new Date(t))>F?(Y("The date you are picking is not in the permissable range"),A("")):t<M?(Y("Please select a valid date"),A("")):(Y(""),A(e.target.value))},min:"12-13-2020",max:"12-24-2021",value:D})," ",Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" Category "}),Object(c.jsxs)("select",{className:"category",name:"category",id:"category",onChange:function(e){L(e.target.value)},value:T,children:[Object(c.jsx)("option",{value:"Kitchen",children:"Kitchen"}),Object(c.jsx)("option",{value:"Decor",children:"Decor"}),Object(c.jsx)("option",{value:"Apparel",children:"Apparel"}),Object(c.jsx)("option",{value:"Gadgets",children:"Gadgets"}),Object(c.jsx)("option",{value:"Accessories",children:"Accessories"}),Object(c.jsx)("option",{value:"Accessories",children:"Accessories"}),Object(c.jsx)("option",{value:"Fragrances",children:"Fragrances"}),Object(c.jsx)("option",{value:"Other",children:"Other"})]})," ",Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){var e={username:t,itemName:a,websiteLink:b,image:"https://elegantfare.com/wp-content/themes/elegantfare/images/default.jpg",price:m,description:v,expirationDate:D,category:T};i(""),f(""),h(""),N(""),A(""),L(""),function(e){return fetch("/session/deal",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify(e)}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}(e).then((function(e){I(e),function(e){G.push("viewDetails/".concat(e.dealID))}(e)})).catch((function(e){Y(u[e.error])}))},children:" SUBMIT "}),U&&Object(c.jsxs)("div",{className:"status",children:[" ",U," "]})]})]}),Object(c.jsx)("div",{children:H})},x=function(e){var t=e.match.params.id,n=Object(s.useState)([]),r=Object(o.a)(n,2),a=r[0],i=r[1],j=Object(s.useState)(""),l=Object(o.a)(j,2),d=l[0],b=l[1];if(Object(s.useEffect)((function(){(function(e){var t=e.id;return fetch("/session/".concat(t),{method:"GET"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))})({id:t}).then((function(e){i(e)})).catch((function(e){b(u[e.error])}))}),[t]),null!=a)return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"details-title",children:Object(c.jsx)("h1",{children:" DETAILS "})}),Object(c.jsxs)("div",{className:"deal-details",children:[d&&Object(c.jsxs)("div",{className:"status",children:[" ",d," "]}),Object(c.jsx)("div",{className:"detail-image",children:Object(c.jsx)("img",{className:"product-image",src:a.image,alt:"Product"})}),Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)("label",{children:" PRODUCT NAME "}),Object(c.jsxs)("span",{children:[" ",a.itemName," "]})," ",Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" WHERE TO BUY "}),Object(c.jsxs)("span",{children:[" ",Object(c.jsx)("a",{href:a.websiteLink,rel:"noopener noreferrer",target:"_blank",children:" CLICK HERE"})," "]})," ",Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" PRICE :"}),Object(c.jsxs)("span",{children:[" ",a.price," "]})," ",Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" ABOUT THE PRODUCT  "}),Object(c.jsxs)("span",{children:[" ",a.description," "]})," ",Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" OFFER EXPIRES ON "}),Object(c.jsxs)("span",{children:[" ",a.expirationDate]})," ",Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" CATEGORY"}),Object(c.jsxs)("span",{children:[" ",a.category]})]})]})]})},m=function(e){var t=e.username,n=Object(s.useState)([]),r=Object(o.a)(n,2),a=r[0],i=r[1],j=Object(s.useState)(""),d=Object(o.a)(j,2),b=d[0],h=d[1],O="";Object(s.useEffect)((function(){(function(e){var t=e.username;return fetch("/account/".concat(t),{method:"GET"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))})({username:t}).then((function(e){i(e)})).catch((function(e){h(u[e.error])}))}),[t]);var x=function(e){(function(e){var t=e.id;return fetch("/account/".concat(t),{method:"DELETE"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))})({id:e.target.dataset.index}).then((function(e){i(e)})).catch((function(e){h(u[e.error])}))};return O=void 0===t?"":a&&!a.length?Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:[" USERNAME : ",t]}),Object(c.jsx)("h3",{className:"account-message",children:" YOUR ACCOUNT HAS NO DEALS, PLEASE ADD NEW DEALS TO MANAGE THEM  "})]}):Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:[" USERNAME : ",t]}),Object(c.jsx)("h4",{children:" DEALS ADDED BY YOU "}),Object(c.jsx)("ul",{className:"added-deals",children:a.map((function(e){return Object(c.jsxs)("li",{className:"item",children:[Object(c.jsxs)(l.b,{to:"/viewDetails/".concat(e.id),children:[" ",e.itemName," "]},e.id),Object(c.jsx)("button",{onClick:x,"data-index":e.id,children:" DELETE "})]},e.id)}))})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"account-title",children:" YOUR ACCOUNT "}),Object(c.jsxs)("div",{className:"account",children:[b&&Object(c.jsxs)("div",{className:"status",children:[" ",b," "]}),O]})]})};var f=function(){var e=Object(s.useState)({isLoggedIn:!1,isPending:!0}),t=Object(o.a)(e,2),n=t[0],r=t[1];Object(s.useEffect)((function(){fetch("/session",{method:"GET"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){r({isLoggedIn:!0,isPending:!1,username:e})})).catch((function(){r({isLoggedIn:!1,isPending:!1})}))}),[]);var a,i=function(e){var t=e.username;r({isLoggedIn:!0,isPending:!1,username:t})};if(n.isPending)return Object(c.jsx)("div",{className:"app",children:"Loading..."});a=n.isLoggedIn?Object(c.jsxs)("nav",{children:[Object(c.jsxs)("div",{className:"user-information",children:[Object(c.jsx)("img",{className:"user-image",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz3VL6dIejtydIjARhITdoJFO2IdzY_gUepQ&usqp=CAU",alt:"user avatar"}),Object(c.jsxs)("h2",{className:"user-greeting",children:[" Hello ",n.username," "]})]}),Object(c.jsxs)("ul",{className:"navigation-post-login",children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",className:"link",children:" HOME "})},1),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/addItem",className:"link",children:" ADD PRODUCT "})},2),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/myAccount",className:"link",children:" MY ACCOUNT"})},3),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",className:"link",onClick:function(){r(Object(j.a)(Object(j.a)({},n),{},{isPending:!0})),fetch("/session",{method:"DELETE"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(){r({isLoggedIn:!1,isPending:!1})})).catch((function(){r(Object(j.a)(Object(j.a)({},n),{},{isPending:!1}))}))},children:"LOGOUT"})},4)]})]}):Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"navigation-pre-login",children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",className:"link",children:" HOME "})},1),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/login",className:"link",children:" LOGIN "})},2)]})});var u=Object(c.jsxs)("div",{children:[a,Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(d.a,{exact:!0,path:"/login",render:function(){return Object(c.jsx)(b,{onLogin:i})}}),Object(c.jsx)(d.a,{exact:!0,path:"/addItem",render:function(){return Object(c.jsx)(O,{username:n.username})}}),Object(c.jsx)(d.a,{exact:!0,path:"/myAccount",render:function(){return Object(c.jsx)(m,{username:n.username})}}),Object(c.jsx)(d.a,{exact:!0,path:"/viewDetails/:id",component:x}),Object(c.jsx)(d.a,{exact:!0,path:":link"})]})]});return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("h1",{className:"website-title",children:" PINK FRIDAY "}),u]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(f,{})})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.59873085.chunk.js.map