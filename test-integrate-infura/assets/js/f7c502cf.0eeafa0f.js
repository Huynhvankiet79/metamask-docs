"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[37931],{56289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(74848),o=n(28453),i=n(43123);const s={description:"How to perform tasks on the Linea network."},a="How to",c={id:"api/networks/linea/how-to/index",title:"How to",description:"How to perform tasks on the Linea network.",source:"@site/services/api/networks/linea/how-to/index.md",sourceDirName:"api/networks/linea/how-to",slug:"/api/networks/linea/how-to/",permalink:"/test-integrate-infura/services/api/networks/linea/how-to/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/linea/how-to/index.md",tags:[],version:"current",frontMatter:{description:"How to perform tasks on the Linea network."},sidebar:"servicesSidebar",previous:{title:"Supported networks",permalink:"/test-integrate-infura/services/api/networks/linea/choose-a-network"},next:{title:"Get Linea testnet ETH",permalink:"/test-integrate-infura/services/api/networks/linea/how-to/bridge-funds-to-linea"}},l={},d=[];function u(e){const t={h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-to",children:"How to"}),"\n",(0,r.jsx)(t.p,{children:"Here you can learn how to perform tasks on the Linea network."}),"\n",(0,r.jsx)(i.A,{})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},43123:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var r=n(18215),o=n(84142),i=n(20053),s=n(28774),a=n(16654),c=n(21312),l=n(49259);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var u=n(74848);function f(e){let{href:t,children:n,flaskOnly:r}=e;return(0,u.jsx)(s.A,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer,{[l.A.flaskOnly]:r}),children:n})}function p(e){let{href:t,icon:n,title:r,description:o,flaskOnly:s}=e;return(0,u.jsxs)(f,{flaskOnly:s,href:t,children:[(0,u.jsxs)("h2",{className:(0,i.A)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),o&&(0,u.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e;const n=(0,o.Nr)(t);return n?(0,u.jsx)(p,{flaskOnly:!!t.customProps?.flask_only,href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(p,{flaskOnly:!!t.customProps?.flask_only,href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(w,{...e});const i=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(k,{item:e})},t)))})}},20053:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.d(t,{A:()=>o});const o=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},49259:(e,t,n)=>{n.d(t,{A:()=>r});const r={cardContainer:"cardContainer_C0Dw",flaskOnly:"flaskOnly_ADUl",cardTitle:"cardTitle_ZNcV",cardIcon:"cardIcon_naep"}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);