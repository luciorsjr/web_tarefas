(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[7],{704:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(706),a=r(705),c="http://principios.no-ip.org:9090/erp_web/datasnap/rest/TWSEmpregados",u=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r,a){var u,o,s,i,p,f,l,b=arguments;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=b.length>3&&void 0!==b[3]?b[3]:null,t=t.toLowerCase(),o="".concat(c).concat(r),s=null,e.t0=t,e.next="get"===e.t0?7:"post"===e.t0||"put"===e.t0||"delete"===e.t0?10:12;break;case 7:return i=new URLSearchParams(a).toString(),o+="?".concat(i),e.abrupt("break",12);case 10:return s=JSON.stringify(a),e.abrupt("break",12);case 12:return p={"Content-Type":"application/json"},u&&(p.Authorization="Bearer ".concat(u)),e.next=16,fetch(o,{method:t,headers:p,body:s});case 16:return f=e.sent,e.next=19,f.json();case 19:return l=e.sent,e.abrupt("return",l);case 21:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();function o(){return{getToken:function(){return localStorage.getItem("token")},validateToken:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("post","/users_validate",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),login:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("post","/users_login",{email:t,password:r});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),logout:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,u("post","/auth/logout",{},a);case 3:return c=e.sent,localStorage.removeItem("token"),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),getTrabalhadores:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/trabalhadores/3",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateTrabalhadores:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,u("put","/trabalhadores/3/".concat(t),r,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),getLotacoes:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/lotacoes/3",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getFin_Pagar_Receber:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/fin_pagar_receber/4",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getFin_Plano:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/fin_plano/4",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getWall:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/walls",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateWall:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,u("put","/wall/".concat(t),r,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),addWall:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("post","/walls",t,r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),removeWall:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("delete","/wall/".concat(t),{},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getDocuments:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("get","/docs",{},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addDocument:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a,u,o;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),(a=new FormData).append("title",t.title),t.file&&a.append("file",t.file),e.next=6,fetch("".concat(c,"/docs"),{method:"POST",headers:{Authorization:"Bearer ".concat(r)},body:a});case 6:return u=e.sent,e.next=9,u.json();case 9:return o=e.sent,e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateDocument:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a,u,o,s;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),(u=new FormData).append("title",r.title),r.file&&u.append("file",r.file),e.next=6,fetch("".concat(c,"/doc/").concat(t),{method:"POST",headers:{Authorization:"Bearer ".concat(a)},body:u});case 6:return o=e.sent,e.next=9,o.json();case 9:return s=e.sent,e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),removeDocument:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("delete","/doc/".concat(t),{},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getReservations:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/reservations",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getUnits:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/units",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAreas:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/areas",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addReservation:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("post","/reservations",t,r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateReservation:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,u("put","/reservation/".concat(t),r,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),removeReservation:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("delete","/reservation/".concat(t),{},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getWarnings:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/warnings",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateWarning:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("put","/warning/".concat(t),{},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getFoundAndLost:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/foundandlost",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateFoundAndLost:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("put","/foundandlost/".concat(t),{},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUsers:function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,u("get","/users",{},t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),removeUser:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("delete","/user/".concat(t),{},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addUser:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("post","/users",t,r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUser:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,u("put","/user/".concat(t),r,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),removeArea:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("delete","/area/".concat(t),{},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addArea:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a,u,o,s;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(u in r=localStorage.getItem("token"),a=new FormData,t)a.append(u,t[u]);return e.next=5,fetch("".concat(c,"/areas"),{method:"POST",headers:{Authorization:"Bearer ".concat(r)},body:a});case 5:return o=e.sent,e.next=8,o.json();case 8:return s=e.sent,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateArea:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a,u,o,s,i;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in a=localStorage.getItem("token"),u=new FormData,r)u.append(o,r[o]);return e.next=5,fetch("".concat(c,"/area/").concat(t),{method:"POST",headers:{Authorization:"Bearer ".concat(a)},body:u});case 5:return s=e.sent,e.next=8,s.json();case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),updateAreaAllowed:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("put","/area/".concat(t,"/allowed"),{},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),searchUser:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("get","/users/search",{q:t},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addUnit:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("post","/units",t,r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUnit:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,u("put","/unit/".concat(t),r,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),removeUnit:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,u("delete","/unit/".concat(t),{},r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}},755:function(e,t,r){"use strict";r.r(t);var n=r(706),a=r(705),c=r(707),u=r(1),o=r(23),s=r(702),i=r(703),p=r(704),f=r(32);t.default=function(){var e=Object(p.a)(),t=Object(o.g)(),r=Object(u.useState)(""),l=Object(c.a)(r,2),b=l[0],j=l[1],O=Object(u.useState)(""),d=Object(c.a)(O,2),v=d[0],h=d[1],g=Object(u.useState)(""),m=Object(c.a)(g,2),x=m[0],w=m[1],k=Object(u.useState)(!1),y=Object(c.a)(k,2),S=y[0],I=y[1],A=function(){var r=Object(a.a)(Object(n.a)().mark((function r(){var a;return Object(n.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!b||!v){r.next=9;break}return I(!0),r.next=4,e.login(b,v);case 4:a=r.sent,I(!1),""===a.error?(localStorage.setItem("token",a.token),t.push("/")):w(a.error),r.next=10;break;case 9:w("Preencha os campos!");case 10:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(f.jsx)(s.n,{children:Object(f.jsx)(s.K,{className:"justify-content-center",children:Object(f.jsx)(s.m,{md:"5",children:Object(f.jsx)(s.k,{children:Object(f.jsx)(s.h,{className:"p-4",children:Object(f.jsx)(s.i,{children:Object(f.jsxs)(s.w,{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)("p",{className:"text-muted",children:"Digite seus dados de acesso"}),""!==x&&Object(f.jsx)(s.a,{color:"danger",children:x}),Object(f.jsxs)(s.A,{className:"mb-3",children:[Object(f.jsx)(s.B,{children:Object(f.jsx)(s.C,{children:Object(f.jsx)(i.a,{name:"cil-user"})})}),Object(f.jsx)(s.y,{type:"text",placeholder:"E-mail",value:b,onChange:function(e){return j(e.target.value)},disabled:S})]}),Object(f.jsxs)(s.A,{className:"mb-4",children:[Object(f.jsx)(s.B,{children:Object(f.jsx)(s.C,{children:Object(f.jsx)(i.a,{name:"cil-lock-locked"})})}),Object(f.jsx)(s.y,{type:"password",placeholder:"Senha",value:v,onChange:function(e){return h(e.target.value)},disabled:S})]}),Object(f.jsx)(s.K,{children:Object(f.jsx)(s.m,{xs:"6",children:Object(f.jsx)(s.e,{color:"primary",className:"px-4",onClick:A,disabled:S,children:S?"Carregando":"Entrar"})})})]})})})})})})})})}}}]);
//# sourceMappingURL=7.9e26b643.chunk.js.map