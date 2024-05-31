"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[44305],{54804:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var s=t(74848),r=t(28453);const a=[];function o(e){const n={p:"p",...(0,r.R)(),...e.components};return(0,s.jsx)(n.p,{children:"Returns information about a uncle of a block given the block hash and the uncle index position."})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},79644:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var s=t(74848),r=t(28453);const a=[];function o(e){const n={a:"a",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,s.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},84964:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var s=t(74848),r=t(28453);const a=[];function o(e){const n={code:"code",em:"em",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"block hash"}),": [",(0,s.jsx)(n.em,{children:"Required"}),"] A string representing the hash (32 bytes) of a block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uncle index position"}),": [",(0,s.jsx)(n.em,{children:"Required"}),"] A hexadecimal equivalent of the integer indicating the uncle's index position."]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},52641:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>c});var s=t(74848),r=t(28453),a=t(11470),o=t(19365);const c=[];function l(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsx)(a.A,{children:(0,s.jsx)(o.A,{value:"JSON",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "id" : 1,\n   "jsonrpc" : "2.0",\n   "result" : {\n     "difficulty": "0x57f117f5c",\n     "extraData": "0x476574682f76312e302e302f77696e646f77732f676f312e342e32",\n     "gasLimit": "0x1388",\n     "gasUsed": "0x0",\n     "hash": "0x932bdf904546a2287a2c9b2ede37925f698a7657484b172d4e5184f80bdd464d",\n     "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n     "miner": "0x5bf5e9cf9b456d6591073513de7fd69a9bef04bc",\n     "mixHash": "0x4500aa4ee2b3044a155252e35273770edeb2ab6f8cb19ca8e732771484462169",\n     "nonce": "0x24732773618192ac",\n     "number": "0x299",\n     "parentHash": "0xa779859b1ee558258b7008bbabff272280136c5dd3eb3ea3bfa8f6ae03bf91e5",\n     "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n     "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",\n     "size": "0x21d",\n     "stateRoot": "0x2604fbf5183f5360da249b51f1b9f1e0f315d2ff3ffa1a4143ff221ad9ca1fec",\n     "timestamp": "0x55ba4827",\n     "totalDifficulty": null,\n     "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n     "uncles": []\n   }\n}\n'})})})})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},72383:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var s=t(74848),r=t(28453);const a=[];function o(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A block object, or null when no block was found. The block object returned will consist of the following keys and their values:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"number"}),": The block number. ",(0,s.jsx)(n.code,{children:"Null"})," when the returned block is the pending block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hash"}),": 32 bytes. Hash of the block. ",(0,s.jsx)(n.code,{children:"Null"})," when its pending block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parentHash"}),": 32 bytes. Hash of the parent block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nonce"}),": 8 bytes. Hash of the generated proof-of-work. ",(0,s.jsx)(n.code,{children:"Null"})," when the returned block is the pending block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sha3Uncles"}),": 32 bytes. The SHA3 of the uncles data in the block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logsBloom"}),": 256 bytes. The Bloom filter for the logs of the block. ",(0,s.jsx)(n.code,{children:"Null"})," when the returned block is the pending block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transactionsRoot"}),": 32 bytes. The root of the transaction trie of the block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stateRoot"}),": 32 bytes. The root of the final state trie of the block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"receiptsRoot"}),": 32 bytes. The root of the receipts trie of the block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"miner"}),": 20 bytes. The address of the beneficiary to whom the mining rewards were given."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"difficulty"}),": The hexadecimal of the difficulty for this block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"totalDifficulty"}),": The hexadecimal of the total difficulty of the chain until this block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"extraData"}),': The "extra data" field of this block.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"size"}),": The hexadecimal of the size of this block in bytes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gasLimit"}),": Maximum gas allowed in this block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gasUsed"}),": Total used gas by all transactions in this block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timestamp"}),": The unix timestamp for when the block was collated."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uncles"}),": (Array). An array of uncle hashes."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},88676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>b,metadata:()=>x,toc:()=>j});var s=t(74848),r=t(28453),a=t(11470),o=t(19365),c=t(54804),l=t(84964),i=t(72383),d=t(79644);function u(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsx)(a.A,{children:(0,s.jsx)(o.A,{value:"cURL",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl https://blast-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_getUncleByBlockHashAndIndex","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35","0x0"],"id":1}\'\n'})})})})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}var f=t(52641);const b={title:"eth_getUncleByBlockHashAndIndex"},p=void 0,x={id:"api/networks/blast/json-rpc-methods/eth_getunclebyblockhashandindex",title:"eth_getUncleByBlockHashAndIndex",description:"Parameters",source:"@site/services/api/networks/blast/json-rpc-methods/eth_getunclebyblockhashandindex.mdx",sourceDirName:"api/networks/blast/json-rpc-methods",slug:"/api/networks/blast/json-rpc-methods/eth_getunclebyblockhashandindex",permalink:"/test-integrate-infura/services/api/networks/blast/json-rpc-methods/eth_getunclebyblockhashandindex",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/blast/json-rpc-methods/eth_getunclebyblockhashandindex.mdx",tags:[],version:"current",frontMatter:{title:"eth_getUncleByBlockHashAndIndex"},sidebar:"servicesSidebar",previous:{title:"eth_getTransactionReceipt",permalink:"/test-integrate-infura/services/api/networks/blast/json-rpc-methods/eth_gettransactionreceipt"},next:{title:"eth_getUncleByBlockNumberAndIndex",permalink:"/test-integrate-infura/services/api/networks/blast/json-rpc-methods/eth_getunclebyblocknumberandindex"}},m={},j=[...c.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...i.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...f.RM];function v(e){const n={h2:"h2",h3:"h3",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,s.jsx)(h,{}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,s.jsx)(f.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(18215);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(96540),r=t(18215),a=t(23104),o=t(56347),c=t(205),l=t(57485),i=t(31682),d=t(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[i,u]=b({queryString:t,groupId:r}),[p,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),m=(()=>{const e=i??p;return f({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=c[t].value;r!==s&&(i(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=p(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,j.jsx)(k,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);