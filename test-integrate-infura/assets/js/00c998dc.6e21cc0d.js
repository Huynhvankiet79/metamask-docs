"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[78367],{39456:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>s});var r=t(74848),a=t(28453);const s=[];function o(e){const n={a:"a",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["Returns the currently configured chain ID, a value used in replay-protected transaction signing as introduced by ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-155",children:"EIP-155"}),"."]})}function i(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},90880:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>s});var r=t(74848),a=t(28453);const s=[];function o(e){const n={a:"a",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function i(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},59184:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>s});var r=t(74848),a=t(28453);const s=[];function o(e){const n={p:"p",...(0,a.R)(),...e.components};return(0,r.jsx)(n.p,{children:"None."})}function i(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},3581:(e,n,t)=>{t.d(n,{Ay:()=>u,RM:()=>i});var r=t(74848),a=t(28453),s=t(11470),o=t(19365);const i=[];function c(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x1"\n}\n'})})})})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},96867:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>s});var r=t(74848),a=t(28453);const s=[];function o(e){const n={p:"p",...(0,a.R)(),...e.components};return(0,r.jsx)(n.p,{children:"A hexadecimal of the current chain ID."})}function i(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},89277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>x});var r=t(74848),a=t(28453),s=t(11470),o=t(19365),i=t(39456),c=t(59184),u=t(96867),l=t(90880);function d(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://arbitrum-mainnet.infura.io/v3/YOUR-API-KEY \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{"jsonrpc":"2.0","method":"eth_chainId","params": [],"id":1}\'\n'})})}),(0,r.jsx)(o.A,{value:"WSS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://arbitrum-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_chainId","params": [],"id":1}\'\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var h=t(3581);const m={title:"eth_chainId"},f=void 0,b={id:"api/networks/arbitrum/json-rpc-methods/eth_chainid",title:"eth_chainId",description:"Parameters",source:"@site/services/api/networks/arbitrum/json-rpc-methods/eth_chainid.mdx",sourceDirName:"api/networks/arbitrum/json-rpc-methods",slug:"/api/networks/arbitrum/json-rpc-methods/eth_chainid",permalink:"/test-integrate-infura/services/api/networks/arbitrum/json-rpc-methods/eth_chainid",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/arbitrum/json-rpc-methods/eth_chainid.mdx",tags:[],version:"current",frontMatter:{title:"eth_chainId"},sidebar:"servicesSidebar",previous:{title:"eth_call",permalink:"/test-integrate-infura/services/api/networks/arbitrum/json-rpc-methods/eth_call"},next:{title:"eth_coinbase",permalink:"/test-integrate-infura/services/api/networks/arbitrum/json-rpc-methods/eth_coinbase"}},v={},x=[...i.RM,{value:"Parameters",id:"parameters",level:2},...c.RM,{value:"Returns",id:"returns",level:2},...u.RM,{value:"Example",id:"example",level:2},...l.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...h.RM];function j(e){const n={h2:"h2",h3:"h3",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(u.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(h.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(18215),s=t(23104),o=t(56347),i=t(205),c=t(57485),u=t(31682),l=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,l.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),l=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(u(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:l,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);