"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9716],{21559:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(t.p,{children:"Used for submitting a proof-of-work solution."})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},21311:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},35293:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"work array"})," array with the following properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"8 bytes: The nonce found (64 bits)"}),"\n",(0,r.jsx)(t.li,{children:"32 bytes: The header's pow-hash (256 bits)"}),"\n",(0,r.jsx)(t.li,{children:"32 bytes: The mix digest (256 bits)"}),"\n"]})]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},94520:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>i});var r=n(74848),s=n(28453),a=n(11470),o=n(19365);const i=[];function l(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(a.A,{children:(0,r.jsx)(o.A,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": false\n}\n'})})})})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},86608:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"is valid flag"}),": (boolean): Returns ",(0,r.jsx)(t.code,{children:"true"})," if the provided solution is valid, otherwise ",(0,r.jsx)(t.code,{children:"false"}),"."]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},57426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var r=n(74848),s=n(28453),a=n(11470),o=n(19365),i=n(21559),l=n(35293),c=n(86608),u=n(21311);function d(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(a.A,{children:(0,r.jsx)(o.A,{value:"cURL",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl https://blast-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_submitWork","params": ["0x0000000000000001","0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"],"id":1}\'\n'})})})})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var h=n(94520);const m={title:"eth_submitWork"},f=void 0,b={id:"api/networks/blast/json-rpc-methods/eth_submitwork",title:"eth_submitWork",description:"Parameters",source:"@site/services/api/networks/blast/json-rpc-methods/eth_submitwork.mdx",sourceDirName:"api/networks/blast/json-rpc-methods",slug:"/api/networks/blast/json-rpc-methods/eth_submitwork",permalink:"/test-integrate-infura/services/api/networks/blast/json-rpc-methods/eth_submitwork",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/blast/json-rpc-methods/eth_submitwork.mdx",tags:[],version:"current",frontMatter:{title:"eth_submitWork"},sidebar:"servicesSidebar",previous:{title:"eth_sign",permalink:"/test-integrate-infura/services/api/networks/blast/json-rpc-methods/eth_sign"},next:{title:"eth_syncing",permalink:"/test-integrate-infura/services/api/networks/blast/json-rpc-methods/eth_syncing"}},x={},v=[...i.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...c.RM,{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...h.RM];function j(e){const t={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(u.Ay,{}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(h.Ay,{})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(18215),a=n(23104),o=n(56347),i=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(g,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);