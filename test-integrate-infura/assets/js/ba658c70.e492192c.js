"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6517],{27065:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var r=t(74848),s=t(28453);const o=[];function a(e){const n={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["Returns an array of all the logs matching the given filter object. See also the below ",(0,r.jsx)(n.a,{href:"#constraints",children:"Constraints"})," section."]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},70629:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var r=t(74848),s=t(28453);const o=[];function a(e){const n={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},90955:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var r=t(74848),s=t(28453);const o=[];function a(e){const n={a:"a",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A filter object containing the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": [",(0,r.jsx)(n.em,{children:"optional"}),"] Contract address (20 bytes) or a list of addresses from which logs should originate."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fromBlock"}),": ",(0,r.jsx)(n.em,{children:'[optional, default is "latest"]'})," A hexadecimal block number, or one of the string tags ",(0,r.jsx)(n.code,{children:"latest"}),", ",(0,r.jsx)(n.code,{children:"earliest"}),", ",(0,r.jsx)(n.code,{children:"pending"}),", ",(0,r.jsx)(n.code,{children:"safe"}),", or ",(0,r.jsx)(n.code,{children:"finalized"}),". See the ",(0,r.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"toBlock"}),": ",(0,r.jsx)(n.em,{children:'[optional, default is "latest"]'})," A hexadecimal block number, or one of the string tags ",(0,r.jsx)(n.code,{children:"latest"}),", ",(0,r.jsx)(n.code,{children:"earliest"}),", ",(0,r.jsx)(n.code,{children:"pending"}),", ",(0,r.jsx)(n.code,{children:"safe"}),", or ",(0,r.jsx)(n.code,{children:"finalized"}),". See the ",(0,r.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"topics"}),": ",(0,r.jsx)(n.em,{children:"[optional]"})," Array of 32 bytes DATA topics. Topics are order-dependent."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockhash"}),": ",(0,r.jsx)(n.em,{children:"[optional]"})," Restricts the logs returned to the single block referenced in the 32-byte hash ",(0,r.jsx)(n.code,{children:"blockHash"}),". Using ",(0,r.jsx)(n.code,{children:"blockHash"})," is equivalent to setting ",(0,r.jsx)(n.code,{children:"fromBlock"})," and  ",(0,r.jsx)(n.code,{children:"toBlock"})," to the block number referenced in the ",(0,r.jsx)(n.code,{children:"blockHash"}),". If ",(0,r.jsx)(n.code,{children:"blockHash"})," is present in in the filter criteria, then neither ",(0,r.jsx)(n.code,{children:"fromBlock"})," nor ",(0,r.jsx)(n.code,{children:"toBlock"})," are allowed."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},75222:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>c});var r=t(74848),s=t(28453),o=t(11470),a=t(19365);const c=[{value:"Constraints",id:"constraints",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{children:(0,r.jsx)(a.A,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "address": "0x1a94fce7ef36bc90959e206ba569a12afbc91ca1",\n      "blockHash": "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70",\n      "blockNumber": "0x5c29fb",\n      "data": "0x0000000000000000000000003e3310720058c51f0de456e273c626cdd35065700000000000000000000000000000000000000000000000000000000000003185000000000000000000000000000000000000000000000000000000000000318200000000000000000000000000000000000000000000000000000000005c2a23",\n      "logIndex": "0x1d",\n      "removed": false,\n      "topics": [\n        "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"\n      ],\n      "transactionHash": "0x3dc91b98249fa9f2c5c37486a2427a3a7825be240c1c84961dfb3063d9c04d50",\n      "transactionIndex": "0x1d"\n    },\n    {\n      "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",\n      "blockHash": "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70",\n      "blockNumber": "0x5c29fb",\n      "data": "0x00000000000000000000000077ea137625739598666ded665953d26b3d8e374400000000000000000000000000000000000000000000000000000000000749ff00000000000000000000000000000000000000000000000000000000000a749d00000000000000000000000000000000000000000000000000000000005c2a0f",\n      "logIndex": "0x57",\n      "removed": false,\n      "topics": [\n        "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"\n      ],\n      "transactionHash": "0x788b1442414cb9c9a36dba2abe250763161a6f6395788a2e808f1b34e92beec1",\n      "transactionIndex": "0x54"\n    }\n  ]\n}\n'})})})}),"\n",(0,r.jsx)(n.h2,{id:"constraints",children:"Constraints"}),"\n",(0,r.jsx)(n.p,{children:"The following constraints apply:"}),"\n",(0,r.jsxs)(n.p,{children:["To prevent queries from consuming too many resources, ",(0,r.jsx)(n.code,{children:"eth_getLogs"})," requests are currently limited by three constraints:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A maximum of 5,000 parameters in a single request"}),"\n",(0,r.jsx)(n.li,{children:"A maximum of 10,000 results can be returned by a single query"}),"\n",(0,r.jsx)(n.li,{children:"Query duration must not exceed 10 seconds"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If a query returns too many results or exceeds the max query duration, one of the following errors is returned:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "error": {\n    "code": -32005,\n    "message": "query returned more than 10000 results"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "error": {\n    "code": -32005,\n    "message": "query timeout exceeded"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"If this happens:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Limit your query to a smaller number of blocks using ",(0,r.jsx)(n.code,{children:"fromBlock"})," and ",(0,r.jsx)(n.code,{children:"toBlock"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If querying for commonly used ",(0,r.jsx)(n.code,{children:"topics"}),", consider limiting to a single smart contract ",(0,r.jsx)(n.code,{children:"address"}),"."]}),"\n"]})]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28382:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var r=t(74848),s=t(28453);const o=[];function a(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"log objects"}),": An array of log objects, or an empty array if nothing has changed since last poll. Log objects contain the following keys and their values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"removed"}),": (boolean) ",(0,r.jsx)(n.code,{children:"true"})," when the log was removed, due to a chain reorganization. ",(0,r.jsx)(n.code,{children:"false"})," if it's a valid log."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"logIndex"}),": Hexadecimal of the log index position in the block. ",(0,r.jsx)(n.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionIndex"}),": Hexadecimal of the transactions index position from which the log created. ",(0,r.jsx)(n.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionHash"}),": 32 bytes. Hash of the transactions from which this log was created. ",(0,r.jsx)(n.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHash"}),": 32 bytes. Hash of the block where this log was in. ",(0,r.jsx)(n.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockNumber"}),": Block number where this log was in. ",(0,r.jsx)(n.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": 20 bytes. Address from which this log originated."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"}),": Contains one or more 32-bytes non-indexed arguments of the log."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"topics"}),": An array of 0 to 4 indexed log arguments, each 32 bytes. In solidity the first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except when you declared the event with the anonymous specifier."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},74361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,contentTitle:()=>f,default:()=>v,frontMatter:()=>x,metadata:()=>m,toc:()=>b});var r=t(74848),s=t(28453),o=t(11470),a=t(19365),c=t(27065),l=t(90955),i=t(28382),d=t(70629);function u(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(o.A,{children:(0,r.jsx)(a.A,{value:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://mantle-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"blockHash": "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70", "topics":["0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"]}],"id":1}\'\n'})})})})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}var p=t(75222);const x={title:"eth_getLogs"},f=void 0,m={id:"api/networks/mantle/json-rpc-methods/eth_getlogs",title:"eth_getLogs",description:"Parameters",source:"@site/services/api/networks/mantle/json-rpc-methods/eth_getlogs.mdx",sourceDirName:"api/networks/mantle/json-rpc-methods",slug:"/api/networks/mantle/json-rpc-methods/eth_getlogs",permalink:"/test-integrate-infura/services/api/networks/mantle/json-rpc-methods/eth_getlogs",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/mantle/json-rpc-methods/eth_getlogs.mdx",tags:[],version:"current",frontMatter:{title:"eth_getLogs"},sidebar:"servicesSidebar",previous:{title:"eth_getCode",permalink:"/test-integrate-infura/services/api/networks/mantle/json-rpc-methods/eth_getcode"},next:{title:"eth_getProof",permalink:"/test-integrate-infura/services/api/networks/mantle/json-rpc-methods/eth_getproof"}},j={},b=[...c.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...i.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function g(e){const n={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(p.Ay,{})]})}function v(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),s=t(18215),o=t(23104),a=t(56347),c=t(205),l=t(57485),i=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[i,u]=x({queryString:t,groupId:s}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),j=(()=>{const e=i??f;return p({value:e,tabValues:o})?e:null})();(0,c.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=c[t].value;s!==r&&(i(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);