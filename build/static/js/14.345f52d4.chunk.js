(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{767:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var c=a(706),r=a(705),n=a(707),i=a(1),o=a(702),s=a(703),l=a(704),d=a(32);function j(){var e=Object(l.a)(),t=Object(i.useState)(!0),a=Object(n.a)(t,2),j=a[0],b=a[1],u=Object(i.useState)([]),O=Object(n.a)(u,2),x=O[0],h=O[1],p=Object(i.useState)(!1),f=Object(n.a)(p,2),m=f[0],y=f[1],k=Object(i.useState)(!1),v=Object(n.a)(k,2),C=v[0],_=v[1],w=Object(i.useState)(""),g=Object(n.a)(w,2),S=g[0],z=g[1],D=Object(i.useState)(""),F=Object(n.a)(D,2),I=F[0],P=F[1],A=Object(i.useState)(""),N=Object(n.a)(A,2),T=N[0],W=N[1],E=Object(i.useState)(""),J=Object(n.a)(E,2),R=J[0],B=J[1],G=Object(i.useState)(""),H=Object(n.a)(G,2),K=H[0],V=H[1],q=Object(i.useState)(""),L=Object(n.a)(q,2),M=L[0],Q=L[1],U=Object(i.useState)(""),X=Object(n.a)(U,2),Y=X[0],Z=X[1],$=Object(i.useState)(""),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],ce=Object(i.useState)(""),re=Object(n.a)(ce,2),ne=re[0],ie=re[1];Object(i.useEffect)((function(){oe()}),[]);var oe=function(){var t=Object(r.a)(Object(c.a)().mark((function t(){var a;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.next=3,e.getFin_Plano();case 3:a=t.sent,b(!1),""===a.error?h(a.list):h(a.error);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),se=function(){y(!1)},le=function(){var t=Object(r.a)(Object(c.a)().mark((function t(a){var r;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Confirma a exclus\xe3o?")){t.next=5;break}return t.next=3,e.removeWall(a);case 3:""===(r=t.sent).error?oe():alert(r.error);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),de=function(){var t=Object(r.a)(Object(c.a)().mark((function t(){var a,r;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!S||!T){t.next=16;break}if(_(!0),r={title:S,conta_id:I,descricao:T,tipo:R,natureza:K,conta_deb:M,conta_cred:Y,contabiliza:te},""!==ne){t.next=9;break}return t.next=6,e.addWall(r);case 6:a=t.sent,t.next=12;break;case 9:return t.next=11,e.updateWall(ne,r);case 11:a=t.sent;case 12:_(!1),""===a.error?(y(!1),oe()):alert(a.error),t.next=17;break;case 16:alert("Preencha os campos!");case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.K,{children:Object(d.jsxs)(o.m,{children:[Object(d.jsx)("h2",{children:"Plano de Contas"}),Object(d.jsxs)(o.h,{children:[Object(d.jsx)(o.l,{children:Object(d.jsxs)(o.e,{color:"primary",onClick:function(){ie(""),z(""),P(""),W(""),B(""),V(""),Q(""),Z(""),ae(""),y(!0)},children:[Object(d.jsx)(s.a,{name:"cil-check"}),"Inclus\xe3o"]})}),Object(d.jsx)(o.i,{children:Object(d.jsx)(o.p,{items:x,fields:[{label:"Conta_id",key:"id",_style:{width:"10px"}},{label:"Descri\xe7\xe3o",key:"descricao",_style:{width:"10px"}},{label:"Tipo",key:"tipo",_style:{width:"10px"}},{label:"Natureza",key:"natureza",_style:{width:"80px"}},{label:"Conta Deb.",key:"conta_deb",_style:{width:"80px"}},{label:"Conta Cred.",key:"pessoa_cred",_style:{width:"80px"}},{label:"Contabiliza",key:"contabiliza",_style:{width:"80px"}},{label:"A\xe7\xf5es",key:"actions",_style:{width:"1px"}}],loading:j,noItemsViewSlot:" ",hover:!0,striped:!0,bordered:!0,border:!0,clickableRows:!0,captionSlot:5,pagination:!0,itemsPerPage:10,scopedSlots:{actions:function(e){return Object(d.jsx)("td",{children:Object(d.jsxs)(o.f,{children:[Object(d.jsx)(o.e,{color:"info",onClick:function(){return function(e){var t=x.findIndex((function(t){return t.id===e}));ie(x[t].id),z(x[t].title),P(x[t].conta_id),W(x[t].data_pagto),B(x[t].tipoField),W(x[t].descricao_id),Q(x[t].conta_deb),Z(x[t].conta_cred),y(!0)}(e.id)},children:"Alterar"}),Object(d.jsx)(o.e,{color:"danger",onClick:function(){return le(e.id)},children:"Excluir"})]})})}}})})]})]})}),Object(d.jsxs)(o.F,{show:m,onClose:se,children:[Object(d.jsxs)(o.I,{closeButton:!0,children:[""===ne?"Novo":"Alterar"," - Plano de Contas"]}),Object(d.jsxs)(o.G,{children:[Object(d.jsxs)(o.x,{children:[Object(d.jsx)(o.D,{htmlFor:"modal-title",children:"Conta"}),Object(d.jsx)(o.y,{type:"text",id:"modal-conta_id",placeholder:"Digite o c\xf3digo da Conta",value:I,onChange:function(e){return P(e.target.value)},disabled:C})]}),Object(d.jsxs)(o.x,{children:[Object(d.jsx)(o.D,{htmlFor:"modal-descricao_id",children:"Descri\xe7\xe3o"}),Object(d.jsx)(o.y,{type:"text",id:"modal-descricao_id",placeholder:"Informe a Descri\xe7\xe3o da Conta",value:T,onChange:function(e){return W(e.target.value)},disabled:C})]}),Object(d.jsxs)(o.x,{children:[Object(d.jsx)(o.D,{htmlFor:"modal-tipo",children:"Tipo"}),Object(d.jsx)(o.R,{id:"modal-tipo",placeholder:"Informe o Tipo de Conta",value:R,onChange:function(e){return B(e.target.value)},disabled:C})]}),Object(d.jsxs)(o.x,{children:[Object(d.jsx)(o.D,{htmlFor:"modal-natureza",children:"Natureza"}),Object(d.jsx)(o.y,{type:"text",id:"modal-natureza",value:K,onChange:function(e){return V(e.target.value)},disabled:C,width:"1px"})]})]}),Object(d.jsxs)(o.H,{children:[Object(d.jsx)(o.e,{color:"primary",onClick:de,disabled:C,children:C?"Carregando...":"Salvar"}),Object(d.jsx)(o.e,{color:"secondary",onClick:se,disabled:C,children:C?"Carregando...":"Cancelar"})]})]})]})}}}]);
//# sourceMappingURL=14.345f52d4.chunk.js.map