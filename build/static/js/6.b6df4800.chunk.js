/*! For license information please see 6.b6df4800.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[6],{704:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(706),a=n(705),c="http://principios.no-ip.org:9090/erp_web/datasnap/rest/TWSEmpregados",o=function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n,a){var o,u,s,i,p,l,b,f=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=f.length>3&&void 0!==f[3]?f[3]:null,t=t.toLowerCase(),u="".concat(c).concat(n),s=null,e.t0=t,e.next="get"===e.t0?7:"post"===e.t0||"put"===e.t0||"delete"===e.t0?10:12;break;case 7:return i=new URLSearchParams(a).toString(),u+="?".concat(i),e.abrupt("break",12);case 10:return s=JSON.stringify(a),e.abrupt("break",12);case 12:return p={"Content-Type":"application/json"},o&&(p.Authorization="Bearer ".concat(o)),e.next=16,fetch(u,{method:t,headers:p,body:s});case 16:return l=e.sent,e.next=19,l.json();case 19:return b=e.sent,e.abrupt("return",b);case 21:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();function u(){return{getToken:function(){return localStorage.getItem("token")},validateToken:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("post","/users_validate",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),login:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("post","/users_login",{email:t,password:n});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),logout:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,o("post","/auth/logout",{},a);case 3:return c=e.sent,localStorage.removeItem("token"),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getTrabalhadores:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/trabalhadores/3",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateTrabalhadores:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,o("put","/trabalhadores/3/".concat(t),n,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getLotacoes:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/lotacoes/3",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getFin_Pagar_Receber:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/fin_pagar_receber/4",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getFin_Plano:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/fin_plano/4",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getWall:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/walls",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateWall:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,o("put","/wall/".concat(t),n,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),addWall:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("post","/walls",t,n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),removeWall:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("delete","/wall/".concat(t),{},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getDocuments:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("get","/docs",{},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addDocument:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a,o,u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),(a=new FormData).append("title",t.title),t.file&&a.append("file",t.file),e.next=6,fetch("".concat(c,"/docs"),{method:"POST",headers:{Authorization:"Bearer ".concat(n)},body:a});case 6:return o=e.sent,e.next=9,o.json();case 9:return u=e.sent,e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateDocument:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,o,u,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),(o=new FormData).append("title",n.title),n.file&&o.append("file",n.file),e.next=6,fetch("".concat(c,"/doc/").concat(t),{method:"POST",headers:{Authorization:"Bearer ".concat(a)},body:o});case 6:return u=e.sent,e.next=9,u.json();case 9:return s=e.sent,e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),removeDocument:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("delete","/doc/".concat(t),{},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getReservations:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/reservations",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getUnits:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/units",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAreas:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/areas",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addReservation:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("post","/reservations",t,n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateReservation:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,o("put","/reservation/".concat(t),n,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),removeReservation:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("delete","/reservation/".concat(t),{},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getWarnings:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/warnings",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateWarning:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("put","/warning/".concat(t),{},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getFoundAndLost:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/foundandlost",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateFoundAndLost:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("put","/foundandlost/".concat(t),{},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUsers:function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o("get","/users",{},t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),removeUser:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("delete","/user/".concat(t),{},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addUser:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("post","/users",t,n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUser:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,o("put","/user/".concat(t),n,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),removeArea:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("delete","/area/".concat(t),{},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addArea:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a,o,u,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in n=localStorage.getItem("token"),a=new FormData,t)a.append(o,t[o]);return e.next=5,fetch("".concat(c,"/areas"),{method:"POST",headers:{Authorization:"Bearer ".concat(n)},body:a});case 5:return u=e.sent,e.next=8,u.json();case 8:return s=e.sent,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateArea:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,o,u,s,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(u in a=localStorage.getItem("token"),o=new FormData,n)o.append(u,n[u]);return e.next=5,fetch("".concat(c,"/area/").concat(t),{method:"POST",headers:{Authorization:"Bearer ".concat(a)},body:o});case 5:return s=e.sent,e.next=8,s.json();case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),updateAreaAllowed:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("put","/area/".concat(t,"/allowed"),{},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),searchUser:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("get","/users/search",{q:t},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addUnit:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("post","/units",t,n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUnit:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,o("put","/unit/".concat(t),n,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),removeUnit:function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,o("delete","/unit/".concat(t),{},n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}},769:function(e,t,n){"use strict";n.r(t);var r=n(707),a=n(1),c=n.n(a),o=n(23),u=n(56),s=n(702),i=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:c.a.lazy((function(){return Promise.all([n.e(5),n.e(11)]).then(n.bind(null,771))}))},{path:"/logout",name:"Logout",component:c.a.lazy((function(){return n.e(16).then(n.bind(null,756))}))},{path:"/trabalhadores",name:"Trabalhadores",component:c.a.lazy((function(){return n.e(19).then(n.bind(null,757))}))},{path:"/lotacoes",name:"Lotacoes",component:c.a.lazy((function(){return n.e(17).then(n.bind(null,758))}))},{path:"/wall",name:"Wall",component:c.a.lazy((function(){return n.e(22).then(n.bind(null,759))}))},{path:"/documents",name:"Documents",component:c.a.lazy((function(){return n.e(12).then(n.bind(null,760))}))},{path:"/reservations",name:"Reservations",component:c.a.lazy((function(){return n.e(18).then(n.bind(null,761))}))},{path:"/warnings",name:"Warnings",component:c.a.lazy((function(){return Promise.all([n.e(1),n.e(23)]).then(n.bind(null,762))}))},{path:"/foundandlost",name:"FoundAndLost",component:c.a.lazy((function(){return Promise.all([n.e(1),n.e(15)]).then(n.bind(null,763))}))},{path:"/users",name:"Users",component:c.a.lazy((function(){return n.e(21).then(n.bind(null,764))}))},{path:"/commonareas",name:"CommonAreas",component:c.a.lazy((function(){return n.e(10).then(n.bind(null,770))}))},{path:"/units",name:"Units",component:c.a.lazy((function(){return n.e(20).then(n.bind(null,765))}))},{path:"/fin_pagar_receber",name:"Fin_Pagar_Receber",component:c.a.lazy((function(){return n.e(13).then(n.bind(null,766))}))},{path:"/fin_plano",name:"Fin_Plano",component:c.a.lazy((function(){return n.e(14).then(n.bind(null,767))}))}],p=n(32),l=Object(p.jsx)("div",{className:"pt-3 text-center",children:Object(p.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),b=function(){return Object(p.jsx)("main",{className:"c-main",children:Object(p.jsx)(s.n,{fluid:!0,children:Object(p.jsx)(a.Suspense,{fallback:l,children:Object(p.jsxs)(o.d,{children:[i.map((function(e,t){return e.component&&Object(p.jsx)(o.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(p.jsx)(s.u,{children:Object(p.jsx)(e.component,Object(u.a)({},t))})}},t)})),Object(p.jsx)(o.a,{from:"/",to:"/dashboard"})]})})})})},f=c.a.memo(b),d=function(){return Object(p.jsxs)(s.v,{fixed:!1,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer",children:"CoreUI"}),Object(p.jsx)("span",{className:"ml-1",children:"\xa9 2020 creativeLabs."})]}),Object(p.jsxs)("div",{className:"mfs-auto",children:[Object(p.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(p.jsx)("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer",children:"CoreUI for React"})]})]})},m=c.a.memo(d),j=[{_tag:"CSidebarNavItem",name:"Painel Geral",to:"/dashboard",icon:"cil-speedometer"},{_tag:"CSidebarNavTitle",_children:["Gest\xe3o de RH"]},{_tag:"CSidebarNavItem",name:"Trabalhadores",to:"/trabalhadores",icon:"cil-people"},{_tag:"CSidebarNavItem",name:"Lota\xe7\xf5es",to:"/lotacoes",icon:"cil-people"},{_tag:"CSidebarNavItem",name:"Cargos",to:"/cargos",icon:"cil-warning"},{_tag:"CSidebarNavItem",name:"Hor\xe1rios",to:"/horarios",icon:"cil-file"},{_tag:"CSidebarNavItem",name:"Jornadas",to:"/jornadas",icon:"cil-calendar"},{_tag:"CSidebarNavItem",name:"Itiner\xe1rios",to:"/itinerarios",icon:"cil-bell"},{_tag:"CSidebarNavItem",name:"Centros de Custos",to:"/centro_custos",icon:"cil-lock-locked"},{_tag:"CSidebarNavTitle",_children:["Gest\xe3o Financeira"]},{_tag:"CSidebarNavItem",name:"Contas a Pagar e Receber",to:"/fin_pagar_receber",icon:"cil-money"},{_tag:"CSidebarNavItem",name:"Plano de Contas",to:"/fin_plano",icon:"cil-money"},{_tag:"CSidebarNavTitle",_children:["Dados"]},{_tag:"CSidebarNavItem",name:"Usu\xe1rios",to:"/users",icon:"cil-people"},{_tag:"CSidebarNavItem",name:"Unidades",to:"/units",icon:"cil-home"},{_tag:"CSidebarNavItem",name:"\xc1reas Comuns",to:"/commonareas",icon:"cil-paperclip"},{_tag:"CSidebarNavTitle",_children:["Configura\xe7\xf5es"]},{_tag:"CSidebarNavItem",name:"Meu Perfil",to:"/profile",icon:"cil-user"},{_tag:"CSidebarNavItem",name:"Sair",to:"/logout",icon:"cil-drop"}],h=function(){return Object(p.jsx)(s.M,{children:Object(p.jsxs)(s.N,{children:[Object(p.jsx)("img",{src:"/homelogo_rh3.png",alt:"logo",className:"mt-2 mb-3 ml-auto mr-auto",width:"70%"}),Object(p.jsx)(s.o,{items:j,components:{CSidebarNavItem:s.O,CSidebarNavTitle:s.P}})]})})},v=c.a.memo(h),g=n(704);t.default=function(){Object(g.a)(),Object(o.g)();var e=Object(a.useState)(!0),t=Object(r.a)(e,2);t[0],t[1];return Object(p.jsx)("div",{className:"c-app c-default-layout",children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsxs)("div",{className:"c-wrapper",children:[Object(p.jsx)("div",{className:"c-body",children:Object(p.jsx)(f,{})}),Object(p.jsx)(m,{})]})]})})}}}]);
//# sourceMappingURL=6.b6df4800.chunk.js.map