(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{757:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(706),c=a(705),n=a(707),i=a(1),o=a(702),s=a(703),l=a(704),d=a(32);function u(){var e,t=Object(l.a)(),a=Object(i.useState)(!0),u=Object(n.a)(a,2),j=u[0],b=u[1],h=Object(i.useState)([]),x=Object(n.a)(h,2),O=x[0],m=x[1],p=Object(i.useState)(!1),f=Object(n.a)(p,2),y=f[0],v=f[1],k=Object(i.useState)(!1),g=Object(n.a)(k,2),w=g[0],C=g[1],S=Object(i.useState)(""),D=Object(n.a)(S,2),F=D[0],_=D[1],T=Object(i.useState)(""),A=Object(n.a)(T,2),P=A[0],I=A[1],M=Object(i.useState)(""),N=Object(n.a)(M,2),R=N[0],W=N[1],B=Object(i.useState)(""),E=Object(n.a)(B,2),J=E[0],G=E[1],H=Object(i.useState)(""),K=Object(n.a)(H,2),L=K[0],V=K[1],q=Object(i.useState)(""),z=Object(n.a)(q,2),Q=z[0],U=z[1],X=[{label:"Matr\xedcula",key:"matricula",_style:{width:"80px"}},{label:"Nome",key:"nome",_style:{width:"300px"}},{label:"CPF",key:"cpf",_style:{width:"80px"}},{label:"Categoria",key:"categoria",_style:{width:"80px"}},{label:"Admiss\xe3o",key:"admissao_data",_style:{width:"80px"}},{label:"Demiss\xe3o",key:"demissao",_style:{width:"80px"}},{label:"Sal\xe1rio",key:(e="salario_fixo",e.toLocaleString("pt-BR",{minimumFractionDigits:2})),_style:{width:"80px"}},{label:"A\xe7\xf5es",key:"actions",_style:{width:"1px"}}];Object(i.useEffect)((function(){Y()}),[]);var Y=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,t.getTrabalhadores();case 3:a=e.sent,b(!1),""===a.error?m(a.list):m(a.error);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){v(!1)},$=function(){var e=Object(c.a)(Object(r.a)().mark((function e(a){var c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Confirma a exclus\xe3o?")){e.next=5;break}return e.next=3,t.removeWall(a);case 3:""===(c=e.sent).error?Y():alert(c.error);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!F||!R){e.next=16;break}if(C(!0),c={title:F,matricula:P,nome:R,cpf:J,admissao:L},""!==Q){e.next=9;break}return e.next=6,t.addWall(c);case 6:a=e.sent,e.next=12;break;case 9:return e.next=11,t.updateWall(Q,c);case 11:a=e.sent;case 12:C(!1),""===a.error?(v(!1),Y()):alert(a.error),e.next=17;break;case 16:alert("Preencha os campos!");case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.K,{children:Object(d.jsxs)(o.m,{children:[Object(d.jsx)("h2",{children:"Cadastro de Trabalhadores"}),Object(d.jsxs)(o.h,{children:[Object(d.jsx)(o.l,{children:Object(d.jsxs)(o.e,{color:"primary",onClick:function(){U(""),_(""),I(""),W(""),G(""),V(""),v(!0)},children:[Object(d.jsx)(s.a,{name:"cil-check"}),"Inclus\xe3o"]})}),Object(d.jsx)(o.i,{children:Object(d.jsx)(o.p,{items:O,fields:X,loading:j,noItemsViewSlot:" ",hover:!0,striped:!0,bordered:!0,border:!0,clickableRows:!0,captionSlot:5,pagination:!0,itemsPerPage:10,scopedSlots:{actions:function(e){return Object(d.jsx)("td",{children:Object(d.jsxs)(o.f,{children:[Object(d.jsx)(o.e,{color:"info",onClick:function(){return function(e){var t=O.findIndex((function(t){return t.id===e}));U(O[t].id),_(O[t].title),I(O[t].matricula),W(O[t].nome),G(O[t].CPFField),V(O[t].admissao),v(!0)}(e.id)},children:"Alterar"}),Object(d.jsx)(o.e,{color:"danger",onClick:function(){return $(e.id)},children:"Excluir"})]})})}}})})]})]})}),Object(d.jsxs)(o.F,{show:y,onClose:Z,children:[Object(d.jsxs)(o.I,{closeButton:!0,children:[""===Q?"Novo":"Alterar"," Trabalhador"]}),Object(d.jsxs)(o.G,{children:[Object(d.jsxs)(o.x,{children:[Object(d.jsx)(o.D,{htmlFor:"modal-title",children:"Titulo do Aviso"}),Object(d.jsx)(o.y,{type:"text",id:"modal-title",placeholder:"Digite um t\xedtulo para o aviso",value:F,onChange:function(e){return _(e.target.value)},disabled:w})]}),Object(d.jsxs)(o.x,{children:[Object(d.jsx)(o.D,{htmlFor:"modal-matricula",children:"Matr\xedcula"}),Object(d.jsx)(o.y,{type:"text",id:"modal-matricula",placeholder:"Digite a Matr\xedcula do Trabalhador",value:P,onChange:function(e){return I(e.target.value)},disabled:w})]}),Object(d.jsxs)(o.x,{children:[Object(d.jsx)(o.D,{htmlFor:"modal-nome",children:"Nome do Trabalhador"}),Object(d.jsx)(o.R,{id:"modal-nome",placeholder:"Digite o nome do Trabalhador",value:R,onChange:function(e){return W(e.target.value)},disabled:w})]}),Object(d.jsxs)(o.x,{children:[Object(d.jsx)(o.D,{htmlFor:"modal-admissao",children:"Data de Admiss\xe3o"}),Object(d.jsx)(o.y,{type:"text",id:"modal-admissao",value:L,onChange:function(e){return V(e.target.value)},disabled:w,width:"1px"})]})]}),Object(d.jsxs)(o.H,{children:[Object(d.jsx)(o.e,{color:"primary",onClick:ee,disabled:w,children:w?"Carregando...":"Salvar"}),Object(d.jsx)(o.e,{color:"secondary",onClick:Z,disabled:w,children:w?"Carregando...":"Cancelar"}),'backdrop="static"']})]})]})}}}]);
//# sourceMappingURL=19.dafce9ea.chunk.js.map