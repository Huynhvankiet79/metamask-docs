"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6516],{38635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(74848),a=n(28453),l=n(11470),s=n(19365);const i={},o="block_put",u={id:"api/networks/ipfs/http-api-methods/block_put",title:"block_put",description:"/api/v0/block/put",source:"@site/services/api/networks/ipfs/http-api-methods/block_put.md",sourceDirName:"api/networks/ipfs/http-api-methods",slug:"/api/networks/ipfs/http-api-methods/block_put",permalink:"/test-integrate-infura/services/api/networks/ipfs/http-api-methods/block_put",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/ipfs/http-api-methods/block_put.md",tags:[],version:"current",frontMatter:{},sidebar:"servicesSidebar",previous:{title:"block_get",permalink:"/test-integrate-infura/services/api/networks/ipfs/http-api-methods/block_get"},next:{title:"block_stat",permalink:"/test-integrate-infura/services/api/networks/ipfs/http-api-methods/block_stat"}},c={},d=[{value:"/api/v0/block/put",id:"apiv0blockput",level:2},{value:"REQUEST",id:"request",level:3},{value:"REQUEST PARAMS",id:"request-params",level:4},{value:"RESPONSE",id:"response",level:3},{value:"BODY",id:"body",level:4},{value:"RESULT FIELDS",id:"result-fields",level:4}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"block_put",children:"block_put"}),"\n",(0,r.jsx)(t.h2,{id:"apiv0blockput",children:"/api/v0/block/put"}),"\n",(0,r.jsx)(t.p,{children:"Store input as an IPFS block."}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"REQUEST"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl "https://ipfs.infura.io:5001/api/v0/block/put?format=v0&mhtype=sha2-256&mhlen=-1" \\\n    -X POST \\\n    -u "<API_KEY>:<API_KEY_SECRET>" \\\n    -H "Content-Type: multipart/form-data" \\\n    -F file=@"<file>"\n'})})}),(0,r.jsx)(s.A,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl "https://ipfs.infura.io:5001/api/v0/block/put" \\\n    -X POST \\\n    -u "PROJECT_ID:PROJECT_SECRET" \\\n    -H "Content-Type: multipart/form-data" \\\n    -F file=@"/purpink.jpeg"\n'})})})]}),"\n",(0,r.jsx)(t.h4,{id:"request-params",children:"REQUEST PARAMS"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"file"})," ",(0,r.jsx)(t.em,{children:"[Required]"})," - The path to a file to be added to IPFS."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"format"})," ",(0,r.jsx)(t.em,{children:"[Optional]"})," - Content ID format for blocks to be created with. The default is ",(0,r.jsx)(t.code,{children:"v0"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"mhtype"})," ",(0,r.jsx)(t.em,{children:"[Optional]"})," - Multihash hash function. The default is ",(0,r.jsx)(t.code,{children:"sha2-256"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"mhlen"})," ",(0,r.jsx)(t.em,{children:"[Optional]"})," - Multihash hash length. The default is ",(0,r.jsx)(t.code,{children:"-1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"RESPONSE"}),"\n",(0,r.jsx)(t.p,{children:"On success, the call to this endpoint will return with 200 and the following body:"}),"\n",(0,r.jsx)(t.h4,{id:"body",children:"BODY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "Key": "QmaYL7E4gDTPNfLxrCEEEcNJgcHBJ55NxxTnxpDKWqMtJ3",\n  "Size": 2392\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"result-fields",children:"RESULT FIELDS"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Key"})," - Key of the block."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Size"})," - Integer indication size in bytes."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>E});var r=n(96540),a=n(18215),l=n(23104),s=n(56347),i=n(205),o=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=f({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=u??m;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(k,{...t,...e})]})}function E(e){const t=(0,b.A)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);