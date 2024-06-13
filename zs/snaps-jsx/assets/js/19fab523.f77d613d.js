"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5312],{75769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(74848),s=n(28453),a=n(40267),i=n(19365);const o={description:"Get started with the Gas APIs.",sidebar_position:1},l="Quickstart",c={id:"gas-api/quickstart",title:"Quickstart",description:"Get started with the Gas APIs.",source:"@site/services/gas-api/quickstart.md",sourceDirName:"gas-api",slug:"/gas-api/quickstart",permalink:"/zs/snaps-jsx/services/gas-api/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get started with the Gas APIs.",sidebar_position:1},sidebar:"servicesSidebar",previous:{title:"Gas API",permalink:"/zs/snaps-jsx/services/gas-api/"},next:{title:"Supported networks",permalink:"/zs/snaps-jsx/services/gas-api/supported-networks"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize a new project directory",id:"initialize-a-new-project-directory",level:2},{value:"Install required packages",id:"install-required-packages",level:2},{value:"Create your <code>.env</code> file",id:"create-your-env-file",level:2},{value:"Create your script",id:"create-your-script",level:2},{value:"Run the script",id:"run-the-script",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsxs)(t.p,{children:["This quickstart shows you how to call the Gas API using JavaScript.\nYou can also use a tool such as ",(0,r.jsx)(t.a,{href:"https://curl.se/",children:"cURL"})," or ",(0,r.jsx)(t.a,{href:"https://www.postman.com/",children:"Postman"})," to\ncall the REST APIs."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["View the ",(0,r.jsx)(t.a,{href:"/zs/snaps-jsx/services/gas-api/api-reference/",children:"API reference content"})," to view the ",(0,r.jsx)(t.code,{children:"curl"})," command for each API."]})}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A valid ",(0,r.jsx)(t.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id",children:"Web3 API key"}),"\nand optional ",(0,r.jsx)(t.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret",children:"API key secret"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download",children:"Node.js and npm installed"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"initialize-a-new-project-directory",children:"Initialize a new project directory"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mkdir new_project\ncd new_project\nnpm init -y\n"})}),"\n",(0,r.jsx)(t.h2,{id:"install-required-packages",children:"Install required packages"}),"\n",(0,r.jsxs)(t.p,{children:["Install the ",(0,r.jsx)(t.code,{children:"axios"})," package:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install axios\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Install the ",(0,r.jsx)(t.a,{href:"https://docs.infura.io/tutorials/developer-tools/javascript-dotenv",children:(0,r.jsx)(t.code,{children:"dotenv"})})," package:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install dotenv\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"create-your-env-file",children:["Create your ",(0,r.jsx)(t.code,{children:".env"})," file"]}),"\n",(0,r.jsxs)(t.p,{children:["Create a ",(0,r.jsx)(t.code,{children:".env"})," file at the project root and add the following data:"]}),"\n",(0,r.jsx)(t.admonition,{title:"warning",type:"caution",children:(0,r.jsxs)(t.p,{children:["Do not commit the ",(0,r.jsx)(t.code,{children:".env"})," file to your repository if it contains sensitive data.\nYou can ",(0,r.jsxs)(t.a,{href:"https://docs.infura.io/tutorials/developer-tools/javascript-dotenv#create-a-.gitignore-file",children:["create a ",(0,r.jsx)(t.code,{children:".gitignore"}),"\nfile"]}),"\nto prevent accidentally committing the file."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title=".env"',children:"INFURA_API_KEY=<API-KEY>\nINFURA_API_KEY_SECRET=<API-KEY-SECRET>\n"})}),"\n",(0,r.jsx)(t.p,{children:"Replace the Infura project credential placeholders with your own."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"INFURA_API_KEY_SECRET"})," is optional and only necessary if you are using an\n",(0,r.jsx)(t.a,{href:"https://docs.infura.io/dashboard/secure-an-api/api-key-secret",children:"API key secret"})," to authenticate requests."]})}),"\n",(0,r.jsx)(t.h2,{id:"create-your-script",children:"Create your script"}),"\n",(0,r.jsxs)(t.p,{children:["The Gas API supports ",(0,r.jsx)(t.a,{href:"/zs/snaps-jsx/services/gas-api/api-reference/#supported-api-request-formats",children:"multiple request formats"}),", and\nyou can call the methods with or without specifying an API key secret."]}),"\n",(0,r.jsxs)(t.p,{children:["Create a file (in this example ",(0,r.jsx)(t.code,{children:"index.js"}),"):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"touch index.js\n"})}),"\n",(0,r.jsx)(t.p,{children:"Copy the following code into your script:"}),"\n",(0,r.jsx)(t.admonition,{title:"note",type:"info",children:(0,r.jsxs)(t.p,{children:["If using a network other than Ethereum Mainnet, update the ",(0,r.jsx)(t.code,{children:"chainId"})," value (",(0,r.jsx)(t.code,{children:"1"}),") in the code to an\nalternate ",(0,r.jsx)(t.a,{href:"/zs/snaps-jsx/services/gas-api/supported-networks",children:"supported network"}),"."]})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Use API key",label:"Use an API key only",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="index.js"',children:'const axios = require("axios");\nrequire("dotenv").config();\n\n// The chain ID of the supported network\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/v3/${process.env.INFURA_API_KEY}/networks/${chainId}/suggestedGasFees`\n    );\n    console.log("Suggested gas fees:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n'})})}),(0,r.jsx)(i.A,{value:"With basic authentication",label:"Use an API key and API key secret",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="index.js"',children:'const axios = require("axios");\nrequire("dotenv").config();\n\nconst Auth = Buffer.from(\n  process.env.INFURA_API_KEY + ":" + process.env.INFURA_API_KEY_SECRET,\n).toString("base64");\n\n// The chain ID of the supported network\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      },\n    );\n    console.log("Suggested gas fees:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"run-the-script",children:"Run the script"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"node index.js\n"})}),"\n",(0,r.jsx)(t.p,{children:"The result should look similar to:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'Suggested gas fees: {\n  low: {\n    suggestedMaxPriorityFeePerGas: "0.05",\n    suggestedMaxFeePerGas: "24.086058416",\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 30000\n  },\n  medium: {\n    suggestedMaxPriorityFeePerGas: "0.1",\n    suggestedMaxFeePerGas: "32.548678862",\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 45000\n  },\n  high: {\n    suggestedMaxPriorityFeePerGas: "0.3",\n    suggestedMaxFeePerGas: "41.161299308",\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 60000\n  },\n  estimatedBaseFee: "24.036058416",\n  networkCongestion: 0.7143,\n  latestPriorityFeeRange: [ "0.1", "20" ],\n  historicalPriorityFeeRange: [ "0.007150439", "113" ],\n  historicalBaseFeeRange: [ "19.531410688", "36.299069766" ],\n  priorityFeeTrend: "down",\n  baseFeeTrend: "down"\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},40267:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),s=n(20053),a=n(23104),i=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:s}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb",flaskOnly:"flaskOnly_bhbK",deprecated:"deprecated_lQ7v"};var j=n(74848),v=n(96763);function b(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;v.log(o);const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=m(e),n={...t,tabValues:t.tabValues.map(((t,n)=>({...t,attributes:{...t.attributes,className:(0,s.A)(t.attributes?.className,{[x.flaskOnly]:e.children[n]?.props.flaskOnly,[x.deprecated]:e.children[n]?.props.deprecated})}})))};return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(y,{...n,...e})]})}function k(e){const t=(0,g.A)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(t))}},20053:(e,t,n)=>{function r(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}n.d(t,{A:()=>s});const s=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);