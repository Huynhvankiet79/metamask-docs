"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[63644],{24575:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance."}),"\n",(0,r.jsx)(t.admonition,{title:"Gas parameter is capped",type:"warning",children:(0,r.jsxs)(t.p,{children:["To prevent abuse of the API, the ",(0,r.jsx)(t.code,{children:"gas"})," parameter in this ",(0,r.jsx)(t.code,{children:"eth_estimateGas"})," method and in ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/eth_call",children:(0,r.jsx)(t.code,{children:"eth_call"})})," is capped at 10x (1000%) the current block gas limit. You can recreate this behavior in your local test environment (besu, geth, or other client) via the ",(0,r.jsx)(t.a,{href:"https://geth.ethereum.org/docs/fundamentals/command-line-options#commands",children:(0,r.jsx)(t.code,{children:"rpc.gascap"})})," command-line option."]})})]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},3991:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},36069:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={a:"a",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"TRANSACTION CALL OBJECT"})," ",(0,r.jsx)(t.em,{children:"[required]"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"from"}),": ",(0,r.jsx)(t.em,{children:"[optional]"})," 20 Bytes - The address the transaction is sent from."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"to"}),": 20 Bytes - The address the transaction is directed to."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"gas"}),": ",(0,r.jsx)(t.em,{children:"[optional]"})," Hexadecimal value of the gas provided for the transaction execution. ",(0,r.jsx)(t.code,{children:"eth_estimateGas"})," consumes\nzero gas, but this parameter may be needed by some executions."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"gasPrice"}),": ",(0,r.jsx)(t.em,{children:"[optional]"})," Hexadecimal value of the gas price used for each paid gas."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"maxPriorityFeePerGas"}),": ",(0,r.jsx)(t.em,{children:"[optional]"})," Maximum fee, in Wei, the sender is willing to pay per gas above the base fee.\nSee ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"maxFeePerGas"}),": ",(0,r.jsx)(t.em,{children:"[optional]"})," Maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas.\nSee ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"value"}),": ",(0,r.jsx)(t.em,{children:"[optional]"})," Hexadecimal value of the value sent with this transaction."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"data"}),": ",(0,r.jsx)(t.em,{children:"[optional]"})," Hash of the method signature and encoded parameters. See the\n",(0,r.jsx)(t.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html",children:"Ethereum contract ABI specification"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"block number"}),": ",(0,r.jsx)(t.em,{children:"[required]"})," A string representing a block number, or one of the string tags\n",(0,r.jsx)(t.code,{children:"latest"}),", ",(0,r.jsx)(t.code,{children:"earliest"}),", ",(0,r.jsx)(t.code,{children:"pending"}),", ",(0,r.jsx)(t.code,{children:"safe"}),", or ",(0,r.jsx)(t.code,{children:"finalized"}),".\nSee the ",(0,r.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If no gas limit is specified, geth uses the block gas limit from the pending block as an upper bound. As a result the\nreturned estimate might not be enough to executed the call/transaction when the amount of gas is higher than the pending\nblock gas limit."})]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},95152:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>i});var r=n(74848),s=n(28453),a=n(11470),o=n(19365);const i=[];function c(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(a.A,{children:(0,r.jsx)(o.A,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x5cec"\n}\n'})})})})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},61e3:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"A hexadecimal of the estimate of the gas for the given transaction."}),"\n",(0,r.jsxs)(t.p,{children:["If this call causes the EVM to execute a ",(0,r.jsx)(t.code,{children:"REVERT"})," operation, an error response of the following form is returned, with the revert reason pre-decoded as a string:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "error": {\n    "code": 3,\n    "message": "execution reverted: Dai/insufficient-balance",\n    "data": "0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000184461692f696e73756666696369656e742d62616c616e63650000000000000000"\n  }\n}\n'})})]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},96411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>f,default:()=>v,frontMatter:()=>m,metadata:()=>x,toc:()=>b});var r=n(74848),s=n(28453),a=n(11470),o=n(19365),i=n(24575),c=n(36069),l=n(61e3),d=n(3991);function u(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"cURL",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl https://mainnet.infura.io/v3/YOUR-API-KEY \\\n        -X POST \\\n        -H "Content-Type: application/json" \\\n        -d \'{"jsonrpc":"2.0","method":"eth_estimateGas","params": [{"from": "0x9cE564c7d09f88E7d8233Cdd3A4d7AC42aBFf3aC","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","value": "0x9184e72a"}],"id":1}\'\n'})})}),(0,r.jsx)(o.A,{value:"WSS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'wscat -c wss://mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_estimateGas","params": [{"from": "0x9cE564c7d09f88E7d8233Cdd3A4d7AC42aBFf3aC","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","value": "0x9184e72a"}],"id":1}\'\n'})})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}var p=n(95152);const m={title:"eth_estimateGas"},f=void 0,x={id:"network-apis/ethereum/json-rpc-methods/eth_estimategas",title:"eth_estimateGas",description:"Parameters",source:"@site/services/network-apis/ethereum/json-rpc-methods/eth_estimategas.mdx",sourceDirName:"network-apis/ethereum/json-rpc-methods",slug:"/network-apis/ethereum/json-rpc-methods/eth_estimategas",permalink:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/eth_estimategas",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/ethereum/json-rpc-methods/eth_estimategas.mdx",tags:[],version:"current",frontMatter:{title:"eth_estimateGas"},sidebar:"servicesSidebar",previous:{title:"eth_createAccessList",permalink:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/eth_createaccesslist"},next:{title:"eth_feeHistory",permalink:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/eth_feehistory"}},j={},b=[...i.RM,{value:"Parameters",id:"parameters",level:2},...c.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function g(e){const t={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(p.Ay,{})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(18215),a=n(23104),o=n(56347),i=n(205),c=n(57485),l=n(31682),d=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,u]=m({queryString:n,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),j=(()=>{const e=l??f;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),s=i[n].value;s!==r&&(l(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);