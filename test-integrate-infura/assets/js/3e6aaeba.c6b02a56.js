"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[90561],{28800:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>o});var r=t(74848),s=t(28453);const o=[];function a(e){const n={p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(n.p,{children:"Cancel subscriptions by calling this method with the subscription ID. It returns a boolean indicating that the subscription was canceled successfully."})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},71296:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>o});var r=t(74848),s=t(28453);const o=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"WebSocket connections only",type:"tip",children:(0,r.jsxs)(n.p,{children:["Subscription methods are available for ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/learn/websockets",children:"WebSocket"})," connections only."]})})]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},87760:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>o});var r=t(74848),s=t(28453);const o=[];function a(e){const n={code:"code",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"subscription ID"}),": The ID of the subscription you want to unsubscribe."]}),"\n"]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},66461:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>i});var r=t(74848),s=t(28453),o=t(11470),a=t(19365);const i=[];function c(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(o.A,{children:(0,r.jsx)(a.A,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": true\n}\n'})})})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},10659:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>o});var r=t(74848),s=t(28453);const o=[];function a(e){const n={code:"code",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"unsubscribed flag"}),": (boolean) ",(0,r.jsx)(n.code,{children:"True"})," if the subscription is canceled successfully."]}),"\n"]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},22096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>x});var r=t(74848),s=t(28453),o=t(11470),a=t(19365),i=t(28800),c=t(87760),l=t(10659),u=t(71296);function d(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(o.A,{children:(0,r.jsx)(a.A,{value:"WSS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://polygon-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0", "id": 1, "method": "eth_unsubscribe", "params": ["0x9cef478923ff08bf67fde6c64013158d"]}\'\n'})})})})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var h=t(66461);const m={title:"eth_unsubscribe"},f=void 0,b={id:"api/networks/polygon-pos/json-rpc-methods/subscription-methods/eth_unsubscribe",title:"eth_unsubscribe",description:"This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should",source:"@site/services/api/networks/polygon-pos/json-rpc-methods/subscription-methods/eth_unsubscribe.mdx",sourceDirName:"api/networks/polygon-pos/json-rpc-methods/subscription-methods",slug:"/api/networks/polygon-pos/json-rpc-methods/subscription-methods/eth_unsubscribe",permalink:"/test-integrate-infura/services/api/networks/polygon-pos/json-rpc-methods/subscription-methods/eth_unsubscribe",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/polygon-pos/json-rpc-methods/subscription-methods/eth_unsubscribe.mdx",tags:[],version:"current",frontMatter:{title:"eth_unsubscribe"},sidebar:"servicesSidebar",previous:{title:"eth_subscribe",permalink:"/test-integrate-infura/services/api/networks/polygon-pos/json-rpc-methods/subscription-methods/eth_subscribe"},next:{title:"web3_clientVersion",permalink:"/test-integrate-infura/services/api/networks/polygon-pos/json-rpc-methods/web3_clientversion"}},v={},x=[...i.RM,{value:"Parameters",id:"parameters",level:2},...c.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...h.RM];function j(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsxs)(n.admonition,{title:"For Growth and Custom service plans",type:"info",children:[(0,r.jsxs)(n.p,{children:["This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should\nexperience a service issue or outage. See ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/polygon-pos/concepts/failover-protection",children:"Failover protection"}),"\nand ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/polygon-pos/how-to/failover-protection-imp-polygon",children:"Enable API request forwarding"}),"\nfor complete details."]}),(0,r.jsx)(n.p,{children:"If you would like failover protection but don't qualify under your current plan, then either\nself-upgrade to the Growth plan or contact a sales representative to upgrade to a Custom plan."})]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(u.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(h.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(18215),o=t(23104),a=t(56347),i=t(205),c=t(57485),l=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=p(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,d]=m({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),v=(()=>{const e=l??f;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(l(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);