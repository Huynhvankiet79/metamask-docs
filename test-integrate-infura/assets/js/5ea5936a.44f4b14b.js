"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[76320],{23795:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>b,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var t=a(74848),c=a(28453),r=a(11470),s=a(19365);const d={title:"starknet_traceTransaction"},o=void 0,l={id:"api/networks/starknet/json-rpc-methods/starknet_tracetransaction",title:"starknet_traceTransaction",description:"Returns the execution trace of the specified transaction.",source:"@site/services/api/networks/starknet/json-rpc-methods/starknet_tracetransaction.mdx",sourceDirName:"api/networks/starknet/json-rpc-methods",slug:"/api/networks/starknet/json-rpc-methods/starknet_tracetransaction",permalink:"/test-integrate-infura/services/api/networks/starknet/json-rpc-methods/starknet_tracetransaction",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/starknet/json-rpc-methods/starknet_tracetransaction.mdx",tags:[],version:"current",frontMatter:{title:"starknet_traceTransaction"},sidebar:"servicesSidebar",previous:{title:"starknet_traceBlockTransactions",permalink:"/test-integrate-infura/services/api/networks/starknet/json-rpc-methods/starknet_traceblocktransactions"},next:{title:"Gas API",permalink:"/test-integrate-infura/services/api/infura-expansion-apis/gas-api/"}},i={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function f(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Returns the execution trace of the specified transaction.\nThis provides the exact sequence of operations that were performed during the execution of the\ntransaction, and can be useful for debugging."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"transaction_hash"}),": (string) [",(0,t.jsx)(n.em,{children:"Required"}),"] The hash of the requested transaction."]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"The execution trace of the requested transaction."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,t.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsx)(r.A,{children:(0,t.jsx)(s.A,{value:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://starknet-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "id": 1,\n    "jsonrpc": "2.0",\n    "method": "starknet_traceTransaction",\n    "params": {\n      "transaction_hash": "0x121aaba2894a63cce81acabb559eb2c114f4859dc5803e0b91349ec398d2eb0"\n    }\n  }\'\n'})})})}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsx)(r.A,{children:(0,t.jsx)(s.A,{value:"JSON",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "execute_invocation": {\n      "call_type": "CALL",\n      "calldata": [\n        "0x3",\n        "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",\n        "0x219209e083275171774dab1df80982e9df2096516f06319c5c6d71ae0a8480c",\n        ...\n      ],\n      "caller_address": "0x0",\n      "calls": [\n        {\n          "call_type": "CALL",\n          "calldata": [\n            "0xfff107e2403123c7df78d91728a7ee5cfd557aec0fa2d2bdc5891c286bbfff",\n            "0x984e103a8acd6",\n            "0x0"\n          ],\n          "caller_address": "0x569b13e8164bc8000c0bbcf4887856516643af123c5bc3b01e229e92f9cfd10",\n          "calls": [\n            {\n              "call_type": "DELEGATE",\n              "calldata": [\n                "0xfff107e2403123c7df78d91728a7ee5cfd557aec0fa2d2bdc5891c286bbfff",\n                "0x984e103a8acd6",\n                "0x0"\n              ],\n              "caller_address": "0x569b13e8164bc8000c0bbcf4887856516643af123c5bc3b01e229e92f9cfd10",\n              "calls": [],\n              "class_hash": "0x2760f25d5a4fb2bdde5f561fd0b44a3dee78c28903577d37d669939d97036a0",\n              "contract_address": "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",\n              "entry_point_selector": "0x219209e083275171774dab1df80982e9df2096516f06319c5c6d71ae0a8480c",\n              "entry_point_type": "EXTERNAL",\n              "events": [\n                {\n                  "data": [\n                    "0x569b13e8164bc8000c0bbcf4887856516643af123c5bc3b01e229e92f9cfd10",\n                    "0xfff107e2403123c7df78d91728a7ee5cfd557aec0fa2d2bdc5891c286bbfff",\n                    "0x984e103a8acd6",\n                    "0x0"\n                  ],\n                  "keys": [\n                    "0x134692b230b9e1ffa39098904722134159652b09c5bc41d88d6698779d228ff"\n                  ],\n                  "order": 0\n                }\n              ],\n              "messages": [],\n              "result": [\n                "0x1"\n              ]\n            }\n          ],\n          "class_hash": "0xd0e183745e9dae3e4e78a8ffedcce0903fc4900beace4e0abf192d4c202da3",\n          "contract_address": "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",\n          "entry_point_selector": "0x219209e083275171774dab1df80982e9df2096516f06319c5c6d71ae0a8480c",\n          "entry_point_type": "EXTERNAL",\n          "events": [],\n          "messages": [],\n          "result": [\n            "0x1"\n          ]\n        },\n        ...\n      ],\n      "class_hash": "0x1a736d6ed154502257f02b1ccdf4d9d1089f80811cd6acad48e6b6a9d1f2003",\n      "contract_address": "0x569b13e8164bc8000c0bbcf4887856516643af123c5bc3b01e229e92f9cfd10",\n      "entry_point_selector": "0x15d40a3d6ca2ac30f4031e42be28da9b056fef9bb7357ac5e85627ee876e5ad",\n      "entry_point_type": "EXTERNAL",\n      "events": [\n        {\n          "data": [\n            "0x3",\n            "0x1",\n            "0x1",\n            ...\n          ],\n          "keys": [\n            "0x1dcde06aabdbca2f80aa51392b345d7549d7757aa855f7e37f5d335ac8243b1",\n            "0x24cfba646f79dd32c47a61d6de300f2ab1c9e2aff2e92f790c1368cd177d69c"\n          ],\n          "order": 10\n        }\n      ],\n      "messages": [],\n      "result": [\n        "0x3",\n        "0x1",\n        "0x1",\n        ...\n      ]\n    },\n    "state_diff": {\n      "declared_classes": [],\n      "deployed_contracts": [],\n      "deprecated_declared_classes": [],\n      "nonces": [\n        {\n          "contract_address": "0x569b13e8164bc8000c0bbcf4887856516643af123c5bc3b01e229e92f9cfd10",\n          "nonce": "0x52"\n        }\n      ],\n      "replaced_classes": [],\n      "storage_diffs": [\n        {\n          "address": "0xfff107e2403123c7df78d91728a7ee5cfd557aec0fa2d2bdc5891c286bbfff",\n          "storage_entries": [\n            {\n              "key": "0x2bc92130481261ac8ebf05490c8f1799f651a4ebd2d64f0101f2a3f41bb441",\n              "value": "0x569b13e8164bc8000c0bbcf4887856516643af123c5bc3b01e229e92f9cfd10"\n            },\n            {\n              "key": "0x180cda4fd6c0599dc8ed498cc36eb9cab3ecad0efb3ccfd59043fbdd692374b",\n              "value": "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"\n            },\n            ...\n          ]\n        },\n        {\n          "address": "0x1114c7103e12c2b2ecbd3a2472ba9c48ddcbf702b1c242dd570057e26212111",\n          "storage_entries": [\n            {\n              "key": "0x3fa65d6912e7d8d82b149d0cc034a285d8c33ae49e659642a4fd2e380937b7",\n              "value": "0x74272944c439"\n            },\n            {\n              "key": "0x3fa65d6912e7d8d82b149d0cc034a285d8c33ae49e659642a4fd2e380937b8",\n              "value": "0x648be4d87207"\n            },\n            ...\n          ]\n        },\n        {\n          "address": "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",\n          "storage_entries": [\n            {\n              "key": "0x14b36f2f827c4728ecac41e90cf996e64c4b20c345087b6be56bbe680051a1f",\n              "value": "0x70e0d9aa29d9c159a"\n            },\n            {\n              "key": "0x367c2ac2e63b88cb4382f26a49c62b1dfecb966e92138c574cfbec611723cce",\n              "value": "0x11ba205d123d0fb"\n            },\n            ...\n          ]\n        },\n        {\n          "address": "0x68f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8",\n          "storage_entries": [\n            {\n              "key": "0x14b36f2f827c4728ecac41e90cf996e64c4b20c345087b6be56bbe680051a1f",\n              "value": "0x1860959920"\n            },\n            {\n              "key": "0x367c2ac2e63b88cb4382f26a49c62b1dfecb966e92138c574cfbec611723cce",\n              "value": "0x11b0dac6"\n            },\n            ...\n          ]\n        }\n      ]\n    },\n    "type": "INVOKE"\n  }\n}\n'})})})})]})}function b(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>s});a(96540);var t=a(18215);const c={tabItem:"tabItem_Ymn6"};var r=a(74848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(c.tabItem,s),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(96540),c=a(18215),r=a(23104),s=a(56347),d=a(205),o=a(57485),l=a(31682),i=a(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:c}}=e;return{value:n,label:a,attributes:t,default:c}}))}(a);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function b(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const c=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(c.location.search);n.set(r,e),c.replace({...c.location,search:n.toString()})}),[r,c])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:c}=e,r=f(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[l,u]=p({queryString:a,groupId:c}),[h,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,r]=(0,i.Dv)(a);return[c,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:c}),m=(()=>{const e=l??h;return b({value:e,tabValues:r})?e:null})();(0,d.A)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=a(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function k(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),i=e=>{const n=e.currentTarget,a=o.indexOf(n),c=d[a].value;c!==t&&(l(n),s(c))},u=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":a},n),children:d.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:i,...r,className:(0,c.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function _(e){let{lazy:n,children:a,selectedValue:c}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===c));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function g(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,c.A)("tabs-container",m.tabList),children:[(0,v.jsx)(k,{...n,...e}),(0,v.jsx)(_,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,v.jsx)(g,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>d});var t=a(96540);const c={},r=t.createContext(c);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);