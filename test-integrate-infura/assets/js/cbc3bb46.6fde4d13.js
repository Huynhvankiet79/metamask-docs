"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6484],{73093:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var r=t(74848),o=t(28453);const s=[];function a(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,r.jsx)(n.p,{children:"Returns the number of uncles in a block from a block matching the given block hash."})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},71865:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var r=t(74848),o=t(28453);const s=[];function a(e){const n={a:"a",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},81703:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var r=t(74848),o=t(28453);const s=[];function a(e){const n={code:"code",em:"em",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"block hash"}),": [",(0,r.jsx)(n.em,{children:"Required"}),"] A string representing the hash (32 bytes) of a block."]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},90290:(e,n,t)=>{t.d(n,{Ay:()=>u,RM:()=>c});var r=t(74848),o=t(28453),s=t(11470),a=t(19365);const c=[];function l(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(s.A,{children:(0,r.jsx)(a.A,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x1"\n}\n'})})})})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},64226:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var r=t(74848),o=t(28453);const s=[];function a(e){const n={code:"code",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"block uncle count"}),": A hexadecimal equivalent of the integer representing the number of uncles in the block."]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},71283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>x});var r=t(74848),o=t(28453),s=t(11470),a=t(19365),c=t(73093),l=t(81703),u=t(64226),i=t(71865);function d(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://polygon-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],"id":1}\'\n'})})}),(0,r.jsx)(a.A,{value:"WSS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://polygon-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],"id":1}\'\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var h=t(90290);const m={title:"eth_getUncleCountByBlockHash"},f=void 0,b={id:"reference/polygon-pos/json-rpc-methods/eth_getunclecountbyblockhash",title:"eth_getUncleCountByBlockHash",description:"This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should",source:"@site/services/reference/polygon-pos/json-rpc-methods/eth_getunclecountbyblockhash.mdx",sourceDirName:"reference/polygon-pos/json-rpc-methods",slug:"/reference/polygon-pos/json-rpc-methods/eth_getunclecountbyblockhash",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_getunclecountbyblockhash",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/polygon-pos/json-rpc-methods/eth_getunclecountbyblockhash.mdx",tags:[],version:"current",frontMatter:{title:"eth_getUncleCountByBlockHash"},sidebar:"servicesSidebar",previous:{title:"eth_getUncleByBlockNumberAndIndex",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_getunclebyblocknumberandindex"},next:{title:"eth_getUncleCountByBlockNumber",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_getunclecountbyblocknumber"}},v={},x=[...c.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...u.RM,{value:"Example",id:"example",level:2},...i.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...h.RM];function g(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsxs)(n.admonition,{title:"For Growth and Custom service plans",type:"info",children:[(0,r.jsxs)(n.p,{children:["This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should\nexperience a service issue or outage. See ",(0,r.jsx)(n.a,{href:"../concepts/failover-protection.md",children:"Failover protection"}),"\nand ",(0,r.jsx)(n.a,{href:"../how-to/failover-protection-imp-polygon.md",children:"Enable API request forwarding"}),"\nfor complete details."]}),(0,r.jsx)(n.p,{children:"If you would like failover protection but don't qualify under your current plan, then either\nself-upgrade to the Growth plan or contact a sales representative to upgrade to a Custom plan."})]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(u.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(h.Ay,{})]})}function j(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const o={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),o=t(18215),s=t(23104),a=t(56347),c=t(205),l=t(57485),u=t(31682),i=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:t,groupId:o}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,i.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),v=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),i=e=>{const n=e.currentTarget,t=l.indexOf(n),o=c[t].value;o!==r&&(u(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:i,...s,className:(0,o.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);