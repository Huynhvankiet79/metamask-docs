"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[910],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||o;return n?t.createElement(m,s(s({ref:a},u),{},{components:n})):t.createElement(m,s({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=y;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},82629:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const o={sidebar_position:8,description:"Use Infura and custom nodes to make direct, read-only requests in your JavaScript dapp.",tags:["JavaScript SDK"]},s="Make read-only requests",i={unversionedId:"how-to/use-sdk/javascript/make-read-only-requests",id:"how-to/use-sdk/javascript/make-read-only-requests",title:"Make read-only requests",description:"Use Infura and custom nodes to make direct, read-only requests in your JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/javascript/make-read-only-requests.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/make-read-only-requests",permalink:"/wallet/how-to/use-sdk/javascript/make-read-only-requests",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/make-read-only-requests.md",tags:[{label:"JavaScript SDK",permalink:"/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Use Infura and custom nodes to make direct, read-only requests in your JavaScript dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Connect and sign",permalink:"/wallet/how-to/use-sdk/javascript/connect-and-sign"},next:{title:"Batch JSON-RPC requests",permalink:"/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use the Infura API",id:"use-the-infura-api",level:2},{value:"Use custom nodes",id:"use-custom-nodes",level:2},{value:"Use the Infura API and custom nodes",id:"use-the-infura-api-and-custom-nodes",level:2},{value:"Example",id:"example",level:2}],u={toc:p},d="wrapper";function c(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"make-read-only-requests"},"Make read-only requests"),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.infura.io/"},"Infura API")," from your dapp with\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/concepts/sdk/"},"MetaMask SDK")," installed to make direct, read-only JSON-RPC requests."),(0,r.yg)("p",null,"Direct, read-only JSON-RPC requests are blockchain requests that do not require user wallet interaction.\nYour dapp can directly call most ",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API methods"),", bypassing\nuser wallet authentication for read-only operations."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Your dapp cannot directly call the following RPC methods, which require user wallet interaction:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"eth_requestAccounts")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"eth_sendTransaction")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"eth_signTransaction")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"eth_sign")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"eth_accounts")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"personal_sign")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"eth_signTypedData_v4")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"wallet_watchAsset")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"wallet_addEthereumChain")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"wallet_switchEthereumChain")))),(0,r.yg)("p",null,"Configure your dapp to make read-only requests using the ",(0,r.yg)("a",{parentName:"p",href:"#use-the-infura-api"},"Infura API"),",\n",(0,r.yg)("a",{parentName:"p",href:"#use-custom-nodes"},"custom nodes"),", or ",(0,r.yg)("a",{parentName:"p",href:"#use-the-infura-api-and-custom-nodes"},"both"),"."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"An Infura API key.\nCreate one by following the first two steps in the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.infura.io/getting-started"},"Infura getting started guide"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"An allowlist configured for your API key.")),(0,r.yg)("admonition",{parentName:"li",title:"important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Your API key, when used with the SDK, is vulnerable to exposure.\nIf someone inspects your dapp's code, they can potentially retrieve your API key and submit\nrequests to Infura, impersonating your account."),(0,r.yg)("p",{parentName:"admonition"},"Use ",(0,r.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"allowlists"),"\nto protect against this vulnerability.\nYou can restrict interactions with your API key to specific addresses, origins, user agents, and request methods.\nWe recommend using all allowlist options to maximize the security of your API key and dapp."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/javascript/"},"MetaMask SDK set up")," in your JavaScript dapp."))),(0,r.yg)("h2",{id:"use-the-infura-api"},"Use the Infura API"),(0,r.yg)("p",null,"To use the Infura API to make read-only requests, specify your Infura API key using the\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/sdk-js-options#infuraapikey"},(0,r.yg)("inlineCode",{parentName:"a"},"infuraAPIKey"))," option when instantiating the SDK\nin your dapp."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'infuraAPIKey: "YOUR-API-KEY"\n')),(0,r.yg)("h2",{id:"use-custom-nodes"},"Use custom nodes"),(0,r.yg)("p",null,"To use your own node (for example, with ",(0,r.yg)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat"),") to make read-only requests,\nspecify your node's chain ID and RPC URL using the\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/sdk-js-options#readonlyrpcmap"},(0,r.yg)("inlineCode",{parentName:"a"},"readonlyRPCMap"))," option when instantiating the\nSDK in your dapp."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'readonlyRPCMap: {\n  "0x539": "http://localhost:8545",\n}\n')),(0,r.yg)("p",null,"In this example, chain ID ",(0,r.yg)("inlineCode",{parentName:"p"},"0x539")," maps to the custom node's RPC URL."),(0,r.yg)("h2",{id:"use-the-infura-api-and-custom-nodes"},"Use the Infura API and custom nodes"),(0,r.yg)("p",null,"You can use both the Infura API and custom nodes to make read-only requests by specifying both the\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/sdk-js-options#infuraapikey"},(0,r.yg)("inlineCode",{parentName:"a"},"infuraAPIKey"))," and\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/sdk-js-options#readonlyrpcmap"},(0,r.yg)("inlineCode",{parentName:"a"},"readonlyRPCMap"))," options when instantiating the\nSDK in your dapp."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'sdkOptions={{\n  infuraAPIKey: "YOUR-API-KEY",\n  readonlyRPCMap: {\n    "0x539": "http://localhost:8545",\n  },\n  // Other options.\n}}\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"infuraAPIKey")," provides access to various networks supported by Infura, and ",(0,r.yg)("inlineCode",{parentName:"p"},"readonlyRPCMap"),"\nprovides access to custom nodes.\nThe ",(0,r.yg)("inlineCode",{parentName:"p"},"readonlyRPCMap")," values override Infura networks in case of a conflict."),(0,r.yg)("p",null,"Refer to the SDK's\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/blob/dd9a3aaa1b5afa208cdb0d0768916d15b8638b25/packages/sdk/src/services/MetaMaskSDK/InitializerManager/setupInfuraProvider.ts#L12"},"default RPC URLs map"),"\nto see how Infura networks are configured by default.\nBy defining your own ",(0,r.yg)("inlineCode",{parentName:"p"},"readonlyRPCMap"),", you can override these defaults or add support for other networks."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"The following is an example of using both the Infura API and custom nodes with the SDK:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'sdkOptions={{\n  infuraAPIKey: "YOUR-API-KEY",\n  readonlyRPCMap: {\n    // Custom node.\n    "0x539": "http://localhost:8545",\n    // Override Infura Mainnet.\n    "0x1": "https://mainnet.infura.io/v3/YOUR-API-KEY",\n  },\n  defaultReadOnlyChainId: "0x1",\n  // Other options.\n}\n')),(0,r.yg)("p",null,"In this example, read-only requests to Mainnet (chain ID ",(0,r.yg)("inlineCode",{parentName:"p"},"0x1"),") use the Infura API, while read-only\nrequests to the local testnet (chain ID ",(0,r.yg)("inlineCode",{parentName:"p"},"0x539"),") use the custom node.\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/sdk-js-options#defaultreadonlychainid"},(0,r.yg)("inlineCode",{parentName:"a"},"defaultReadOnlyChainId"))," enables making\nread-only requests before the user connects to MetaMask, and specifies to make those requests to Mainnet."))}c.isMDXComponent=!0}}]);