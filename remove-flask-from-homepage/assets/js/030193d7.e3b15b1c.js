"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3381],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={description:"Integrate MetaMask SDK with Wagmi in your JavaScript dapp.",sidebar_position:2,sidebar_label:"Wagmi",tags:["JavaScript SDK"]},o="Use Wagmi with MetaMask SDK",s={unversionedId:"how-to/use-sdk/3rd-party-libraries/wagmi",id:"how-to/use-sdk/3rd-party-libraries/wagmi",title:"Use Wagmi with MetaMask SDK",description:"Integrate MetaMask SDK with Wagmi in your JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/3rd-party-libraries/wagmi.md",sourceDirName:"how-to/use-sdk/3rd-party-libraries",slug:"/how-to/use-sdk/3rd-party-libraries/wagmi",permalink:"/remove-flask-from-homepage/wallet/how-to/use-sdk/3rd-party-libraries/wagmi",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/3rd-party-libraries/wagmi.md",tags:[{label:"JavaScript SDK",permalink:"/remove-flask-from-homepage/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:2,frontMatter:{description:"Integrate MetaMask SDK with Wagmi in your JavaScript dapp.",sidebar_position:2,sidebar_label:"Wagmi",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Web3-Onboard",permalink:"/remove-flask-from-homepage/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard"},next:{title:"Make read-only requests",permalink:"/remove-flask-from-homepage/wallet/how-to/make-read-only-requests"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Configure Wagmi with the MetaMask connector",id:"1-configure-wagmi-with-the-metamask-connector",level:3},{value:"2. Configure the SDK",id:"2-configure-the-sdk",level:3},{value:"Dapp metadata",id:"dapp-metadata",level:4},{value:"Infura API key",id:"infura-api-key",level:4},{value:"Universal links",id:"universal-links",level:4},{value:"3. Implement contract interaction using <code>usePrepareContractWrite</code>",id:"3-implement-contract-interaction-using-usepreparecontractwrite",level:3},{value:"Benefits of using the Infura API with Wagmi",id:"benefits-of-using-the-infura-api-with-wagmi",level:2}],m={toc:l},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-wagmi-with-metamask-sdk"},"Use Wagmi with MetaMask SDK"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wagmi.sh/"},"Wagmi")," is a powerful and efficient React Hooks library designed to streamline\ndapp development by simplifying Ethereum interactions."),(0,r.kt)("p",null,"You can integrate ",(0,r.kt)("a",{parentName:"p",href:"/remove-flask-from-homepage/wallet/concepts/sdk/"},"MetaMask SDK")," into your dapp alongside Wagmi,\nusing the MetaMask connector with Wagmi, to enable your users to seamlessly and securely connect to\nthe MetaMask browser extension and MetaMask Mobile."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure you have a basic understanding of Ethereum smart contracts and React Hooks."),(0,r.kt)("li",{parentName:"ul"},"Set up a project with ",(0,r.kt)("a",{parentName:"li",href:"https://wagmi.sh/react/getting-started"},"Wagmi"),"."),(0,r.kt)("li",{parentName:"ul"},"Create an Infura API key and allowlist to ",(0,r.kt)("a",{parentName:"li",href:"/remove-flask-from-homepage/wallet/how-to/make-read-only-requests"},"make read-only requests"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-configure-wagmi-with-the-metamask-connector"},"1. Configure Wagmi with the MetaMask connector"),(0,r.kt)("p",null,"Configure Wagmi to include MetaMask as a connector and specify the Ethereum chains your dapp will support.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { createConfig, http } from "wagmi";\nimport { mainnet, sepolia } from "wagmi/chains";\nimport { metaMask } from "wagmi/connectors";\n\nexport const config = createConfig({\n    chains: [mainnet, sepolia],\n    connectors: [\n        metaMask({\n            dappMetadata: {\n                name: "Example Wagmi dapp",\n            },\n        }),\n    ],\n    transports: {\n        [mainnet.id]: http(),\n        [sepolia.id]: http(),\n    },\n});\n')),(0,r.kt)("h3",{id:"2-configure-the-sdk"},"2. Configure the SDK"),(0,r.kt)("p",null,"When configuring the connector, make sure to configure the proper\n",(0,r.kt)("a",{parentName:"p",href:"/remove-flask-from-homepage/wallet/reference/sdk-js-options"},"SDK options"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'connectors: [\n    metaMask({\n        dappMetadata: {\n            name: "Example Wagmi dapp",\n        },\n        infuraAPIKey: "YOUR-API-KEY",\n        // Other options\n    }),\n],\n')),(0,r.kt)("h4",{id:"dapp-metadata"},"Dapp metadata"),(0,r.kt)("p",null,"Specify the ",(0,r.kt)("a",{parentName:"p",href:"/remove-flask-from-homepage/wallet/reference/sdk-js-options#dappmetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," option to help\nidentify your dapp within the MetaMask ecosystem.\nThis option is required when configuring the MetaMask connector with Wagmi."),(0,r.kt)("h4",{id:"infura-api-key"},"Infura API key"),(0,r.kt)("p",null,"We recommend specifying the ",(0,r.kt)("a",{parentName:"p",href:"/remove-flask-from-homepage/wallet/reference/sdk-js-options#infuraapikey"},(0,r.kt)("inlineCode",{parentName:"a"},"infuraAPIKey")),"\noption to ",(0,r.kt)("a",{parentName:"p",href:"/remove-flask-from-homepage/wallet/how-to/make-read-only-requests"},"make read-only requests")," using the Infura API.\nRead more about the ",(0,r.kt)("a",{parentName:"p",href:"#benefits-of-using-the-infura-api-with-wagmi"},"benefits of using the Infura API with Wagmi"),"."),(0,r.kt)("h4",{id:"universal-links"},"Universal links"),(0,r.kt)("p",null,"We recommend using universal links instead of deeplinks to avoid issues on iOS.\nThus, do not enable the ",(0,r.kt)("a",{parentName:"p",href:"/remove-flask-from-homepage/wallet/reference/sdk-js-options#usedeeplink"},(0,r.kt)("inlineCode",{parentName:"a"},"useDeeplink"))," option.\nUsing universal links ensures a smoother transition for users accessing your dapp from mobile\ndevices, providing a better user experience compared to traditional deeplinking methods."),(0,r.kt)("h3",{id:"3-implement-contract-interaction-using-usepreparecontractwrite"},"3. Implement contract interaction using ",(0,r.kt)("inlineCode",{parentName:"h3"},"usePrepareContractWrite")),(0,r.kt)("p",null,"Due to a known issue in Safari where a 500ms timeout can interrupt smart contract interactions, we\nrecommend using the ",(0,r.kt)("a",{parentName:"p",href:"https://1.x.wagmi.sh/react/prepare-hooks/usePrepareContractWrite"},(0,r.kt)("inlineCode",{parentName:"a"},"usePrepareContractWrite")),"\nhook from Wagmi.\nThis approach ensures smooth transactions by preparing the contract write operation ahead of the\nactual execution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { usePrepareContractWrite, useContractWrite } from "wagmi";\n\nconst { config } = usePrepareContractWrite({\n  address: "0xContractAddress",\n  abi: contractABI,\n  functionName: "functionToCall",\n  args: [arg1, arg2],\n});\n\nconst { write } = useContractWrite(config);\n\nwrite();\n')),(0,r.kt)("h2",{id:"benefits-of-using-the-infura-api-with-wagmi"},"Benefits of using the Infura API with Wagmi"),(0,r.kt)("p",null,"Wagmi is not optimized for mobile environments.\nThis limitation becomes evident when making read-only requests, which are queries that fetch data\nfrom the blockchain without making a transaction.\nSince mobile dapps might not maintain a continuous connection to MetaMask, these read-only requests\ncan fail, leading to a suboptimal user experience."),(0,r.kt)("p",null,"These are some errors that might occur in mobile environments:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wagmi errors",src:a(80933).Z,width:"1136",height:"340"})),(0,r.kt)("p",null,"To overcome this limitation in mobile dapps that rely on Wagmi, use the Infura API to make read-only\nrequests.\nYou can do this by ",(0,r.kt)("a",{parentName:"p",href:"#2-configure-the-sdk"},"configuring the SDK with an Infura API key"),".\nThis approach offloads the read operations to Infura's nodes, reducing the load on your own\ninfrastructure and ensuring high availability and reliability, independent of the user's wallet connection."),(0,r.kt)("p",null,"By using the Infura API, you can ensure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Uninterrupted access:")," Continuous network access for read-only requests, regardless of MetaMask's state.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Enhanced stability:")," Stabilized dapp functionality by relying on Infura's robust infrastructure\nrather than the mobile environment's variable connectivity and background processing constraints."))),(0,r.kt)("p",null,"In summary, using the Infura API compensates for Wagmi's lack of mobile optimization by providing a\nstable network backend for read-only operations."))}u.isMDXComponent=!0},80933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wagmi-errors-a2d119e19bfdb281e9ffe8513b6e823b.png"}}]);