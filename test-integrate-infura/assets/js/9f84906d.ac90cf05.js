"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[38091],{91174:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>o});var r=n(74848),s=n(28453);const o=[];function a(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(t.p,{children:"Returns the number of transactions in the block with the given block number."})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},98602:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>o});var r=n(74848),s=n(28453);const o=[];function a(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},84090:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>o});var r=n(74848),s=n(28453);const o=[];function a(e){const t={a:"a",code:"code",em:"em",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"block number"}),":[",(0,r.jsx)(t.em,{children:"Required"}),"] A hexadecimal block number, or one of the string tags ",(0,r.jsx)(t.code,{children:"latest"}),", ",(0,r.jsx)(t.code,{children:"earliest"}),", ",(0,r.jsx)(t.code,{children:"pending"}),", ",(0,r.jsx)(t.code,{children:"safe"}),", or ",(0,r.jsx)(t.code,{children:"finalized"}),". See the ",(0,r.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},90159:(e,t,n)=>{n.d(t,{Ay:()=>u,RM:()=>c});var r=n(74848),s=n(28453),o=n(11470),a=n(19365);const c=[];function l(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(o.A,{children:(0,r.jsx)(a.A,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0xa0"\n}\n'})})})})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8053:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>o});var r=n(74848),s=n(28453);const o=[];function a(e){const t={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"block transaction count"}),": A hexadecimal equivalent of the integer representing the number of transactions in the block."]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},34144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>b,default:()=>g,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var r=n(74848),s=n(28453),o=n(11470),a=n(19365),c=n(91174),l=n(84090),u=n(8053),i=n(98602);function d(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(o.A,{children:(0,r.jsx)(a.A,{value:"cURL",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl https://celo-alfajores.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByNumber","params": ["latest"],"id":1}\'\n'})})})})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var h=n(90159);const m={title:"eth_getBlockTransactionCountByNumber"},b=void 0,f={id:"api/networks/celo/json-rpc-methods/eth_getblocktransactioncountbynumber",title:"eth_getBlockTransactionCountByNumber",description:"Parameters",source:"@site/services/api/networks/celo/json-rpc-methods/eth_getblocktransactioncountbynumber.mdx",sourceDirName:"api/networks/celo/json-rpc-methods",slug:"/api/networks/celo/json-rpc-methods/eth_getblocktransactioncountbynumber",permalink:"/test-integrate-infura/services/api/networks/celo/json-rpc-methods/eth_getblocktransactioncountbynumber",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/celo/json-rpc-methods/eth_getblocktransactioncountbynumber.mdx",tags:[],version:"current",frontMatter:{title:"eth_getBlockTransactionCountByNumber"},sidebar:"servicesSidebar",previous:{title:"eth_getBlockTransactionCountByHash",permalink:"/test-integrate-infura/services/api/networks/celo/json-rpc-methods/eth_getblocktransactioncountbyhash"},next:{title:"eth_getCode",permalink:"/test-integrate-infura/services/api/networks/celo/json-rpc-methods/eth_getcode"}},x={},v=[...c.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...u.RM,{value:"Example",id:"example",level:2},...i.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...h.RM];function j(e){const t={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(u.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(h.Ay,{})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(18215),o=n(23104),a=n(56347),c=n(205),l=n(57485),u=n(31682),i=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:n,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,i.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),x=(()=>{const e=u??b;return h({value:e,tabValues:o})?e:null})();(0,c.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),i=e=>{const t=e.currentTarget,n=l.indexOf(t),s=c[n].value;s!==r&&(u(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:i,...o,className:(0,s.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(g,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);