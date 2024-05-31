"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[77726],{29795:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var r=t(74848),s=t(28453);const a=[];function i(e){const n={p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(n.p,{children:"Returns information about a transaction given block hash and transaction index position."})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},12227:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var r=t(74848),s=t(28453);const a=[];function i(e){const n={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},65801:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var r=t(74848),s=t(28453);const a=[];function i(e){const n={code:"code",em:"em",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"block hash"}),": [",(0,r.jsx)(n.em,{children:"Required"}),"] A string representing the hash (32 bytes) of a block."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transaction index position"}),": [",(0,r.jsx)(n.em,{children:"Required"}),"] A hexadecimal of the integer representing the position in the block."]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},76324:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>c});var r=t(74848),s=t(28453),a=t(11470),i=t(19365);const c=[];function o(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(a.A,{children:(0,r.jsx)(i.A,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "id" : 1,\n   "jsonrpc" : "2.0",\n   "result" : {\n      "blockHash" : "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",\n      "blockNumber" : "0x5bad55",\n      "chainId" : "0x1",\n      "from" : "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98",\n      "gas" : "0x249f0",\n      "gasPrice" : "0x174876e800",\n      "hash" : "0x8784d99762bccd03b2086eabccee0d77f14d05463281e121a62abfebcf0d2d5f",\n      "input" : "0x6ea056a9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bd8d7fa6f8cc00",\n      "nonce" : "0x5e4724",\n      "r" : "0xd1556332df97e3bd911068651cfad6f975a30381f4ff3a55df7ab3512c78b9ec",\n      "s" : "0x66b51cbb10cd1b2a09aaff137d9f6d4255bf73cb7702b666ebd5af502ffa4410",\n      "to" : "0x4b9c25ca0224aef6a7522cabdbc3b2e125b7ca50",\n      "transactionIndex" : "0x0",\n      "type" : "0x0",\n      "v" : "0x25",\n      "value" : "0x0"\n   }\n}\n'})})})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},13492:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var r=t(74848),s=t(28453);const a=[];function i(e){const n={a:"a",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A transaction object, or null when no transaction was found. The transaction object will consist of the following keys and their values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"accessList"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] A list of addresses and storage keys accessed by the transaction. See ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/transaction-types#access-list-transactions",children:"access list transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHash"}),": 32 bytes. A hash of the block including this transaction. ",(0,r.jsx)(n.code,{children:"null"})," when it's pending."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockNumber"}),": The number of the block including this transaction. ",(0,r.jsx)(n.code,{children:"null"})," when it's pending."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chainID"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] chain ID specifying the network. Returned only for ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from"}),": 20 bytes. The address of the sender."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gas"}),": Gas provided by the sender."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gasPrice"}),": Gas price provided by the sender in Wei."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": 32 bytes. The hash of the transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"input"}),": The data sent along with the transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxPriorityFeePerGas"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] Maximum fee, in Wei, the sender is willing to pay per gas above the base fee. See ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxFeePerGas"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] Maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. See ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nonce"}),": The number of transactions made by the sender prior to this one."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"r"}),": 32 bytes. The ECDSA signature ",(0,r.jsx)(n.code,{children:"r"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"s"}),": 32 bytes. The ECDSA signature ",(0,r.jsx)(n.code,{children:"s"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"to"}),": 20 bytes. The address of the receiver. ",(0,r.jsx)(n.code,{children:"null"})," when it's a contract creation transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionIndex"}),": The transaction's index position in the block, in hexadecimal. ",(0,r.jsx)(n.code,{children:"null"})," when it's pending."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"}),": The ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/transaction-types",children:"transaction type"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"v"}),": The ECDSA recovery ID."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"}),": The value transferred in Wei."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},3841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>f,default:()=>g,frontMatter:()=>x,metadata:()=>b,toc:()=>j});var r=t(74848),s=t(28453),a=t(11470),i=t(19365),c=t(29795),o=t(65801),l=t(13492),d=t(12227);function u(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(a.A,{children:(0,r.jsx)(i.A,{value:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://mantle-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndIndex","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35","0x0"],"id":1}\'\n'})})})})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}var p=t(76324);const x={title:"eth_getTransactionByBlockHashAndIndex"},f=void 0,b={id:"api/networks/mantle/json-rpc-methods/eth_gettransactionbyblockhashandindex",title:"eth_getTransactionByBlockHashAndIndex",description:"Parameters",source:"@site/services/api/networks/mantle/json-rpc-methods/eth_gettransactionbyblockhashandindex.mdx",sourceDirName:"api/networks/mantle/json-rpc-methods",slug:"/api/networks/mantle/json-rpc-methods/eth_gettransactionbyblockhashandindex",permalink:"/test-integrate-infura/services/api/networks/mantle/json-rpc-methods/eth_gettransactionbyblockhashandindex",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/mantle/json-rpc-methods/eth_gettransactionbyblockhashandindex.mdx",tags:[],version:"current",frontMatter:{title:"eth_getTransactionByBlockHashAndIndex"},sidebar:"servicesSidebar",previous:{title:"eth_getStorageAt",permalink:"/test-integrate-infura/services/api/networks/mantle/json-rpc-methods/eth_getstorageat"},next:{title:"eth_getTransactionByBlockNumberAndIndex",permalink:"/test-integrate-infura/services/api/networks/mantle/json-rpc-methods/eth_gettransactionbyblocknumberandindex"}},m={},j=[...c.RM,{value:"Parameters",id:"parameters",level:2},...o.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function v(e){const n={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(p.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),s=t(18215),a=t(23104),i=t(56347),c=t(205),o=t(57485),l=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,u]=x({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),m=(()=>{const e=l??f;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=c[t].value;s!==r&&(l(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);