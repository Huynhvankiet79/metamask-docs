"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[97706],{46013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(74848),s=n(28453),r=n(11470),i=n(19365);const l={title:"linea_estimateGas"},o="linea_estimateGas",c={id:"api/networks/linea/json-rpc-methods/linea_estimategas",title:"linea_estimateGas",description:"Generates and returns the estimated amount of gas required to allow the transaction to complete and be",source:"@site/services/api/networks/linea/json-rpc-methods/linea_estimategas.mdx",sourceDirName:"api/networks/linea/json-rpc-methods",slug:"/api/networks/linea/json-rpc-methods/linea_estimategas",permalink:"/test-integrate-infura/services/api/networks/linea/json-rpc-methods/linea_estimategas",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/linea/json-rpc-methods/linea_estimategas.mdx",tags:[],version:"current",frontMatter:{title:"linea_estimateGas"},sidebar:"servicesSidebar",previous:{title:"eth_syncing",permalink:"/test-integrate-infura/services/api/networks/linea/json-rpc-methods/eth_syncing"},next:{title:"net_listening",permalink:"/test-integrate-infura/services/api/networks/linea/json-rpc-methods/net_listening"}},d={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"linea_estimategas",children:(0,a.jsx)(t.code,{children:"linea_estimateGas"})}),"\n",(0,a.jsx)(t.p,{children:"Generates and returns the estimated amount of gas required to allow the transaction to complete and be\npublished on Ethereum. The method does not submit the transaction to the blockchain."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"priorityFeePerGas"})," returned by this method includes the cost of submitting the transaction to Ethereum, which\ncan vary based on the size of the ",(0,a.jsx)(t.code,{children:"calldata"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["For more information about estimating gas, and how this API formulates the transaction costs, see the\n",(0,a.jsx)(t.a,{href:"https://docs.linea.build/build-on-linea/gas-fees",children:"gas fees topic"})," in the Linea documentation."]})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"linea_estimateGas"})," uses the same inputs as the standard ",(0,a.jsx)(t.a,{href:"https://docs.infura.io/api/networks/linea/json-rpc-methods/eth_estimategas",children:(0,a.jsx)(t.code,{children:"eth_estimateGas"})}),",\nbut returns the recommended gas limit, the base fee per gas, and the priority fee per gas.\nWe recommend using ",(0,a.jsx)(t.code,{children:"linea_estimateGas"})," for more accurate results."]})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"TRANSACTION CALL OBJECT"})," ",(0,a.jsx)(t.em,{children:"[required]"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"from"}),": ",(0,a.jsx)(t.em,{children:"[optional]"})," 20 bytes - The address the transaction is sent from."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"to"}),": ",(0,a.jsx)(t.em,{children:"[optional]"})," 20 bytes - The address the transaction is directed to."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"gas"}),": ",(0,a.jsx)(t.em,{children:"[optional]"})," Hexadecimal value of the gas provided for the transaction execution. ",(0,a.jsx)(t.code,{children:"linea_estimateGas"})," consumes\nzero gas, but this parameter may be needed by some executions."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"gasPrice"}),": ",(0,a.jsx)(t.em,{children:"[optional]"})," Hexadecimal value of the gas price used for each paid gas."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"maxPriorityFeePerGas"}),": ",(0,a.jsx)(t.em,{children:"[optional]"})," Maximum fee, in wei, the sender is willing to pay per gas above the base fee."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"maxFeePerGas"}),": ",(0,a.jsx)(t.em,{children:"[optional]"})," Maximum total fee (base fee + priority fee), in wei, the sender is willing to pay per gas."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"value"}),": ",(0,a.jsx)(t.em,{children:"[optional]"})," Hexadecimal value of the value sent with this transaction."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"data"}),": ",(0,a.jsx)(t.em,{children:"[optional]"})," Hash of the method signature and encoded parameters. See the\n",(0,a.jsx)(t.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html",children:"Ethereum contract ABI specification"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"block number"}),": ",(0,a.jsx)(t.em,{children:"[optional]"})," A string representing a block number, or one of the string tags\n",(0,a.jsx)(t.code,{children:"latest"}),", ",(0,a.jsx)(t.code,{children:"earliest"}),", ",(0,a.jsx)(t.code,{children:"pending"}),", ",(0,a.jsx)(t.code,{children:"safe"}),", or ",(0,a.jsx)(t.code,{children:"finalized"}),".\nSee the ",(0,a.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"Hexidecimal values representing the recommended gas limit, the base fee per gas, and the priority fee per gas."}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["Replace ",(0,a.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,a.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(i.A,{value:"cURL",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl https://linea-mainnet.infura.io/v3/YOUR-API-KEY \\\n        -X POST \\\n        -H "Content-Type: application/json" \\\n        -d \'{"jsonrpc":"2.0","method":"linea_estimateGas","params":[{"from":"0x42c27251C710864Cf76f1b9918Ace3E585e6E21b","value":"0x1","gasPrice":"0x100000000","gas":"0x21000"}],"id":53}\'\n'})})}),(0,a.jsx)(i.A,{value:"WSS",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'wscat -c wss://linea-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"linea_estimateGas","params":[{"from":"0x42c27251C710864Cf76f1b9918Ace3E585e6E21b","value":"0x1","gasPrice":"0x100000000","gas":"0x21000"}],"id":53}\'\n'})})})]}),"\n",(0,a.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(i.A,{value:"JSON",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-JSON",children:'{\n  "jsonrpc": "2.0",\n  "id": 53,\n  "result": {\n    "baseFeePerGas": "0x7",\n    "gasLimit": "0xcf08",\n    "priorityFeePerGas": "0x43a82a4"\n  }\n}\n'})})})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(18215);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),s=n(18215),r=n(23104),i=n(56347),l=n(205),o=n(57485),c=n(31682),d=n(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,u]=p({queryString:n,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),b=(()=>{const e=c??f;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==a&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);