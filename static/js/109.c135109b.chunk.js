"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[109],{5488:function(n,e,t){t.r(e),t.d(e,{default:function(){return gn}});var i,r,a,o,d,l,p,s,c,x,h=t(1087),g=t(715),u=t(9439),f=t(2791),m=t(9434),b=t(6584),Z=t(5538),j=t(4925),y=t(6362),v=t(7892),w=t(2103),F=t(6641),k=t(1574),R=t(7518),S=t(9357),C=t(2426),T=t.n(C),P=t(1686),W=t.n(P),z=t(168),M=t(8789),Y="768px",D="1280px",H={mobile:"screen and (min-width: ".concat("320px",")"),tablet:"screen and (min-width: ".concat(Y,")"),laptop:"screen and (min-width: ".concat(D,")")},B=M.ZP.form(i||(i=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  @media "," {\n\n  }\n  @media "," {\n    flex-direction: row;\n    justify-self: flex-start;\n    flex-wrap: nowrap;\n    \n  }\n"])),H.tablet,H.laptop),E=M.ZP.div(r||(r=(0,z.Z)(["\n    align-items: center;\n  display: contents;\n  flex-direction: column;\n  justify-content: space-evenly;\n  border-bottom-left-radius: 30%;\n  background-color: transparent;\n \n  @media "," {\n    display: flex;\n    flex-direction: row;\n     height: 44px;\n  }\n  @media "," {\n    height: 40px;\n    text-align: center;\n  }\n  \n  \n"])),H.tablet,H.laptop),U=M.ZP.div(a||(a=(0,z.Z)(["\n    display: flex;\n    gap: 10px;\n position: relative;\n     margin-right: 44px;\n\n  margin-bottom: 32px;\n  @media "," {\n    margin-bottom: 0px;\n  }\n \n"])),H.tablet),I=M.ZP.input(o||(o=(0,z.Z)(["\n    font-family: 'Roboto';\nfont-style: normal;\n    border: none;\n    font-weight: 900;\n    font-size: 14px;\n    line-height: 1.16;\n    display: flex;\nalign-items: center;\nletter-spacing: 0.04em;\ntext-transform: uppercase;\n\ncolor: #52555F;\n \n  &::-webkit-calendar-picker-indicator {\n\n    color: rgba(0, 0, 0, 0);\n    z-index: 0;\n    width: 90px;\n    height: 100%;\n    opacity: 0;\n    position: absolute;\n    left: 0;\n    top: 0;\n    cursor: pointer;\n  }\n\n"]))),_=M.ZP.div(d||(d=(0,z.Z)(["\n  display: flex;\n    align-items: center;\n"]))),A=M.ZP.input(l||(l=(0,z.Z)(["\n display: none;\n  width: 184px;\n  height: 44px;\n  border-top-left-radius: 16px;\n  font-size: 12px;\n  line-height: 1.14;\n  background-color: transparent;\n  padding-left: 30px;\n  border: 2px solid #FFFFFF;\n  border-bottom: none;\n  color: #52555F;\n  &::placeholder {\n    font-weight: 400;\n    color: #c7ccdc;\n  }\n  @media "," {\n      margin-right: -8px;\n    border: 2px solid #f6f7fc;\n    display: flex;\n    padding-left: 12px;\n  }\n  @media "," {\n     width: 240px; \n  }\n"])),H.tablet,H.laptop),L=(M.ZP.input(p||(p=(0,z.Z)(["\n  display: none;\n\n  \n"]))),M.ZP.div(s||(s=(0,z.Z)(["\ndisplay: none;\n  @media "," {\n    justify-content: end;\n    align-items: center;\n    position: relative;\n  width: 183px;\n    display: flex;\n    background-color: transparent;\n    border-top-right-radius: 16px;\n    border-bottom-right-radius: 16px;\n    width: 110px;\n    border: 2px solid #f6f7fc;\n        margin-left: -8px\n  }\n  @media "," {\n    width: 121px;\n  }\n  \n"])),H.tablet,H.laptop)),N=M.ZP.input(c||(c=(0,z.Z)(["\n  width: 183px;\n  height: 44px;\n // padding-right: 55px;\n // padding-left: 55px;\n margin-right: 5px;\n  border-radius: 22px;\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 1.14;\n  text-align: center;\n  margin-top: 32px;\n    order: 2px solid #f6f7fc;\n;\n  background-color: transparent;\n  @media "," {\n    height: 40px;\n    width: 110px;\n    margin-top: 0;\n   \n    border: transparent;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n  }\n  @media "," {\n    width: 121px;\n  }\n"])),H.tablet,H.laptop),O=M.ZP.div(x||(x=(0,z.Z)(["\n display: flex;\n justify-content:center;\n  margin-top: 80px;\n  gap: 20px;\n  @media "," {\n    margin-top: 32px;\n  }\n  @media "," {\n    margin-left: 32px;\n    margin-top: 0;\n    gap: 15px;\n  }\n"])),H.tablet,H.laptop),q=t(3329),G=function(n){var e=n.value,t=(0,f.useState)(T()(new Date).format("YYYY-MM-DD")),i=(0,u.Z)(t,2),r=i[0],a=i[1],o=(0,f.useState)(""),d=(0,u.Z)(o,2),l=d[0],p=d[1],s=f.useState(""),c=(0,u.Z)(s,2),x=c[0],h=c[1],g=(0,m.I0)(),C=(0,f.useState)(""),P=(0,u.Z)(C,2),z=P[0],M=P[1],Y=(0,v.a)().isRefreshing;(0,f.useEffect)((function(){Y||g((0,k.me)())}),[Y]);var D=(0,m.v9)(R.N3),H=function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"date":a(i);break;case"description":p(i);break;case"amount":(/^\d+(\.\d{0,2})?$/.test(i)||""===i)&&M(i)}},G=function(){a(T()(new Date).format("YYYY-MM-DD")),p(""),h(""),M("")};return(0,f.useEffect)((function(){e&&G()}),[e]),(0,q.jsxs)(B,{autoComplete:"off",onSubmit:function(n){if(n.preventDefault(),0===l.trim().length||!x||!z)return W().Notify.warning("Missing required fields");var e={description:l,date:r,category:x,amount:Number(z)};g((0,k.CW)(e)).unwrap().then((function(){return g((0,k.UF)())})),G()},children:[(0,q.jsxs)(E,{children:[(0,q.jsxs)(U,{children:[(0,q.jsx)(w.r,{}),(0,q.jsx)(I,{"aria-label":"Date",name:"date",dateFormat:"yyyy-MM-dd",onChange:H,type:"date",value:r})]}),(0,q.jsxs)(_,{children:[(0,q.jsx)(A,{placeholder:"Product description",name:"description","aria-label":"Text",onChange:H,type:"text",value:l}),(0,q.jsxs)(y.Z,{sx:{m:1,minWidth:169},children:[(0,q.jsx)(j.Z,{id:"demo-simple-select-autowidth-label",style:{fontSize:"12px",color:"#c7ccdc",lineHeight:"1.14",paddingLeft:"12px",paddingTop:"9px"},children:"Product category"}),(0,q.jsx)(b.Z,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",value:null!==x&&void 0!==x?x:"",onChange:function(n){h(n.target.value)},variant:"standard",disableUnderline:!0,style:{border:"2px solid rgb(246, 247, 252)",height:"44px",top:"-8px",color:"#c7ccdc",fontSize:"12px"},children:D.map((function(n){return(0,q.jsx)(Z.Z,{value:n,children:n},n)}))})]}),(0,q.jsxs)(L,{children:[(0,q.jsx)(N,{onChange:H,type:"number",name:"amount",placeholder:"00.00",min:"0.01",step:"0.01",value:z}),(0,q.jsx)(F.r,{style:{fill:"black",position:"absolute",marginRight:"23px"}})]})]})]}),(0,q.jsxs)(O,{children:[(0,q.jsx)(S.z,{type:"submit",color:"accent",design:"operation",children:"Input"}),(0,q.jsx)(S.z,{type:"button",color:"white",design:"operation",onClick:G,children:"Clear"})]})]})},$=t(9857),J=t(2024),K=t(3210),Q=t(3433),V=t(5527),X=t(9836),nn=t(3382),en=t(3994),tn=t(9281),rn=t(6890),an=t(5855),on=t(7779),dn=[{id:"date",label:"DATE",paddingLeft:"20px",maxWidth:120},{id:"description",label:"DESCRIPTION",minWidth:220},{id:"category",label:"CATEGORY",minWidth:100,align:"center"},{id:"amount",label:"SUM",minWidth:100,align:"center"},{id:"del",label:"",minWidth:70,align:"center"}];function ln(){var n=(0,m.v9)(R.PC),e=(0,v.a)().isRefreshing,t=(0,m.I0)();(0,f.useEffect)((function(){e||t((0,k.UF)())}),[e]);var i=(0,f.useState)(0),r=(0,u.Z)(i,2),a=r[0],o=r[1];return(0,f.useEffect)((function(){n&&(n.length>=15||o(15-n.length))}),[n]),(0,q.jsx)(V.Z,{sx:{maxWidth:746,overflow:"hidden",borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:"62px",maxHeight:410,overflowY:"scrool"},children:(0,q.jsx)(tn.Z,{sx:{maxHeight:410},children:(0,q.jsxs)(X.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,q.jsx)(rn.Z,{children:(0,q.jsx)(an.Z,{children:dn.map((function(n){return(0,q.jsx)(en.Z,{align:n.align,style:{minWidth:n.minWidth,padding:"12px 25px",fontWeight:700,fontSize:"12px",lineHeight:1.17,letterSpacing:"0.02em",color:"#000000",backgroundColor:"#F5F6FB"},children:n.label},n.id)}))})}),(0,q.jsx)(nn.Z,{children:null!==n?[].concat((0,Q.Z)(n),(0,Q.Z)(Array(a).fill(null))).map((function(n){return n?(0,q.jsx)(an.Z,{children:dn.map((function(e){var t=n[e.id];return(0,q.jsxs)(en.Z,{align:e.align,style:{height:40,paddingTop:10,paddingBottom:10,fontWeight:"amount"===e.id?700:400,fontSize:"12px",lineHeight:1.17,letterSpacing:"0.04em",color:"amount"===e.id?"#407946":"#52555F"},children:["date"===e.id&&t.split("-").join("."),"description"===e.id&&t,"category"===e.id&&t,"amount"===e.id&&"".concat(t.toFixed(2)," UAH."),"del"===e.id&&(0,q.jsx)(on.Z,{id:n._id})]},e.id)}))},n._id):(0,q.jsx)(an.Z,{children:dn.map((function(n){return(0,q.jsx)(en.Z,{align:n.align,style:{height:40,paddingTop:10,paddingBottom:10}},n.id)}))},Math.random())})):(0,q.jsx)(an.Z,{children:(0,q.jsx)(en.Z,{})})})]})})})}var pn,sn,cn=[{id:"month",minWidth:107},{id:"total",minWidth:107,align:"right"}];function xn(){var n=(0,m.v9)(R.uY),e=Object.keys(n).reverse().map((function(e){return{month:e,total:n[e]}})).filter((function(n){return"N/A"!==n.total}));return(0,q.jsx)(V.Z,{sx:{maxWidth:230,minWidth:214,maxHeight:280,marginTop:"60px",borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:"#F5F6FB"},children:(0,q.jsx)(tn.Z,{children:(0,q.jsxs)(X.Z,{"aria-label":"sticky table",children:[(0,q.jsx)(rn.Z,{children:(0,q.jsx)(an.Z,{children:(0,q.jsx)(en.Z,{align:"center",colSpan:2,style:{paddingTop:12,paddingBottom:12,borderTopLeftRadius:20,borderTopRightRadius:20,fontWeight:700,fontSize:"12px",lineHeight:1.17,letterSpacing:"0.02em",color:"#000000",backgroundColor:"#F5F6FB"},children:"SUMMERY"})})}),(0,q.jsx)(nn.Z,{children:e.map((function(n){return(0,q.jsx)(an.Z,{hover:!0,role:"checkbox",tabIndex:-1,style:{borderTop:"2px solid #FFFFFF",borderBottom:"2px solid #FFFFFF"},children:cn.map((function(e){var t=n[e.id];return(0,q.jsxs)(en.Z,{align:e.align,style:{padding:"13px 12px",fontSize:"12px",lineHeight:1.17,letterSpacing:"0.04em",color:"#52555F",backgroundColor:"#F5F6FB"},children:["month"===e.id&&t.toUpperCase(),"total"===e.id&&t]},e.id)}))},n.month)}))})]})})})}M.ZP.div(pn||(pn=(0,z.Z)(["\n  margin: 0 auto;\n  padding: 24px 40px 42px 40px;\n  background: #ffffff;\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n  border-radius: 0px 30px 30px 30px;\n"])));var hn=M.ZP.div(sn||(sn=(0,z.Z)(["\n  display: flex;\n  gap: 75px;\n  flex-wrap: wrap;\n"])));function gn(){return(0,q.jsxs)(J.Z,{type:"Main",children:[(0,q.jsx)(K.y,{}),(0,q.jsxs)("div",{children:[(0,q.jsx)(g.Z,{}),(0,q.jsxs)($.e,{children:[(0,q.jsx)(G,{}),(0,q.jsxs)(hn,{children:[(0,q.jsx)(ln,{}),(0,q.jsx)(xn,{})]})]}),(0,q.jsx)(h.rU,{to:"/report",style:{display:"block"},children:"REPORT"})]})]})}}}]);
//# sourceMappingURL=109.c135109b.chunk.js.map