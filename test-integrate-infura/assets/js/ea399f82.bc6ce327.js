"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[99802],{62499:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>a});var r=t(74848),s=t(28453);const a=[];function c(e){const n={p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(n.p,{children:"Returns information about a transaction for a given hash."})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},34659:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>a});var r=t(74848),s=t(28453);const a=[];function c(e){const n={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},13065:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>a});var r=t(74848),s=t(28453);const a=[];function c(e){const n={code:"code",em:"em",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"transaction hash"}),": [",(0,r.jsx)(n.em,{children:"Required"}),"] A string representing the hash (32 bytes) of a transaction."]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},26217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>m,default:()=>w,frontMatter:()=>b,metadata:()=>j,toc:()=>g});var r=t(74848),s=t(28453),a=t(11470),c=t(19365),i=t(62499),o=t(13065);function l(e){const n={a:"a",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A transaction object, or null when no transaction was found. The transaction object will consist of the following keys and their values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"accessList"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] A list of addresses and storage keys accessed by the transaction. See ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/transaction-types#access-list-transactions",children:"access list transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHash"}),": 32 bytes. A hash of the block including this transaction. ",(0,r.jsx)(n.code,{children:"null"})," when it's pending."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockNumber"}),": The number of the block including this transaction. ",(0,r.jsx)(n.code,{children:"null"})," when it's pending."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chainID"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] chain ID specifying the network. Returned only for ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from"}),": 20 bytes. The address of the sender."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gas"}),": Gas provided by the sender."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gasPrice"}),": Gas price provided by the sender in Wei."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": 32 bytes. The hash of the transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"input"}),": The data sent along with the transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxPriorityFeePerGas"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] Maximum fee, in Wei, the sender is willing to pay per gas above the base fee. See ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxFeePerGas"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] Maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. See ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nonce"}),": The number of transactions made by the sender prior to this one."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"r"}),": 32 bytes. The ECDSA signature ",(0,r.jsx)(n.code,{children:"r"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"s"}),": 32 bytes. The ECDSA signature ",(0,r.jsx)(n.code,{children:"s"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"to"}),": 20 bytes. The address of the receiver. ",(0,r.jsx)(n.code,{children:"null"})," when it's a contract creation transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionIndex"}),": The transaction's index position in the block, in hexadecimal. ",(0,r.jsx)(n.code,{children:"null"})," when it's pending."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"}),": The ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/transaction-types",children:"transaction type"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"v"}),": The ECDSA recovery ID."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"}),": The value transferred in Wei."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yParity"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] Parity (",(0,r.jsx)(n.code,{children:"0x0"})," for even, ",(0,r.jsx)(n.code,{children:"0x1"})," for odd) of the y-value of a\n",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-2098#:~:text=A%20secp256k1%20signature%20is%20made%20up%20of%203%20parameters%2C%20r%2C%20s%20and%20yParity.",children:(0,r.jsx)(n.code,{children:"secp256k1"})})," signature."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}var u=t(34659);function h(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(a.A,{children:[(0,r.jsx)(c.A,{value:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}\'\n'})})}),(0,r.jsx)(c.A,{value:"WSS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}\'\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function f(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(a.A,{children:(0,r.jsx)(c.A,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "id":1,\n    "jsonrpc":"2.0",\n    "result":{\n      "accessList":[],\n      "blockHash":"0x0155db99111f10086bad292d3bd0be9472aff9cf0f33d7d35f2db4814ffad0f6",\n      "blockNumber":"0x112418d",\n      "chainId":"0x1",\n      "from":"0xe2a467bfe1e1bedcdf1343d3a45f60c50e988696",\n      "gas":"0x3c546",\n      "gasPrice":"0x20706def53",\n      "hash":"0xce0aadd04968e21f569167570011abc8bc17de49d4ae3aed9476de9e03facff9",\n      "input":"0xb6f9de9500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000e2a467bfe1e1bedcdf1343d3a45f60c50e9886960000000000000000000000000000000000000000000000000000000064e54a3b0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000de15b9919539113a1930d3eed5088cd10338abb5",\n      "maxFeePerGas":"0x22b05d8efd",\n      "maxPriorityFeePerGas":"0x1bf08eb000",\n      "nonce":"0x12c",\n      "r":"0xa07fd6c16e169f0e54b394235b3a8201101bb9d0eba9c8ae52dbdf556a363388",\n      "s":"0x36f5da9310b87fefbe9260c3c05ec6cbefc426f1ff3b3a41ea21b5533a787dfc",\n      "to":"0x7a250d5630b4cf539739df2c5dacb4c659f2488d",\n      "transactionIndex":"0x0",\n      "type":"0x2",\n      "v":"0x1",\n      "value":"0x2c68af0bb140000",\n      "yParity":"0x1"\n   }\n}\n'})})})})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}const b={title:"eth_getTransactionByHash"},m=void 0,j={id:"api/networks/ethereum/json-rpc-methods/eth_gettransactionbyhash",title:"eth_getTransactionByHash",description:"Parameters",source:"@site/services/api/networks/ethereum/json-rpc-methods/eth_gettransactionbyhash.mdx",sourceDirName:"api/networks/ethereum/json-rpc-methods",slug:"/api/networks/ethereum/json-rpc-methods/eth_gettransactionbyhash",permalink:"/test-integrate-infura/services/api/networks/ethereum/json-rpc-methods/eth_gettransactionbyhash",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/ethereum/json-rpc-methods/eth_gettransactionbyhash.mdx",tags:[],version:"current",frontMatter:{title:"eth_getTransactionByHash"},sidebar:"servicesSidebar",previous:{title:"eth_getTransactionByBlockNumberAndIndex",permalink:"/test-integrate-infura/services/api/networks/ethereum/json-rpc-methods/eth_gettransactionbyblocknumberandindex"},next:{title:"eth_getTransactionCount",permalink:"/test-integrate-infura/services/api/networks/ethereum/json-rpc-methods/eth_gettransactioncount"}},v={},g=[...i.RM,{value:"Parameters",id:"parameters",level:2},...o.RM,{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function y(e){const n={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(u.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(x,{})]})}function w(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(18215),a=t(23104),c=t(56347),i=t(205),o=t(57485),l=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,c.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[c,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,u]=f({queryString:t,groupId:s}),[x,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),m=(()=>{const e=l??x;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(l(n),c(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);