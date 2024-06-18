"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[30671],{59523:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>a});var r=t(74848),s=t(28453);const a=[];function c(e){const n={p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(n.p,{children:"Returns information about a transaction given block number and transaction index position."})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},80227:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>a});var r=t(74848),s=t(28453);const a=[];function c(e){const n={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},43817:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>a});var r=t(74848),s=t(28453);const a=[];function c(e){const n={a:"a",code:"code",em:"em",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"block parameter"}),": [",(0,r.jsx)(n.em,{children:"Required"}),"] A hexadecimal block number, or one of the string tags ",(0,r.jsx)(n.code,{children:"latest"}),", ",(0,r.jsx)(n.code,{children:"earliest"}),", ",(0,r.jsx)(n.code,{children:"pending"}),", ",(0,r.jsx)(n.code,{children:"safe"}),", or ",(0,r.jsx)(n.code,{children:"finalized"}),". See the ",(0,r.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transaction index position"}),": [",(0,r.jsx)(n.em,{children:"Required"}),"] A hexadecimal of the integer representing the position in the block."]}),"\n"]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},52193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>j,toc:()=>g});var r=t(74848),s=t(28453),a=t(11470),c=t(19365),i=t(59523),o=t(43817);function l(e){const n={a:"a",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A transaction object, or null when no transaction was found. The transaction object will consist of the following keys and their values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"accessList"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] A list of addresses and storage keys accessed by the transaction. See ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/concepts/transaction-types#access-list-transactions",children:"access list transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHash"}),": 32 bytes. A hash of the block including this transaction. ",(0,r.jsx)(n.code,{children:"null"})," when it's pending."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockNumber"}),": The number of the block including this transaction. ",(0,r.jsx)(n.code,{children:"null"})," when it's pending."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chainID"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] chain ID specifying the network. Returned only for ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from"}),": 20 bytes. The address of the sender."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gas"}),": Gas provided by the sender."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gasPrice"}),": Gas price provided by the sender in Wei."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": 32 bytes. The hash of the transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"input"}),": The data sent along with the transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxPriorityFeePerGas"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] Maximum fee, in Wei, the sender is willing to pay per gas above the base fee. See ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxFeePerGas"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] Maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. See ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nonce"}),": The number of transactions made by the sender prior to this one."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"r"}),": 32 bytes. The ECDSA signature ",(0,r.jsx)(n.code,{children:"r"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"s"}),": 32 bytes. The ECDSA signature ",(0,r.jsx)(n.code,{children:"s"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"to"}),": 20 bytes. The address of the receiver. ",(0,r.jsx)(n.code,{children:"null"})," when it's a contract creation transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionIndex"}),": The transaction's index position in the block, in hexadecimal. ",(0,r.jsx)(n.code,{children:"null"})," when it's pending."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"}),": The ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/concepts/transaction-types",children:"transaction type"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"v"}),": The ECDSA recovery ID."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"}),": The value transferred in Wei."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yParity"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] Parity (",(0,r.jsx)(n.code,{children:"0x0"})," for even, ",(0,r.jsx)(n.code,{children:"0x1"})," for odd) of the y-value of a\n",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-2098#:~:text=A%20secp256k1%20signature%20is%20made%20up%20of%203%20parameters%2C%20r%2C%20s%20and%20yParity.",children:(0,r.jsx)(n.code,{children:"secp256k1"})})," signature."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}var u=t(80227);function h(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(a.A,{children:[(0,r.jsx)(c.A,{value:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_getTransactionByBlockNumberAndIndex","params": ["0x5BAD55","0x0"],"id":1}\'\n'})})}),(0,r.jsx)(c.A,{value:"WSS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_getTransactionByBlockNumberAndIndex","params": ["0x5BAD55","0x0"],"id":1}\'\n'})})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function p(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(a.A,{children:(0,r.jsx)(c.A,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "id" : 1,\n   "jsonrpc" : "2.0",\n   "result" : {\n      "accessList":[],\n      "blockHash":"0x1682216b3a937e57aeb8c7fcf64a8851ac9a5dd2407f7a76e01aad1ccc0aee19",\n      "blockNumber":"0x11dca94",\n      "chainId":"0x1",\n      "from":"0x1f9090aae28b8a3dceadf281b0f12828e676c326",\n      "gas":"0x565f",\n      "gasPrice":"0xef8230501",\n      "hash":"0x140fc3229057d6a484227cbcae16331f586310f68f2095dbc75b3af53d4874bd",\n      "input":"0x",\n      "maxFeePerGas":"0xef8230501",\n      "maxPriorityFeePerGas":"0x0",\n      "nonce":"0x63b1f",\n      "r":"0x483a889fdbe4bcebd02fcef8b0644dd710de2b2b2f36f4762b90738016e5c639",\n      "s":"0x39efb4a71072e6585223e9e77e63920fa65f3de5091d510667782d4cd34ce0a4",\n      "to":"0x388c818ca8b9251b393131c08a736a67ccb19297",\n      "transactionIndex":"0xa4",\n      "type":"0x2",\n      "v":"0x1",\n      "value":"0x12ff2241f48fc83",\n      "yParity":"0x1"\n   }\n}\n'})})})})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}const m={title:"eth_getTransactionByBlockNumberAndIndex"},b=void 0,j={id:"reference/ethereum/json-rpc-methods/eth_gettransactionbyblocknumberandindex",title:"eth_getTransactionByBlockNumberAndIndex",description:"Parameters",source:"@site/services/reference/ethereum/json-rpc-methods/eth_gettransactionbyblocknumberandindex.mdx",sourceDirName:"reference/ethereum/json-rpc-methods",slug:"/reference/ethereum/json-rpc-methods/eth_gettransactionbyblocknumberandindex",permalink:"/test-integrate-infura/services/reference/ethereum/json-rpc-methods/eth_gettransactionbyblocknumberandindex",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/ethereum/json-rpc-methods/eth_gettransactionbyblocknumberandindex.mdx",tags:[],version:"current",frontMatter:{title:"eth_getTransactionByBlockNumberAndIndex"},sidebar:"servicesSidebar",previous:{title:"eth_getTransactionByBlockHashAndIndex",permalink:"/test-integrate-infura/services/reference/ethereum/json-rpc-methods/eth_gettransactionbyblockhashandindex"},next:{title:"eth_getTransactionByHash",permalink:"/test-integrate-infura/services/reference/ethereum/json-rpc-methods/eth_gettransactionbyhash"}},v={},g=[...i.RM,{value:"Parameters",id:"parameters",level:2},...o.RM,{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function y(e){const n={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(u.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(x,{}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(f,{})]})}function k(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),s=t(18215),a=t(23104),c=t(56347),i=t(205),o=t(57485),l=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,c.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[c,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,u]=p({queryString:t,groupId:s}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=l??f;return x({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(l(n),c(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);