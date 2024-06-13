"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[81336],{88661:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=t(74848),a=t(28453),s=t(11470),i=t(19365);const c={description:"Reference content for the Gas API."},l="API reference",o={id:"reference/gas-api/api-reference/index",title:"API reference",description:"Reference content for the Gas API.",source:"@site/services/reference/gas-api/api-reference/index.md",sourceDirName:"reference/gas-api/api-reference",slug:"/reference/gas-api/api-reference/",permalink:"/test-integrate-infura/services/reference/gas-api/api-reference/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/gas-api/api-reference/index.md",tags:[],version:"current",frontMatter:{description:"Reference content for the Gas API."},sidebar:"servicesSidebar",previous:{title:"Quickstart",permalink:"/test-integrate-infura/services/reference/gas-api/quickstart"},next:{title:"Get the base fee history",permalink:"/test-integrate-infura/services/reference/gas-api/api-reference/basefeehistory"}},u={},d=[{value:"Supported API request formats",id:"supported-api-request-formats",level:2}];function f(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"api-reference",children:"API reference"}),"\n",(0,n.jsx)(r.p,{children:"This section provides reference information for the various Gas REST APIs.\nUse the APIs to:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/test-integrate-infura/services/reference/gas-api/api-reference/gasprices-type2",children:"Get EIP-1559 gas prices."})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/test-integrate-infura/services/reference/gas-api/api-reference/basefeehistory",children:"Get the base fee history (in Gwei)."})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/test-integrate-infura/services/reference/gas-api/api-reference/basefeepercentile",children:"Get the base fee percentile (in Gwei)."})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/test-integrate-infura/services/reference/gas-api/api-reference/busythreshold",children:"Get the busy threshold for a network."})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"supported-api-request-formats",children:"Supported API request formats"}),"\n",(0,n.jsx)(r.p,{children:"You can call the Gas APIs in two ways:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Using the API key only"})," - Add your ",(0,n.jsx)(r.a,{href:"https://docs.infura.io/dashboard/secure-an-api/api-key",children:"API key"}),"\nas a path option."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Using the API key and API key secret"})," - Use basic authentication and specify the API key\nand ",(0,n.jsx)(r.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret",children:"API key secret"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"API key only",label:"Use an API key only",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -X 'GET' \"https://gas.api.infura.io/v3/<API_KEY>/networks/1/suggestedGasFees\"\n"})})}),(0,n.jsx)(i.A,{value:"API key and API key secret",label:"Use an API key and API key secret",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -X 'GET' -u <API_KEY>:<API_KEY_SECRET> \"https://gas.api.infura.io/networks/1/suggestedGasFees\"\n"})})})]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>A});var n=t(96540),a=t(18215),s=t(23104),i=t(56347),c=t(205),l=t(57485),o=t(31682),u=t(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=f(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[o,d]=p({queryString:t,groupId:a}),[b,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=o??b;return h({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),a=c[t].value;a!==n&&(o(r),i(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:c.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function I(e){const r=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...r,...e}),(0,v.jsx)(y,{...r,...e})]})}function A(e){const r=(0,m.A)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(96540);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);