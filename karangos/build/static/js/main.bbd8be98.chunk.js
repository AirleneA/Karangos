(this.webpackJsonpkarangos=this.webpackJsonpkarangos||[]).push([[0],{175:function(e,a,t){},202:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(15),o=t.n(c),i=(t(175),t(68)),l=t(256),s=t(88),d=t.n(s),u=t(144),j=t.n(u),b=t(32),p=t(250),h=t(251),m=t.p+"static/media/karangos.637f9a06.png",f=t(7),x=t(61),O=t(135),g=t.n(O),v=t(145),C=t(53),y=t(56),k=t(4),N=Object(b.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},menuLink:{color:e.palette.text.primary,textDecoration:"none"}}}));function w(){var e=N(),a=n.a.useState(null),t=Object(f.a)(a,2),r=t[0],c=t[1],o=function(){c(null)};return Object(k.jsxs)("div",{children:[Object(k.jsx)(x.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},children:Object(k.jsx)(g.a,{})}),Object(k.jsxs)(v.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:o,children:[Object(k.jsx)(C.a,{onClick:o,children:Object(k.jsx)(y.b,{to:"/List",className:e.menuLink,children:"Listar karangos"})}),Object(k.jsx)(C.a,{onClick:o,children:Object(k.jsx)(y.b,{to:"/new",className:e.menuLink,children:" Cadastrar novo karango "})})]})]})}var S=Object(b.a)((function(e){return{root:{flexGrow:1},logo:{width:"300px"}}}));function A(){var e=S();return Object(k.jsx)("div",{className:e.root,children:Object(k.jsx)(p.a,{position:"static",children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)(w,{}),Object(k.jsx)("img",{src:m,className:e.logo,alt:"Karangos"})]})})})}var D=t(93),E=t(136),F=t.n(E),I=Object(b.a)((function(e){return{toolbar:{backgroundColor:e.palette.background.paper,minHeight:"42px",width:"100%",position:"fixed",bottom:0},text:{width:"100%"},link:{color:e.palette.secondary.light,textDecoration:"none","&:hover":{textDecoration:"underline"}}}}));function W(){var e=I();return Object(k.jsx)(h.a,{className:e.toolbar,children:Object(k.jsxs)(D.a,{className:e.text,variant:"caption",display:"block",align:"center",color:"textSecondary",children:["Produzido com ",Object(k.jsx)(F.a,{fontSize:"small"})," por ",Object(k.jsx)("a",{className:e.link,href:"airlene.antonelli@yahoo.com.br ",children:"Airlene Antonelli"})]})})}var L=t(260),R=t(17),z=t(41),M=t.n(z),P=t(70),B=t(59),T=t.n(B),q=t(107),H=t(112),_=t(139),G=t.n(_),K=t(138),V=t.n(K),J=t(62),Y=t(140),U=t.n(Y),Z=t(263),$=t(255),Q=t(253),X=t(254),ee=t(252),ae=t(137),te=t.n(ae),re=Object(b.a)((function(e){return{dialogContent:{display:"flex",justifyContent:"space-between"},warningIcon:{color:d.a[500],marginRight:e.spacing(2)}}}));function ne(e){var a=e.title,t=void 0===a?"Confirmar":a,r=e.isOpen,n=void 0!==r&&r,c=e.onClose,o=e.children,i=re(),l=function(e){c(e)};return Object(k.jsx)("div",{children:Object(k.jsxs)(Z.a,{open:n,onClose:function(){return l(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(k.jsx)(ee.a,{id:"alert-dialog-title",children:t}),Object(k.jsxs)(Q.a,{className:i.dialogContent,children:[Object(k.jsx)(te.a,{className:i.warningIcon,fontSize:"large"}),Object(k.jsx)(X.a,{id:"alert-dialog-description",children:o})]}),Object(k.jsxs)($.a,{children:[Object(k.jsx)(J.a,{onClick:function(){return l(!0)},color:"primary",children:"OK"}),Object(k.jsx)(J.a,{onClick:function(){return l(!1)},color:"primary",autoFocus:!0,children:"Cancelar"})]})]})})}var ce=t(264),oe=t(261),ie=t(141),le=Object(b.a)((function(e){return{table:{minWidth:650},dataGrid:{"& .MuiDataGrid-row button":{visibility:"hidden"},"& .MuiDataGrid-row:hover button":{visibility:"visible"}},toolbar:{justifyContent:"flex-end",paddingRight:0,margin:e.spacing(2,0)}}}));function se(){var e=le(),a=Object(r.useState)([]),t=Object(f.a)(a,2),n=t[0],c=t[1],o=Object(r.useState)(),i=Object(f.a)(o,2),l=i[0],s=i[1],d=Object(r.useState)(!1),u=Object(f.a)(d,2),j=u[0],b=u[1],p=Object(r.useState)(!1),m=Object(f.a)(p,2),O=m[0],g=m[1],v=Object(r.useState)("success"),C=Object(f.a)(v,2),y=C[0],N=C[1],w=Object(r.useState)("Exclus\xe3o realizada com sucesso."),S=Object(f.a)(w,2),A=S[0],D=S[1],E=Object(R.f)();function F(){return I.apply(this,arguments)}function I(){return(I=Object(P.a)(M.a.mark((function e(){var a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://api.faustocintra.com.br/karangos?by=marca,modelo");case 3:(a=e.sent).data.length>0&&c(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function W(){return(W=Object(P.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.delete("https://api.faustocintra.com.br/karangos/".concat(l));case 3:F(),N("success"),D("Exclus\xe3o efetuada com sucesso."),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),N("error"),D("ERRO: "+e.t0.message);case 12:g(!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function L(){g(!1)}Object(r.useEffect)((function(){F()}),[]);var z=[{field:"id",headerName:"C\xf3d.",align:"right",headerAlign:"right",flex:!0,sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"marca",headerName:"Marca",flex:!0},{field:"modelo",headerName:"Modelo",flex:!0},{field:"cor",headerName:"Cor",align:"center",headerAlign:"center",flex:!0},{field:"ano_fabricacao",headerName:"Ano",align:"center",headerAlign:"center",flex:!0,sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"importado",headerName:"Importado?",align:"center",headerAlign:"center",flex:!0,renderCell:function(e){return Object(k.jsx)(H.a,{checked:"1"===e.value,readOnly:!0})}},{field:"placa",headerName:"Placa",align:"center",headerAlign:"center",flex:!0},{field:"preco",headerName:"Pre\xe7o",align:"right",headerAlign:"right",flex:!0,valueFormatter:function(e){return Number(e.value).toLocaleString("pt-br",{style:"currency",currency:"BRL"})},sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"editar",headerName:"Editar",align:"center",headerAlign:"center",flex:!0,renderCell:function(e){return Object(k.jsx)(x.a,{"aria-label":"editar",onClick:function(){return E.push("/edit/".concat(e.id))},children:Object(k.jsx)(V.a,{})})}},{field:"excluir",headerName:"Excluir",align:"center",headerAlign:"center",flex:!0,renderCell:function(e){return Object(k.jsx)(x.a,{"aria-label":"excluir",onClick:function(){return a=e.id,s(a),void b(!0);var a},children:Object(k.jsx)(G.a,{color:"error"})})}}];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ne,{isOpen:j,onClose:function(e){b(!1),e&&function(){W.apply(this,arguments)}()},children:"Deseja realmente excluir este karango?"}),Object(k.jsx)(ce.a,{open:O,autoHideDuration:6e3,onClose:L,children:Object(k.jsx)(oe.a,{elevation:6,variant:"filled",onClose:L,severity:y,children:A})}),Object(k.jsx)("h1",{children:"Listagem de Karangos"}),Object(k.jsx)(h.a,{className:e.toolbar,children:Object(k.jsx)(J.a,{color:"secondary",variant:"contained",size:"large",startIcon:Object(k.jsx)(U.a,{}),onClick:function(){return E.push("/new")},children:"Novo Karango"})}),Object(k.jsx)(q.a,{elevation:4,children:Object(k.jsx)(ie.a,{className:e.dataGrid,rows:n,columns:z,pageSize:10,autoHeight:!0,disableSelectionOnClick:!0})})]})}var de=t(92),ue=t(113),je=t(76),be=t(207),pe=t(143),he=t.n(pe),me=t(259),fe=Object(b.a)((function(e){return{form:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",maxWidth:"80%",margin:"0 auto","& .MuiFormControl-root":{minWidth:"200px",maxWidth:"500px",margin:"0 24px 24px 0"}},toolbar:{display:"flex",width:"100%",justifyContent:"space-around",marginTop:"36px"}}}));function xe(){for(var e=fe(),a=[],t=(new Date).getFullYear();t>=1900;t--)a.push(t);var n=Object(r.useState)({id:null,marca:"",modelo:"",cor:"",ano_fabricacao:(new Date).getFullYear(),importado:"0",placa:"",preco:0}),c=Object(f.a)(n,2),o=c[0],i=c[1],l=Object(r.useState)(),s=Object(f.a)(l,2),d=(s[0],s[1]),u=Object(r.useState)(!1),j=Object(f.a)(u,2),b=j[0],p=j[1],m=Object(r.useState)({disabled:!1,label:"Enviar"}),x=Object(f.a)(m,2),O=x[0],g=x[1],v=Object(r.useState)({open:!1,severity:"success",message:""}),y=Object(f.a)(v,2),N=y[0],w=y[1],S=Object(r.useState)({marca:"",modelo:"",cor:"",placa:"",preco:""}),A=Object(f.a)(S,2),D=A[0],E=A[1],F=Object(r.useState)(!1),I=Object(f.a)(F,2),W=I[0],L=I[1],z=Object(r.useState)(!1),B=Object(f.a)(z,2),q=B[0],_=B[1],G=Object(r.useState)("Cadastrar novo karango"),K=Object(f.a)(G,2),V=K[0],Y=K[1],U=Object(R.f)(),Z=Object(R.g)();function $(){return($=Object(P.a)(M.a.mark((function e(a){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://api.faustocintra.com.br/karangos/".concat(a));case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w({open:!0,severity:"error",message:"N\xe3o foi poss\xedvel carregar os dados para edi\xe7\xe3o."});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Q(e,a){var t=Object(de.a)({},o);if(d(e.target.id),e.target.id&&(a=e.target.id),"importado"===a){var r=!b;t.importado=r?"1":"0",p(r)}else"placa"===a?t.placa=e.target.value.toUpperCase():t[a]=e.target.value;i(t),L(!0),X(t)}function X(e){var a=!0,t={marca:"",modelo:"",cor:"",placa:"",preco:""};return""===e.marca.trim()&&(t.marca="A marca deve ser preenchida",a=!1),""===e.modelo.trim()&&(t.modelo="O modelo deve ser preenchido",a=!1),""===e.cor.trim()&&(t.cor="A cor deve ser informada",a=!1),(""===e.placa.trim()||e.placa.includes("_"))&&(t.placa="A placa deve ser preenchida corretamente",a=!1),(isNaN(e.preco)||Number(e.preco)<=0)&&(t.preco="O pre\xe7o deve ser informado e maior que zero",a=!1),E(t),a}function ee(){return(ee=Object(P.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,g({disabled:!0,label:"Enviando..."}),!Z.id){e.next=7;break}return e.next=5,T.a.put("https://api.faustocintra.com.br/karangos/".concat(Z.id),o);case 5:e.next=9;break;case 7:return e.next=9,T.a.post("https://api.faustocintra.com.br/karangos",o);case 9:w({open:!0,severity:"success",message:"Dados salvos com sucesso!"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),w({open:!0,severity:"error",message:"ERRO: "+e.t0.message});case 15:g({disabled:!1,label:"Enviar"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function ae(){w(Object(de.a)(Object(de.a)({},N),{},{open:!1})),"success"===N.severity&&U.push("/list")}return Object(r.useEffect)((function(){Z.id&&(Y("Editar karango"),function(e){$.apply(this,arguments)}(Z.id))}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ne,{isOpen:q,onClose:function(e){_(!1),e&&U.push("/list")},children:"H\xe1 dados n\xe3o salvos. Deseja realmente voltar?"}),Object(k.jsx)(ce.a,{open:N.open,autoHideDuration:6e3,onClose:ae,children:Object(k.jsx)(oe.a,{elevation:6,variant:"filled",onClose:ae,severity:N.severity,children:N.message})}),Object(k.jsx)("h1",{children:V}),Object(k.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),X(o)&&function(){ee.apply(this,arguments)}()},children:[Object(k.jsx)(ue.a,{id:"marca",label:"Marca",variant:"filled",value:o.marca,onChange:Q,required:!0,placeholder:"Informe a marca do ve\xedculo",fullWidth:!0,error:""!==D.marca,helperText:D.marca}),Object(k.jsx)(ue.a,{id:"modelo",label:"Modelo",variant:"filled",value:o.modelo,onChange:Q,required:!0,placeholder:"Informe o modelo do ve\xedculo",fullWidth:!0,error:""!==D.modelo,helperText:D.modelo}),Object(k.jsx)(ue.a,{id:"cor",label:"Cor",variant:"filled",value:o.cor,onChange:function(e){return Q(e,"cor")},required:!0,placeholder:"Informe a cor do ve\xedculo",select:!0,fullWidth:!0,error:""!==D.cor,helperText:D.cor,children:["Amarelo","Azul","Bege","Branco","Cinza","Dourado","Laranja","Marrom","Prata","Preto","Rosa","Roxo","Verde","Vermelho","Vinho"].map((function(e){return Object(k.jsx)(C.a,{value:e,children:e},e)}))}),Object(k.jsx)(ue.a,{id:"ano_fabricacao",label:"Ano de fabrica\xe7\xe3o",variant:"filled",value:o.ano_fabricacao,onChange:function(e){return Q(e,"ano_fabricacao")},required:!0,placeholder:"Informe o ano de fabrica\xe7\xe3o do ve\xedculo",select:!0,fullWidth:!0,children:a.map((function(e){return Object(k.jsx)(C.a,{value:e,children:e},e)}))}),Object(k.jsx)(je.a,{fullWidth:!0,children:Object(k.jsx)(be.a,{control:Object(k.jsx)(H.a,{id:"importado",checked:b,onChange:Q}),label:"Importado?"})}),Object(k.jsx)(he.a,{id:"placa",mask:"AAA-0#00",formatChars:{A:"[A-Za-z]",0:"[0-9]","#":"[0-9A-Ja-j]"},value:o.placa,onChange:function(e){return Q(e,"placa")},children:function(){return Object(k.jsx)(ue.a,{label:"Placa",variant:"filled",required:!0,placeholder:"Informe a placa do ve\xedculo",fullWidth:!0,error:""!==D.placa,helperText:D.placa})}}),Object(k.jsx)(ue.a,{id:"preco",label:"Pre\xe7o",variant:"filled",value:o.preco,onChange:Q,required:!0,placeholder:"Informe o valor do ve\xedculo",fullWidth:!0,type:"number",onFocus:function(e){return e.target.select()},InputProps:{startAdornment:Object(k.jsx)(me.a,{position:"start",children:"R$"})},error:""!==D.preco,helperText:D.preco}),Object(k.jsxs)(h.a,{className:e.toolbar,children:[Object(k.jsx)(J.a,{type:"submit",variant:"contained",color:"secondary",disabled:O.disabled,children:O.label}),Object(k.jsx)(J.a,{variant:"contained",onClick:function(){W?_(!0):U.push("/list")},children:"Voltar"})]})]})]})}var Oe=Object(i.a)({palette:{type:"dark",primary:{main:d.a[500]},secondary:{main:j.a[500]}}}),ge=Object(b.a)((function(e){return{main:{backgroundColor:e.palette.background.default,paddingBottom:"42px",minHeight:"100vh"},routed:{padding:"25px",color:e.palette.text.primary,fontFamily:e.typography.fontFamily}}}));function ve(){var e=ge();return Object(k.jsx)(L.a,{className:e.main,children:Object(k.jsxs)(y.a,{children:[" ",Object(k.jsx)(A,{}),Object(k.jsx)(L.a,{id:"routed",className:e.routed,children:Object(k.jsxs)(R.c,{children:[" ",Object(k.jsx)(R.a,{path:"/list",children:Object(k.jsx)(se,{})}),Object(k.jsx)(R.a,{path:"/new",children:Object(k.jsx)(xe,{})}),Object(k.jsx)(R.a,{path:"/edit/:id",children:Object(k.jsx)(xe,{})})]})}),Object(k.jsx)(W,{})]})})}var Ce=function(){return Object(k.jsx)(l.a,{theme:Oe,children:Object(k.jsx)(ve,{})})},ye=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,267)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,o=a.getTTFB;t(e),r(e),n(e),c(e),o(e)}))};o.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(Ce,{})}),document.getElementById("root")),ye()}},[[202,1,2]]]);
//# sourceMappingURL=main.bbd8be98.chunk.js.map