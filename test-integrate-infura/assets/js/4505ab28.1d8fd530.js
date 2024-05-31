"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[12268],{21339:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>o});var r=n(74848),s=n(28453);const o=[];function a(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(t.p,{children:"Returns an array of all logs matching filter with given filter ID."})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},49707:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>o});var r=n(74848),s=n(28453);const o=[];function a(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},76577:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>o});var r=n(74848),s=n(28453);const o=[];function a(e){const t={a:"a",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"filter object"})," with the fillowing keys and their values:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"fromBlock"}),": ",(0,r.jsxs)(t.em,{children:["[optional, default: ",(0,r.jsx)(t.code,{children:"latest"}),"]"]})," A hexadecimal block number, or ",(0,r.jsx)(t.code,{children:"latest"})," for the last mined block. The ",(0,r.jsx)(t.code,{children:"pending"})," option is not currently supported. See the ",(0,r.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"toBlock"}),": ",(0,r.jsxs)(t.em,{children:["[optional, default: ",(0,r.jsx)(t.code,{children:"latest"}),"]"]})," A hexadecimal block number, or ",(0,r.jsx)(t.code,{children:"latest"})," for the last mined block. See the ",(0,r.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"address"}),": ",(0,r.jsx)(t.em,{children:"[optional]"})," (20 bytes). Contract address or a list of addresses from which logs should originate."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"topics"}),": ",(0,r.jsx)(t.em,{children:"[optional]"})," An array of 32 bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with ",(0,r.jsx)(t.code,{children:"or"})," options."]}),"\n",(0,r.jsxs)(t.li,{children:["blockHash: ",(0,r.jsx)(t.em,{children:"[optional]"})," With the addition of EIP-234, ",(0,r.jsx)(t.code,{children:"blockHash"})," restricts the logs returned to the single block with the 32-byte hash ",(0,r.jsx)(t.code,{children:"blockHash"}),". Using ",(0,r.jsx)(t.code,{children:"blockHash"})," is equivalent to ",(0,r.jsx)(t.code,{children:"fromBlock"})," = ",(0,r.jsx)(t.code,{children:"toBlock"})," = the block number with hash ",(0,r.jsx)(t.code,{children:"blockHash"}),". If ",(0,r.jsx)(t.code,{children:"blockHash"})," is present in the filter criteria, then neither ",(0,r.jsx)(t.code,{children:"fromBlock"})," nor ",(0,r.jsx)(t.code,{children:"toBlock"})," are allowed."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28012:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>l});var r=n(74848),s=n(28453),o=n(11470),a=n(19365);const l=[];function i(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(o.A,{children:(0,r.jsx)(a.A,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "id": 73,\n    "result": [{\n        "address": "0xb5a5f22694352c15b00323844ad545abb2b11028",\n        "blockHash": "0x99e8663c7b6d8bba3c7627a17d774238eae3e793dee30008debb2699666657de",\n        "blockNumber": "0x5d12ab",\n        "data": "0x0000000000000000000000000000000000000000000000a247d7a2955b61d000",\n        "logIndex": "0x0",\n        "removed": false,\n        "topics": ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "0x000000000000000000000000bdc0afe57b8e9468aa95396da2ab2063e595f37e", "0x0000000000000000000000007503e090dc2b64a88f034fb45e247cbd82b8741e"],\n        "transactionHash": "0xa74c2432c9cf7dbb875a385a2411fd8f13ca9ec12216864b1a1ead3c99de99cd",\n        "transactionIndex": "0x3"\n    }\n}\n'})})})})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},53308:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>o});var r=n(74848),s=n(28453);const o=[];function a(e){const t={a:"a",code:"code",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"log object array"}),": (array) An array of log objects that match filter. For an array of logs that occurred since the last poll, use ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/api/networks/ethereum/json-rpc-methods/filter-methods/eth_getfilterchanges",children:"eth_getFilterChanges"}),". Log objects contain the following keys and their values:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"address"}),": 20 bytes. Address from which this log originated."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"blockHash"}),": 32 bytes. The hash of the block where this log was in. ",(0,r.jsx)(t.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"blockNumber"}),": The block number where this log was in. ",(0,r.jsx)(t.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"data"}),": DATA. Contains the non-indexed arguments of the log."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"logIndex"}),": A hexadecimal of the log index position in the block. ",(0,r.jsx)(t.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"removed"}),": ",(0,r.jsx)(t.code,{children:"true"})," when the log was removed, due to a chain reorganization. ",(0,r.jsx)(t.code,{children:"false"})," if it is a valid log."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"topics"}),": Array of DATA. An array of 0 to 4 32-bytes DATA of indexed log arguments. In Solidity the first ",(0,r.jsx)(t.code,{children:"topic"})," is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except when you declared the event with the anonymous specifier."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"transactionHash"}),": 32 bytes. A hash of the transactions from which this log was created. ",(0,r.jsx)(t.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"transactionIndex"}),": A hexadecimal of the transactions index position from which this log was created. ",(0,r.jsx)(t.code,{children:"Null"})," when it is a pending log."]}),"\n"]}),"\n"]}),"\n"]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},56056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>v,frontMatter:()=>f,metadata:()=>x,toc:()=>j});var r=n(74848),s=n(28453),o=n(11470),a=n(19365),l=n(21339),i=n(76577),c=n(53308),d=n(49707);function h(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(o.A,{children:[(0,r.jsx)(a.A,{value:"cURL",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl https://mainnet.infura.io/v3/YOUR-API-KEY \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{"jsonrpc":"2.0","method":"eth_getFilterLogs","params":["0x10ff0bfbedb01f0dbd4106d14eb719ec38b6eb5b821c"],"id":1}\'\n'})})}),(0,r.jsx)(a.A,{value:"WSS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'wscat -c wss://mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_getFilterLogs","params":["0x10ff0bfbedb01f0dbd4106d14eb719ec38b6eb5b821c"],"id":1}\'\n'})})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}var p=n(28012);const f={title:"eth_getFilterLogs"},m=void 0,x={id:"api/networks/ethereum/json-rpc-methods/filter-methods/eth_getfilterlogs",title:"eth_getFilterLogs",description:"Parameters",source:"@site/services/api/networks/ethereum/json-rpc-methods/filter-methods/eth_getfilterlogs.mdx",sourceDirName:"api/networks/ethereum/json-rpc-methods/filter-methods",slug:"/api/networks/ethereum/json-rpc-methods/filter-methods/eth_getfilterlogs",permalink:"/test-integrate-infura/services/api/networks/ethereum/json-rpc-methods/filter-methods/eth_getfilterlogs",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/ethereum/json-rpc-methods/filter-methods/eth_getfilterlogs.mdx",tags:[],version:"current",frontMatter:{title:"eth_getFilterLogs"},sidebar:"servicesSidebar",previous:{title:"eth_getFilterChanges",permalink:"/test-integrate-infura/services/api/networks/ethereum/json-rpc-methods/filter-methods/eth_getfilterchanges"},next:{title:"eth_newBlockFilter",permalink:"/test-integrate-infura/services/api/networks/ethereum/json-rpc-methods/filter-methods/eth_newblockfilter"}},b={},j=[...l.RM,{value:"Parameters",id:"parameters",level:2},...i.RM,{value:"Returns",id:"returns",level:2},...c.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function g(e){const t={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(u,{}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(p.Ay,{})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),s=n(18215),o=n(23104),a=n(56347),l=n(205),i=n(57485),c=n(31682),d=n(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=u(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,h]=f({queryString:n,groupId:s}),[m,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),b=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),x(e)}),[h,x,o]),tabValues:o}}var x=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==r&&(c(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:h,onClick:d,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function k(e){const t=(0,x.A)();return(0,j.jsx)(w,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);