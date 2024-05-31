"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[80531],{57845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(74848),s=n(28453);const i={sidebar_position:4,description:"Learn about the contract provider in Unity.",tags:["Unity SDK"]},o="Contract provider",a={id:"how-to/use-sdk/gaming/unity/smart-contracts/contract-provider",title:"Contract provider",description:"Learn about the contract provider in Unity.",source:"@site/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider.md",sourceDirName:"how-to/use-sdk/gaming/unity/smart-contracts",slug:"/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider",permalink:"/test-integrate-infura/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider.md",tags:[{inline:!0,label:"Unity SDK",permalink:"/test-integrate-infura/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn about the contract provider in Unity.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Contract proxy class",permalink:"/test-integrate-infura/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class"},next:{title:"Enable human-readable addresses",permalink:"/test-integrate-infura/wallet/how-to/use-sdk/gaming/unity/dweb"}},c={},d=[{value:"<code>IProvider</code>",id:"iprovider",level:2},{value:"<code>ILegacyProvider</code>",id:"ilegacyprovider",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"contract-provider",children:"Contract provider"}),"\n",(0,r.jsxs)(t.p,{children:["When ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/wallet/how-to/use-sdk/gaming/unity/smart-contracts/",children:"interacting with smart contracts in Unity"}),", the provider is similar to a JavaScript\nprovider.\nThe provider is responsible for sending the request formed inside the\n",(0,r.jsx)(t.a,{href:"/test-integrate-infura/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",children:"contract proxy class"})," to the blockchain RPC node and optionally decoding\nthe response.\nIf the provider doesn't decode the response, then it's considered an ",(0,r.jsx)(t.a,{href:"#ilegacyprovider",children:(0,r.jsx)(t.code,{children:"ILegacyProvider"})}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"iprovider",children:(0,r.jsx)(t.code,{children:"IProvider"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"IProvider"})," interface defines the following function:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"Task<TR> Request<TR>(string method, object[] parameters = null);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This function must send a JSON-RPC request with the given method and parameters.\nIt must decode the JSON-RPC result response into the type ",(0,r.jsx)(t.code,{children:"TR"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"IProvider"})," must also define two additional properties:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"// The current chain ID the provider is connected to.\nlong ChainId { get; }\n\n// The current address connected to the provider.\nstring ConnectedAddress { get; }\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For backwards compatibility, the ",(0,r.jsx)(t.code,{children:"ILegacyProvider"})," function is also defined:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"object Request(string method, object[] parameters = null);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To easily support this function, use ",(0,r.jsx)(t.code,{children:"Request<object>"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"public object Request(string method, object[] parameters = null)\n{\n  return this.Request<object>(method, parameters);\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"ilegacyprovider",children:(0,r.jsx)(t.code,{children:"ILegacyProvider"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ILegacyProvider"})," is an interface that declares an interface that does not support response decoding.\nThe ",(0,r.jsx)(t.code,{children:"ILegacyProvider"})," interface defines the following function:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"object Request(string method, object[] parameters = null);\n"})}),"\n",(0,r.jsx)(t.p,{children:"This function must send a JSON-RPC request with the given method and parameters.\nIt should decode the response, but it's not required.\nIt may return any of the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The response as a JSON string"}),"\n",(0,r.jsx)(t.li,{children:"The response as a JSON string, wrapped in a Task"}),"\n",(0,r.jsx)(t.li,{children:"The response decoded into some object"}),"\n",(0,r.jsx)(t.li,{children:"The response decoded into some object, wrapped in a Task"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If the function returns a JSON string, then the ",(0,r.jsx)(t.code,{children:"Contract"})," class attempts to deserialize the JSON\nstring into the desired type.\nIf it returns any other object type, the ",(0,r.jsx)(t.code,{children:"Contract"})," class attempts to convert to the desired type by\nfirst serializing the object into JSON, then deserializing the JSON back into the desired type.\nThe desired type is defined in the ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface",children:"contract interface"})," used."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ILegacyProvider"})," must also define two additional properties:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"// The current chain ID the provider is connected to.\nlong ChainId { get; }\n\n// The current address connected to the provider.\nstring ConnectedAddress { get; }\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);