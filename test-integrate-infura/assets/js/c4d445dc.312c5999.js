"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[45904],{48333:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),a=r(28453);const s=[];function o(e){const n={p:"p",...(0,a.R)(),...e.components};return(0,t.jsx)(n.p,{children:"Submits a pre-signed transaction for broadcast to the Ethereum network."})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},91153:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),a=r(28453);const s=[];function o(e){const n={a:"a",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,t.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},63247:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),a=r(28453);const s=[];function o(e){const n={code:"code",em:"em",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"transaction data"}),": [",(0,t.jsx)(n.em,{children:"Required"}),"] The signed transaction data."]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},74698:(e,n,r)=>{r.d(n,{Ay:()=>l,RM:()=>c});var t=r(74848),a=r(28453),s=r(11470),o=r(19365);const c=[{value:"Error response",id:"error-response",level:2}];function i(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{children:(0,t.jsx)(o.A,{value:"JSON",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"\n}\n'})})})}),"\n",(0,t.jsx)(n.h2,{id:"error-response",children:"Error response"}),"\n",(0,t.jsxs)(n.p,{children:["On Mainnet and Goerli, if this call causes the EVM to execute a ",(0,t.jsx)(n.code,{children:"REVERT"})," operation, an error response of the following form is returned, with the revert reason pre-decoded as a string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "error": {\n    "code": 3,\n    "message": "execution reverted: Dai/insufficient-balance",\n    "data": "0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000184461692f696e73756666696369656e742d62616c616e63650000000000000000"\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},90746:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),a=r(28453);const s=[];function o(e){const n={a:"a",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"transaction hash"}),": 32 bytes. The transaction hash, or the zero hash if the transaction is not yet available. Use ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/reference/ethereum/json-rpc-methods/eth_gettransactionreceipt",children:(0,t.jsx)(n.code,{children:"eth_getTransactionReceipt"})})," to get the contract address, after the transaction was mined, when you created a contract."]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},93542:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>v,contentTitle:()=>m,default:()=>g,frontMatter:()=>f,metadata:()=>b,toc:()=>x});var t=r(74848),a=r(28453),s=r(11470),o=r(19365),c=r(48333),i=r(63247),l=r(90746),u=r(91153);function d(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://polygon-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params": ["0xf869018203e882520894f17f52151ebef6c7334fad080c5704d77216b732881bc16d674ec80000801ba02da1c48b670996dcb1f447ef9ef00b33033c48a4fe938f420bec3e56bfd24071a062e0aa78a81bf0290afbc3a9d8e9a068e6d74caa66c5e0fa8a46deaae96b0833"],"id":1}\'\n'})})}),(0,t.jsx)(o.A,{value:"WSS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://polygon-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"],"id":1}\'\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var h=r(74698);const f={title:"eth_sendRawTransaction"},m=void 0,b={id:"reference/polygon-pos/json-rpc-methods/eth_sendrawtransaction",title:"eth_sendRawTransaction",description:"This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should",source:"@site/services/reference/polygon-pos/json-rpc-methods/eth_sendrawtransaction.mdx",sourceDirName:"reference/polygon-pos/json-rpc-methods",slug:"/reference/polygon-pos/json-rpc-methods/eth_sendrawtransaction",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_sendrawtransaction",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/polygon-pos/json-rpc-methods/eth_sendrawtransaction.mdx",tags:[],version:"current",frontMatter:{title:"eth_sendRawTransaction"},sidebar:"servicesSidebar",previous:{title:"eth_protocolVersion",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_protocolversion"},next:{title:"eth_sendTransaction",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_sendtransaction"}},v={},x=[...c.RM,{value:"Parameters",id:"parameters",level:2},...i.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...h.RM];function j(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsxs)(n.admonition,{title:"For Growth and Custom service plans",type:"info",children:[(0,t.jsxs)(n.p,{children:["This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should\nexperience a service issue or outage. See ",(0,t.jsx)(n.a,{href:"../concepts/failover-protection.md",children:"Failover protection"}),"\nand ",(0,t.jsx)(n.a,{href:"../how-to/failover-protection-imp-polygon.md",children:"Enable API request forwarding"}),"\nfor complete details."]}),(0,t.jsx)(n.p,{children:"If you would like failover protection but don't qualify under your current plan, then either\nself-upgrade to the Growth plan or contact a sales representative to upgrade to a Custom plan."})]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,t.jsx)(u.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,t.jsx)(h.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var t=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(96540),a=r(18215),s=r(23104),o=r(56347),c=r(205),i=r(57485),l=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=p(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[l,d]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=l??m;return h({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),a=c[r].value;a!==t&&(l(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);