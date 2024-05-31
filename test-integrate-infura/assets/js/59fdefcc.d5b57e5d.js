"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[38092],{51086:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>s});var r=n(74848),a=n(28453);const s=[];function o(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,r.jsx)(t.p,{children:"Returns an estimate of how much priority fee, in wei, you need to be included in a block."})}function i(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},59266:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>s});var r=n(74848),a=n(28453);const s=[];function o(e){const t={a:"a",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function i(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},94594:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>s});var r=n(74848),a=n(28453);const s=[];function o(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,r.jsx)(t.p,{children:"None."})}function i(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},13927:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>i});var r=n(74848),a=n(28453),s=n(11470),o=n(19365);const i=[];function l(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x55d4a80"\n}\n'})})})})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},74733:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>s});var r=n(74848),a=n(28453);const s=[];function o(e){const t={code:"code",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"result"}),": A hexadecimal value of the priority fee, in wei, needed to be included in a block."]})}function i(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},96798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>y,frontMatter:()=>h,metadata:()=>x,toc:()=>v});var r=n(74848),a=n(28453),s=n(11470),o=n(19365),i=n(51086),l=n(94594),c=n(74733),u=n(59266);function d(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"cURL",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl https://mantle-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_maxPriorityFeePerGas","params": [],"id":1}\'\n'})})})})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var m=n(13927);const h={title:"eth_maxPriorityFeePerGas"},f=void 0,x={id:"api/networks/mantle/json-rpc-methods/eth_maxpriorityfeepergas",title:"eth_maxPriorityFeePerGas",description:"Parameters",source:"@site/services/api/networks/mantle/json-rpc-methods/eth_maxpriorityfeepergas.mdx",sourceDirName:"api/networks/mantle/json-rpc-methods",slug:"/api/networks/mantle/json-rpc-methods/eth_maxpriorityfeepergas",permalink:"/test-integrate-infura/services/api/networks/mantle/json-rpc-methods/eth_maxpriorityfeepergas",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/mantle/json-rpc-methods/eth_maxpriorityfeepergas.mdx",tags:[],version:"current",frontMatter:{title:"eth_maxPriorityFeePerGas"},sidebar:"servicesSidebar",previous:{title:"eth_getUncleCountByBlockNumber",permalink:"/test-integrate-infura/services/api/networks/mantle/json-rpc-methods/eth_getunclecountbyblocknumber"},next:{title:"eth_protocolVersion",permalink:"/test-integrate-infura/services/api/networks/mantle/json-rpc-methods/eth_protocolversion"}},b={},v=[...i.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...c.RM,{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...m.RM];function j(e){const t={h2:"h2",h3:"h3",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(u.Ay,{}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(m.Ay,{})]})}function y(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(18215),s=n(23104),o=n(56347),i=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=h({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);