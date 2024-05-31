"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[64192],{23144:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var t=a(74848),n=a(28453),s=a(11470),i=a(19365);const o={title:"API reference",description:"Reference content for the Gas API."},l=void 0,u={id:"api/infura-expansion-apis/gas-api/api-reference/index",title:"API reference",description:"Reference content for the Gas API.",source:"@site/services/api/infura-expansion-apis/gas-api/api-reference/index.mdx",sourceDirName:"api/infura-expansion-apis/gas-api/api-reference",slug:"/api/infura-expansion-apis/gas-api/api-reference/",permalink:"/test-integrate-infura/services/api/infura-expansion-apis/gas-api/api-reference/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/infura-expansion-apis/gas-api/api-reference/index.mdx",tags:[],version:"current",frontMatter:{title:"API reference",description:"Reference content for the Gas API."},sidebar:"servicesSidebar",previous:{title:"Supported networks",permalink:"/test-integrate-infura/services/api/infura-expansion-apis/gas-api/supported-networks"},next:{title:"Get the base fee history",permalink:"/test-integrate-infura/services/api/infura-expansion-apis/gas-api/api-reference/basefeehistory"}},c={},p=[{value:"Supported API request formats",id:"supported-api-request-formats",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"This section provides reference information for the various Gas REST APIs. Use the APIs to:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/test-integrate-infura/services/api/infura-expansion-apis/gas-api/api-reference/gasprices-type2",children:"Get EIP-1559 gas prices"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/test-integrate-infura/services/api/infura-expansion-apis/gas-api/api-reference/basefeehistory",children:"Get the base fee history (in GWEI)"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/test-integrate-infura/services/api/infura-expansion-apis/gas-api/api-reference/basefeepercentile",children:"Get the base fee percentile (in GWEI)"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/test-integrate-infura/services/api/infura-expansion-apis/gas-api/api-reference/busythreshold",children:"Get the busy threshold for a network"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"supported-api-request-formats",children:"Supported API request formats"}),"\n",(0,t.jsx)(r.p,{children:"You can call the Gas APIs in two ways:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Use the API key only"})," - Add your ",(0,t.jsx)(r.a,{href:"../../../../dashboard/secure-an-api/api-key.md",children:"API key"}),"\nas a path option."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Use the API key and API key secret"})," - Use basic authentication and specify the API key\nand ",(0,t.jsx)(r.a,{href:"../../../../dashboard/secure-an-api/api-key-secret.md",children:"API key secret"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"API key only",label:"Use an API key only",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -X 'GET' 'https://gas.api.infura.io/v3/<API_KEY>/networks/1/suggestedGasFees'\n"})})}),(0,t.jsx)(i.A,{value:"API key and API key secret",label:"Use an API key and API key secret",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -X 'GET' -u <API_KEY>:<API_KEY_SECRET> 'https://gas.api.infura.io/networks/1/suggestedGasFees'\n"})})})]})]})}function f(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,r,a)=>{a.d(r,{A:()=>i});a(96540);var t=a(18215);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:r,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,i),hidden:a,children:r})}},11470:(e,r,a)=>{a.d(r,{A:()=>A});var t=a(96540),n=a(18215),s=a(23104),i=a(56347),o=a(205),l=a(57485),u=a(31682),c=a(70679);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:r,children:a}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return p(e).map((e=>{let{props:{value:r,label:a,attributes:t,default:n}}=e;return{value:r,label:a,attributes:t,default:n}}))}(a);return function(e){const r=(0,u.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function f(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:a}=e;const n=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function b(e){const{defaultValue:r,queryString:a=!1,groupId:n}=e,s=d(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[u,p]=h({queryString:a,groupId:n}),[b,m]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Dv)(a);return[n,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=u??b;return f({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),m(e)}),[p,m,s]),tabValues:s}}var m=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function x(e){let{className:r,block:a,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const r=e.currentTarget,a=l.indexOf(r),n=o[a].value;n!==t&&(u(r),i(n))},p=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;r=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;r=l[a]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},r),children:o.map((e=>{let{value:r,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:p,onClick:c,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===r}),children:a??r},r)}))})}function y(e){let{lazy:r,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function I(e){const r=b(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...r,...e}),(0,v.jsx)(y,{...r,...e})]})}function A(e){const r=(0,m.A)();return(0,v.jsx)(I,{...e,children:p(e.children)},String(r))}},28453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>o});var t=a(96540);const n={},s=t.createContext(n);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);