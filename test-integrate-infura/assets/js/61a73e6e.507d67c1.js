"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[24079],{79883:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var a=t(74848),r=t(28453);const s=[];function c(e){const n={p:"p",...(0,r.R)(),...e.components};return(0,a.jsx)(n.p,{children:"Returns information about a block by hash."})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},89051:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var a=t(74848),r=t(28453);const s=[];function c(e){const n={a:"a",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,a.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},74257:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var a=t(74848),r=t(28453);const s=[];function c(e){const n={a:"a",code:"code",em:"em",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"block parameter"}),": [",(0,a.jsx)(n.em,{children:"Required"}),"] A hexadecimal block number, or one of the string tags ",(0,a.jsx)(n.code,{children:"latest"}),", ",(0,a.jsx)(n.code,{children:"earliest"}),", ",(0,a.jsx)(n.code,{children:"pending"}),", ",(0,a.jsx)(n.code,{children:"safe"}),", or ",(0,a.jsx)(n.code,{children:"finalized"}),". See the ",(0,a.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"show transaction details flag"}),": [",(0,a.jsx)(n.em,{children:"Required"}),"] If set to ",(0,a.jsx)(n.code,{children:"true"}),", returns the full transaction objects. If ",(0,a.jsx)(n.code,{children:"false"})," returns only the hashes of the transactions."]}),"\n"]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},57468:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>o});var a=t(74848),r=t(28453),s=t(11470),c=t(19365);const o=[];function l(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsx)(s.A,{children:(0,a.jsx)(c.A,{value:"JSON",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n   "id" : 1,\n   "jsonrpc" : "2.0",\n   "result" : {\n      "difficulty" : "0xbfabcdbd93dda",\n      "extraData" : "0x737061726b706f6f6c2d636e2d6e6f64652d3132",\n      "gasLimit" : "0x79f39e",\n      "gasUsed" : "0x79ccd3",\n      "hash" : "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",\n      "logsBloom" : "0x4848112002a2020aaa0812180045840210020005281600c80104264300080008000491220144461026015300100000128005018401002090a824a4150015410020140400d808440106689b29d0280b1005200007480ca950b15b010908814e01911000054202a020b05880b914642a0000300003010044044082075290283516be82504082003008c4d8d14462a8800c2990c88002a030140180036c220205201860402001014040180002006860810ec0a1100a14144148408118608200060461821802c081000042d0810104a8004510020211c088200420822a082040e10104c00d010064004c122692020c408a1aa2348020445403814002c800888208b1",\n      "miner" : "0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c",\n      "mixHash" : "0x3d1fdd16f15aeab72e7db1013b9f034ee33641d92f71c0736beab4e67d34c7a7",\n      "nonce" : "0x4db7a1c01d8a8072",\n      "number" : "0x5bad55",\n      "parentHash" : "0x61a8ad530a8a43e3583f8ec163f773ad370329b2375d66433eb82f005e1d6202",\n      "receiptsRoot" : "0x5eced534b3d84d3d732ddbc714f5fd51d98a941b28182b6efe6df3a0fe90004b",\n      "sha3Uncles" : "0x8a562e7634774d3e3a36698ac4915e37fc84a2cd0044cb84fa5d80263d2af4f6",\n      "size" : "0x41c7",\n      "stateRoot" : "0xf5208fffa2ba5a3f3a2f64ebd5ca3d098978bedd75f335f56b705d8715ee2305",\n      "timestamp" : "0x5b541449",\n      "totalDifficulty" : "0x12ac11391a2f3872fcd",\n      "transactions" : [\n         "0x8784d99762bccd03b2086eabccee0d77f14d05463281e121a62abfebcf0d2d5f",\n         "0x311be6a9b58748717ac0f70eb801d29973661aaf1365960d159e4ec4f4aa2d7f",\n         "0xe42b0256058b7cad8a14b136a0364acda0b4c36f5b02dea7e69bfd82cef252a2",\n         "0x4eb05376055c6456ed883fc843bc43df1dcf739c321ba431d518aecd7f98ca11",\n         "0x994dd9e72b212b7dc5fd0466ab75adf7d391cf4f206a65b7ad2a1fd032bb06d7",\n         ...\n         "0xf1cd627c97746bc75727c2f0efa2d0dc66cca1b36d8e45d897e18a9b19af2f60",\n         "0x241d89f7888fbcfadfd415ee967882fec6fdd67c07ca8a00f2ca4c910a84c7dd"\n      ],\n      "transactionsRoot" : "0xf98631e290e88f58a46b7032f025969039aa9b5696498efc76baf436fa69b262",\n      "uncles" : [\n         "0x824cce7c7c2ec6874b9fa9a9a898eb5f27cbaf3991dfa81084c3af60d1db618c"\n      ]\n   }\n}\n'})})})})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},69612:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var a=t(74848),r=t(28453);const s=[];function c(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"A block object, or null when no block was found. The returned block object contains the following keys and their values:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"difficulty"}),": A hexadecimal of the difficulty for this block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"extraData"}),': The "extra data" field of this block.']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gasLimit"}),": Maximum gas allowed in this block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gasUsed"}),": Total used gas by all transactions in this block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"hash"}),": 32 bytes. Hash of the block. ",(0,a.jsx)(n.code,{children:"Null"})," when the returned block is the pending block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"logsBloom"}),": 256 bytes. The bloom filter for the logs of the block. ",(0,a.jsx)(n.code,{children:"Null"})," when the returned block is the pending block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"miner"}),": 20 bytes. Address of the beneficiary to whom the mining rewards were given."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"nonce"}),": 8 bytes. Hash of the generated proof-of-work. ",(0,a.jsx)(n.code,{children:"Null"})," when the returned block is the pending block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"number"}),": Block number. ",(0,a.jsx)(n.code,{children:"Null"})," when the returned block is the pending block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"parentHash"}),": 32 bytes. Hash of the parent block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"receiptsRoot"}),": 32 bytes. The root of the receipts trie of the block. Also see ",(0,a.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/#tries-in-ethereum",children:"Tries in Ethereum"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"sha3Uncles"}),": 32 bytes. The SHA3 of the uncles data in the block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"size"}),": A hexadecimal of the size of this block in bytes."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"stateRoot"}),": 32 bytes. The root of the final state trie of the block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"timestamp"}),": The unix timestamp for when the block was collated."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"totalDifficulty"}),": A hexadecimal of the total difficulty of the chain until this block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transactions"}),": [Array] An array of transaction objects, or 32 bytes transaction hashes depending on the last given parameter."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transactionsRoot"}),": 32 bytes. The root of the transaction trie of the block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"uncles"}),": [Array] An array of uncle hashes."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},75305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>b,metadata:()=>x,toc:()=>j});var a=t(74848),r=t(28453),s=t(11470),c=t(19365),o=t(79883),l=t(74257),i=t(69612),d=t(89051);function u(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{value:"cURL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["0x5BAD55",false],"id":1}\'\n'})})}),(0,a.jsx)(c.A,{value:"WSS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://avalanche-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params": ["0x5BAD55",false],"id":1}\'\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}var f=t(57468);const b={title:"eth_getBlockByNumber"},p=void 0,x={id:"api/networks/avalanche-c-chain/json-rpc-methods/eth_getblockbynumber",title:"eth_getBlockByNumber",description:"Parameters",source:"@site/services/api/networks/avalanche-c-chain/json-rpc-methods/eth_getblockbynumber.mdx",sourceDirName:"api/networks/avalanche-c-chain/json-rpc-methods",slug:"/api/networks/avalanche-c-chain/json-rpc-methods/eth_getblockbynumber",permalink:"/test-integrate-infura/services/api/networks/avalanche-c-chain/json-rpc-methods/eth_getblockbynumber",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/avalanche-c-chain/json-rpc-methods/eth_getblockbynumber.mdx",tags:[],version:"current",frontMatter:{title:"eth_getBlockByNumber"},sidebar:"servicesSidebar",previous:{title:"eth_getBlockByHash",permalink:"/test-integrate-infura/services/api/networks/avalanche-c-chain/json-rpc-methods/eth_getblockbyhash"},next:{title:"eth_getBlockTransactionCountByHash",permalink:"/test-integrate-infura/services/api/networks/avalanche-c-chain/json-rpc-methods/eth_getblocktransactioncountbyhash"}},m={},j=[...o.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...i.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...f.RM];function v(e){const n={h2:"h2",h3:"h3",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,a.jsx)(l.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,a.jsx)(i.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,a.jsx)(d.Ay,{}),"\n",(0,a.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,a.jsx)(h,{}),"\n",(0,a.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,a.jsx)(f.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(18215),s=t(23104),c=t(56347),o=t(205),l=t(57485),i=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,c.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[c,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,u]=b({queryString:t,groupId:r}),[p,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),m=(()=>{const e=i??p;return f({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:c,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(i(n),c(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=p(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,j.jsx)(k,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);